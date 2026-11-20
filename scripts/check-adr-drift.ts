import * as fs from "node:fs";
import * as path from "node:path";

const ROOT_DIR = process.cwd();
const AGENTS_MD = path.join(ROOT_DIR, "AGENTS.md");
const DECISIONS_DIR = path.join(ROOT_DIR, "docs", "decisions");

function parseCapabilities(content: string): Record<string, boolean> {
  const caps: Record<string, boolean> = {};
  const lines = content.split("\n");
  let inCaps = false;

  for (const line of lines) {
    if (line.trim().startsWith("capabilities:")) {
      inCaps = true;
      continue;
    }
    if (inCaps) {
      if (line.trim().startsWith("---") || line.trim().startsWith("##")) {
        break;
      }
      const match = line.match(/^\s*([a-z0-9_]+)\s*:\s*(true|false)/i);
      if (match) {
        caps[match[1]] = match[2].toLowerCase() === "true";
      }
    }
  }

  return caps;
}

function checkInvariants() {
  console.log("🛡️ [Harness Drift & Invariant Denetimi] Başlatılıyor...");

  if (!fs.existsSync(AGENTS_MD)) {
    console.warn("⚠️ AGENTS.md bulunamadı, drift denetimi atlandı.");
    process.exit(0);
  }

  const agentsContent = fs.readFileSync(AGENTS_MD, "utf-8");
  const caps = parseCapabilities(agentsContent);

  const errors: string[] = [];

  // 1. database_migrations kontrolü
  if (caps.database_migrations) {
    const hasDrizzle =
      fs.existsSync(path.join(ROOT_DIR, "drizzle.config.ts")) ||
      fs.existsSync(path.join(ROOT_DIR, "drizzle.config.js"));
    const hasPrisma = fs.existsSync(path.join(ROOT_DIR, "prisma", "schema.prisma"));
    if (!hasDrizzle && !hasPrisma) {
      errors.push(
        "AGENTS.md 'database_migrations: true' tanımlı ancak ne 'drizzle.config.ts' ne de 'prisma/schema.prisma' mevcut.",
      );
    }
  }

  // 2. e2e_browser_testing kontrolü
  if (caps.e2e_browser_testing) {
    const hasPlaywright =
      fs.existsSync(path.join(ROOT_DIR, "playwright.config.ts")) ||
      fs.existsSync(path.join(ROOT_DIR, "playwright.config.js"));
    if (!hasPlaywright) {
      errors.push(
        "AGENTS.md 'e2e_browser_testing: true' tanımlı ancak 'playwright.config.ts' mevcut değil.",
      );
    }
  }

  // 3. ADR Dosya Kontrolleri
  if (fs.existsSync(DECISIONS_DIR)) {
    const adrFiles = fs
      .readdirSync(DECISIONS_DIR)
      .filter((f) => f.endsWith(".md") && f !== "0000-template.md");

    for (const adr of adrFiles) {
      const adrContent = fs.readFileSync(path.join(DECISIONS_DIR, adr), "utf-8");
      // Check status
      if (adrContent.includes("Durum: Accepted")) {
        const affectedSection = adrContent.split(/###\s+Etkilenen Dosyalar/i)[1];
        if (affectedSection) {
          const filesBlock = affectedSection.split(/###|\n##/)[0];
          const fileLines = filesBlock.match(/`([^`]+)`/g);
          if (fileLines) {
            for (const rawFile of fileLines) {
              const cleaned = rawFile.replace(/`/g, "").trim();
              if (
                !cleaned.includes("*") &&
                !cleaned.startsWith("http") &&
                cleaned.includes(".") &&
                !fs.existsSync(path.join(ROOT_DIR, cleaned))
              ) {
                // Not strict fail for greenfield, but informative warning
                console.warn(
                  `⚠️ [ADR DRIFT] ${adr} içinde belirtilen dosya henüz mevcut değil: ${cleaned}`,
                );
              }
            }
          }
        }
      }
    }
  }

  // 4. Anti-AI-Slop & Klişe İkon İhlali Denetimi
  const walkFiles = (dir: string): string[] => {
    let results: string[] = [];
    if (!fs.existsSync(dir)) return results;
    const list = fs.readdirSync(dir);
    for (const file of list) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        results = results.concat(walkFiles(fullPath));
      } else if (file.endsWith(".tsx") || file.endsWith(".ts")) {
        results.push(fullPath);
      }
    }
    return results;
  };

  const srcFiles = walkFiles(path.join(ROOT_DIR, "src"));
  const bannedIcons = ["Sparkles", "Wand", "Bot", "Brain"];

  for (const file of srcFiles) {
    const content = fs.readFileSync(file, "utf-8");
    for (const icon of bannedIcons) {
      if (icon === "Bot" && content.includes("googleBot")) continue;
      const hasBanned = new RegExp(`\\b${icon}\\b`).test(content);
      if (hasBanned && content.includes("lucide-react")) {
        errors.push(
          `[AI SLOP YASAĞI] ${path.relative(ROOT_DIR, file)} dosyasında '${icon}' ikonu tespit edildi. Mimari anayasa gereği yapay zeka klişesi ikonlar yasaktır.`,
        );
      }
    }
  }

  if (errors.length > 0) {
    console.error("\n❌ Harness Invariant / Capability Drift İhlalleri Tespit Edildi:");
    for (const err of errors) {
      console.error(`   👉 ${err}`);
    }
    console.error(
      "\nLütfen ya AGENTS.md capabilities ayarlarını güncelleyin ya da eksik mimari altyapıyı tamamlayın.",
    );
    process.exit(1);
  }

  console.log("✅ [Harness Drift Denetimi] Başarılı: Tüm anayasal invariant'lar kodla uyumlu.");
}

checkInvariants();
