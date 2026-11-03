import * as fs from "node:fs";
import * as path from "node:path";

interface ProjectMap {
  modules: string[];
  routes: Array<{ path: string; file: string; methods: string[] }>;
  schemaTables: Array<{ table: string; file: string; fields: string[] }>;
  envVars: string[];
  scripts: Record<string, string>;
  adrs: Array<{ id: string; title: string; status: string }>;
  activeSpecs: Array<{ id: string; title: string; status: string }>;
}

const ROOT_DIR = process.cwd();
const OUTPUT_FILE = path.join(ROOT_DIR, "docs", "PROJECT-MAP.md");

function safeReadDir(dir: string): string[] {
  try {
    return fs.readdirSync(dir);
  } catch {
    return [];
  }
}

function findFiles(
  dir: string,
  extensions: string[],
  ignoreDirs = [
    "node_modules",
    ".git",
    "dist",
    ".next",
    "coverage",
    "repos",
    "archive",
    "fixtures",
    "test",
    "tests",
    "e2e",
    "vendor",
    ".turbo",
    "artifacts",
  ],
): string[] {
  const results: string[] = [];
  if (!fs.existsSync(dir)) return results;

  function traverse(currentDir: string) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isDirectory()) {
        if (!ignoreDirs.includes(entry.name)) {
          traverse(path.join(currentDir, entry.name));
        }
      } else if (entry.isFile()) {
        if (extensions.some((ext) => entry.name.endsWith(ext))) {
          results.push(path.join(currentDir, entry.name));
        }
      }
    }
  }

  traverse(dir);
  return results.sort();
}

function scanModules(): string[] {
  const candidateDirs = ["src", "app", "lib", "modules", "components", "db", "server", "services"];
  const found: string[] = [];
  for (const c of candidateDirs) {
    const fullPath = path.join(ROOT_DIR, c);
    if (fs.existsSync(fullPath) && fs.statSync(fullPath).isDirectory()) {
      found.push(c);
      const subEntries = safeReadDir(fullPath);
      for (const sub of subEntries) {
        const subPath = path.join(fullPath, sub);
        if (fs.statSync(subPath).isDirectory()) {
          found.push(`${c}/${sub}`);
        }
      }
    }
  }
  return found.sort();
}

function scanRoutes(): Array<{ path: string; file: string; methods: string[] }> {
  const routes: Array<{ path: string; file: string; methods: string[] }> = [];
  const files = findFiles(ROOT_DIR, [".ts", ".tsx", ".js", ".jsx"]);

  for (const file of files) {
    const rel = path.relative(ROOT_DIR, file).replace(/\\/g, "/");
    // Next.js App Router
    if (rel.startsWith("app/") || rel.startsWith("src/app/")) {
      const isPage =
        rel.endsWith("page.tsx") || rel.endsWith("page.jsx") || rel.endsWith("page.ts");
      const isRoute = rel.endsWith("route.ts") || rel.endsWith("route.js");
      if (isPage || isRoute) {
        let routeUrl = rel
          .replace(/^(src\/)?app/, "")
          .replace(/\/(page|route)\.(tsx|ts|jsx|js)$/, "");
        if (routeUrl === "") routeUrl = "/";

        let methods: string[] = [];
        if (isRoute) {
          const content = fs.readFileSync(file, "utf-8");
          const foundMethods = ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"].filter(
            (m) => new RegExp(`export\\s+(async\\s+)?function\\s+${m}\\b`).test(content),
          );
          methods = foundMethods.length > 0 ? foundMethods : ["API"];
        } else {
          methods = ["PAGE (UI)"];
        }

        routes.push({ path: routeUrl, file: rel, methods });
      }
    }
  }

  return routes.sort((a, b) => a.path.localeCompare(b.path));
}

