import * as fs from "node:fs";
import * as path from "node:path";
import { chromium } from "@playwright/test";

const ROOT_DIR = process.cwd();

async function runVisualCheck() {
  console.log("📸 [Görsel Hakikat Kapısı] Başlatılıyor...");

  const args = process.argv.slice(2);
  const targetUrl =
    args.find((a) => a.startsWith("--url="))?.split("=")[1] ||
    process.env.APP_URL ||
    "http://localhost:3042";

  const isOfflinePreflight = args.includes("--preflight") || args.includes("--check-driver");

  if (isOfflinePreflight) {
    console.log("🔍 Preflight: Playwright sürücüsü ve Chromium kontrol ediliyor...");
    try {
      const browser = await chromium.launch({ headless: true });
      const version = browser.version();
      await browser.close();
      console.log(`✅ [Görsel Hakikat] Chromium motoru hazır (v${version}).`);
      process.exit(0);
    } catch (_err) {
      console.error(
        "❌ [Görsel Hakikat] Chromium başlatılamadı. Lütfen 'npx playwright install chromium' çalıştırın.",
      );
      process.exit(1);
    }
  }

  // Final Gate: Actual UI verification
  const now = new Date();
  const dateStr = now.toISOString().replace(/[:.]/g, "-");
  const artifactDir = path.join(ROOT_DIR, "artifacts", "visual", dateStr);
  fs.mkdirSync(artifactDir, { recursive: true });

  console.log(`🌐 Hedef Adres taranıyor: ${targetUrl}`);

  try {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    const response = await page.goto(targetUrl, { timeout: 15000, waitUntil: "load" });
    if (!response || !response.ok()) {
      throw new Error(`Sayfa yanıt vermedi veya HTTP hata kodu döndü: ${response?.status()}`);
    }

    // 1. Visible check
    const body = page.locator("body");
    await body.waitFor({ state: "visible", timeout: 5000 });

    // 2. Bounding box > 0 check
    const box = await body.boundingBox();
    if (!box || box.width <= 0 || box.height <= 0) {
      throw new Error("Görsel İllüzyon: Sayfa gövdesinin (body) genişlik veya yüksekliği 0!");
    }

    // 3. Inner text > 0 check (Sayfa boş kalmadı kanıtı)
    const text = await page.evaluate(() => document.body.innerText.trim());
    if (text.length === 0) {
      throw new Error("Görsel İllüzyon: Sayfa yüklendi ancak body içi tamamen boş!");
    }

    // 4. Save Screenshot Artifact
    const screenshotPath = path.join(artifactDir, "final-gate.png");
    await page.screenshot({ path: screenshotPath, fullPage: true });

    await browser.close();

    console.log(`📸 Ekran görüntüsü kaydedildi: ${screenshotPath}`);
    console.log("✅ [Görsel Hakikat Kapısı] Başarılı: Arayüz canlı ve render edilmiş durumda.");
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error(`❌ [Görsel Hakikat Başarısız]: ${message}`);
    console.error(
      "💡 İpucu: Bu kapı yalnızca teslimat öncesi (Final Gate) çalıştırılır. Uygulamanın dev/prod sunucusunun açık olduğundan emin olun.",
    );
    process.exit(1);
  }
}

runVisualCheck();
