import * as fs from "node:fs";
import * as path from "node:path";

const ROOT_DIR = process.cwd();
const SPECS_DIR = path.join(ROOT_DIR, "specs", "active");

function checkUnknowns() {
  console.log("🔍 [Bilinmeyenler Kapısı] Denetleniyor...");

  if (!fs.existsSync(SPECS_DIR)) {
    console.log("ℹ️ Henüz specs/active klasörü yok, adım atlandı.");
    process.exit(0);
  }

  const specFiles = fs
    .readdirSync(SPECS_DIR)
    .filter((f) => f.endsWith(".md") && f !== "0000-template.md");

  let hasError = false;

  for (const file of specFiles) {
    const fullPath = path.join(SPECS_DIR, file);
    const content = fs.readFileSync(fullPath, "utf-8");

    // Check status
    const statusMatch = content.match(/\*\*Durum:\*\*\s*([^\n\r`]+)/i);
    const status = statusMatch ? statusMatch[1].trim().toLowerCase() : "draft";

    if (status.includes("approved") || status.includes("shipped")) {
      // Find unresolved checkboxes or UNK markers in Bilinmeyenler section
      const unknownsSection = content.split(/##\s+.*Bilinmeyenler/i)[1];
      if (unknownsSection) {
        // Take content until next major section ##
        const sectionBody = unknownsSection.split(/##\s+/)[0];
        const lines = sectionBody.split("\n");

        for (const line of lines) {
          const isUnchecked = line.includes("- [ ]");
          const isOpen = /durum:\s*açık/i.test(line) || /status:\s*open/i.test(line);

          if (isUnchecked && isOpen) {
            console.error(
              `❌ [HATA] ${file} 'Approved' durumunda, ancak çözülmemiş bilinmeyen içeriyor:\n   👉 "${line.trim()}"`,
            );
            hasError = true;
          }
        }
      }
    }
  }

  if (hasError) {
    console.error(
      "\n🚨 Bilinmeyenler kapısı geçilemedi! Spec onaylanmadan önce tüm açık sorular çözülmeli veya [x] ile kapatılmalıdır.",
    );
    process.exit(1);
  }

  console.log("✅ [Bilinmeyenler Kapısı] Başarılı: Açık bilinmeyeni olan onaylanmış spec yok.");
}

checkUnknowns();