function scanSchemas(): Array<{ table: string; file: string; fields: string[] }> {
  const schemas: Array<{ table: string; file: string; fields: string[] }> = [];
  const files = findFiles(ROOT_DIR, [".ts", ".js", ".sql"]);

  for (const file of files) {
    const rel = path.relative(ROOT_DIR, file).replace(/\\/g, "/");

    // 1. DDL Migration SQL parsing (Authoritative DDL)
    if (rel.endsWith(".sql")) {
      const content = fs.readFileSync(file, "utf-8");
      const ddlRegex =
        /CREATE\s+TABLE\s+(?:IF\s+NOT\s+EXISTS\s+)?["`]?([a-zA-Z0-9_]+)["`]?\s*\(([\s\S]*?)\);/gi;
      let ddlMatch = ddlRegex.exec(content);
      while (ddlMatch !== null) {
        const tableName = ddlMatch[1];
        const body = ddlMatch[2];
        const fields: string[] = [];

        const columnLines = body.split(",\n");
        for (const rawCol of columnLines) {
          const colTrimmed = rawCol.trim();
          if (
            colTrimmed &&
            !colTrimmed.startsWith("CONSTRAINT") &&
            !colTrimmed.startsWith("PRIMARY KEY") &&
            !colTrimmed.startsWith("FOREIGN KEY")
          ) {
            const colParts = colTrimmed.replace(/["`]/g, "").split(/\s+/);
            if (colParts.length >= 2) {
              fields.push(`${colParts[0]}: ${colParts[1]}`);
            }
          }
        }

        schemas.push({
          table: `${tableName} (DDL/Migration)`,
          file: rel,
          fields,
        });
        ddlMatch = ddlRegex.exec(content);
      }
    }

    // 2. TypeScript Drizzle Schema parsing
    if (rel.includes("schema") || rel.includes("models") || rel.startsWith("db/")) {
      const content = fs.readFileSync(file, "utf-8");
      const tableRegex =
        /(?:export\s+const\s+(\w+)\s*=\s*)?(?:pgTable|sqliteTable|mysqlTable)\s*\(\s*["'](\w+)["']/g;
      let match = tableRegex.exec(content);
      while (match !== null) {
        const variableName = match[1] || match[2];
        const tableName = match[2];
        schemas.push({
          table: `${tableName} (export: ${variableName})`,
          file: rel,
          fields: [],
        });
        match = tableRegex.exec(content);
      }
    }
  }

  return schemas.sort((a, b) => a.table.localeCompare(b.table));
}

function scanEnvVars(): string[] {
  const envVars = new Set<string>();
  const files = findFiles(ROOT_DIR, [".ts", ".tsx", ".js", ".jsx", ".mjs"]);

  const envRegex = /\b(?:process\.env|import\.meta\.env)\.([A-Z0-9_]+)\b/g;

  for (const file of files) {
    const content = fs.readFileSync(file, "utf-8");
    let match = envRegex.exec(content);
    while (match !== null) {
      envVars.add(match[1]);
      match = envRegex.exec(content);
    }
  }

  return Array.from(envVars).sort();
}

function scanADRs(): Array<{ id: string; title: string; status: string }> {
  const adrDir = path.join(ROOT_DIR, "docs", "decisions");
  const adrs: Array<{ id: string; title: string; status: string }> = [];
  if (!fs.existsSync(adrDir)) return adrs;

  const files = fs.readdirSync(adrDir).filter((f) => f.endsWith(".md") && f !== "0000-template.md");
  for (const f of files) {
    const content = fs.readFileSync(path.join(adrDir, f), "utf-8");
    const titleMatch = content.match(/^#\s+(.+)$/m);
    const statusMatch = content.match(/\*\*Durum:\*\*\s*([^\n\r`]+)/i);
    adrs.push({
      id: f.replace(/\.md$/, ""),
      title: titleMatch ? titleMatch[1].trim() : f,
      status: statusMatch ? statusMatch[1].trim() : "Bilinmiyor",
    });
  }

  return adrs.sort((a, b) => a.id.localeCompare(b.id));
}

function scanActiveSpecs(): Array<{ id: string; title: string; status: string }> {
  const specDir = path.join(ROOT_DIR, "specs", "active");
  const specs: Array<{ id: string; title: string; status: string }> = [];
  if (!fs.existsSync(specDir)) return specs;

  const files = fs
    .readdirSync(specDir)
    .filter((f) => f.endsWith(".md") && f !== "0000-template.md");
  for (const f of files) {
    const content = fs.readFileSync(path.join(specDir, f), "utf-8");
    const titleMatch = content.match(/^#\s+(.+)$/m);
    const statusMatch = content.match(/\*\*Durum:\*\*\s*([^\n\r`]+)/i);
    specs.push({
      id: f.replace(/\.md$/, ""),
      title: titleMatch ? titleMatch[1].trim() : f,
      status: statusMatch ? statusMatch[1].trim() : "Draft",
    });
  }

  return specs.sort((a, b) => a.id.localeCompare(b.id));
}

function generateMarkdown(data: ProjectMap): string {
  let md = `# Proje Haritası (PROJECT-MAP.md)

<!-- AUTO-GENERATED: DO NOT EDIT DIRECTLY. Run 'npx tsx scripts/generate-project-map.ts' to regenerate. -->
> Bu harita projenin güncel kod yapısını, endpoint'lerini, şemalarını ve mimari kararlarını tek bakışta özetler.
> Elle ekleme yapmak veya iş kurallarını tanımlamak için lütfen \`docs/DOMAIN.md\` dosyasını kullanın.

---

## 1. Modüller ve Dizin Yapısı
`;

  if (data.modules.length === 0) {
    md += "_Henüz tanımlı modül dizini bulunmuyor (Greenfield)._\n";
  } else {
    for (const m of data.modules) {
      md += `- \`${m}/\`\n`;
    }
  }

  md += "\n---\n\n## 2. API ve Sayfa Rotaları (Routes)\n";
  if (data.routes.length === 0) {
    md += "_Henüz rota veya endpoint tanımlanmadı._\n";
  } else {
    md += "| Rota | Tip / Metotlar | Dosya |\n|---|---|---|\n";
    for (const r of data.routes) {
      md += `| \`${r.path}\` | \`${r.methods.join(", ")}\` | \`${r.file}\` |\n`;
    }
  }

  md += "\n---\n\n## 3. Veritabanı Şemaları ve Tablolar\n";
  if (data.schemaTables.length === 0) {
    md += "_Henüz Drizzle veya ORM şema tablosu tespit edilmedi._\n";
  } else {
    md += "| Tablo | Kolonlar / Alanlar | Tanım Dosyası |\n|---|---|---|\n";
    for (const t of data.schemaTables) {
      const fieldSummary = t.fields.length > 0 ? t.fields.join(", ") : "_Belirtilmedi_";
      md += `| \`${t.table}\` | \`${fieldSummary}\` | \`${t.file}\` |\n`;
    }
  }

  md += "\n---\n\n## 4. Kullanılan Ortam Değişkenleri (Environment Variables)\n";
  if (data.envVars.length === 0) {
    md += "_Kod içerisinde env değişkeni referansı bulunamadı._\n";
  } else {
    for (const env of data.envVars) {
      md += `- \`${env}\`\n`;
    }
  }

  md += "\n---\n\n## 5. Mimari Karar Kayıtları (ADR)\n";
  if (data.adrs.length === 0) {
    md += "_Henüz ADR kaydedilmedi._\n";
  } else {
    md += "| ADR ID | Başlık | Durum |\n|---|---|---|\n";
    for (const adr of data.adrs) {
      md += `| \`${adr.id}\` | ${adr.title} | **${adr.status}** |\n`;
    }
  }

  md += "\n---\n\n## 6. Aktif Şartnameler (Active Specs)\n";
  if (data.activeSpecs.length === 0) {
    md += "_Şu anda aktif spec bulunmuyor._\n";
  } else {
    md += "| Spec ID | Başlık | Durum |\n|---|---|---|\n";
    for (const spec of data.activeSpecs) {
      md += `| \`${spec.id}\` | ${spec.title} | **${spec.status}** |\n`;
    }
  }

  return md;
}

function main() {
  const modules = scanModules();
  const routes = scanRoutes();
  const schemaTables = scanSchemas();
  const envVars = scanEnvVars();
  const adrs = scanADRs();
  const activeSpecs = scanActiveSpecs();

  const pkgJsonPath = path.join(ROOT_DIR, "package.json");
  let scripts: Record<string, string> = {};
  if (fs.existsSync(pkgJsonPath)) {
    try {
      const pkg = JSON.parse(fs.readFileSync(pkgJsonPath, "utf-8"));
      scripts = pkg.scripts || {};
    } catch {
      // ignore
    }
  }

  const projectMapData: ProjectMap = {
    modules,
    routes,
    schemaTables,
    envVars,
    scripts,
    adrs,
    activeSpecs,
  };

  const mdContent = generateMarkdown(projectMapData);
  fs.writeFileSync(OUTPUT_FILE, mdContent, "utf-8");
  console.log(`✅ [PROJECT-MAP] Başarıyla üretildi: ${OUTPUT_FILE}`);
}

main();
