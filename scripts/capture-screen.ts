import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { chromium } from "@playwright/test";

async function main() {
  const artifactDir =
    "C:\\Users\\Partridge\\.gemini\\antigravity\\brain\\24930da5-f99f-419c-b327-331dea7a150b";
  if (!fs.existsSync(artifactDir)) {
    fs.mkdirSync(artifactDir, { recursive: true });
  }

  console.log("Starting next start server on port 3042 on 127.0.0.1...");
  const server = spawn("npx", ["next", "start", "-p", "3042", "-H", "127.0.0.1"], {
    shell: true,
    stdio: ["ignore", "pipe", "pipe"],
  });

  server.stdout?.on("data", (d) => console.log(`[Next.js] ${d}`));
  server.stderr?.on("data", (d) => console.error(`[Next.js err] ${d}`));

  // Wait for server to be responsive
  let ready = false;
  for (let i = 0; i < 30; i++) {
    try {
      const res = await fetch("http://127.0.0.1:3042");
      if (res.status === 200) {
        ready = true;
        break;
      }
    } catch (e) {
      const err = e as { message?: string; cause?: { message?: string; code?: string } };
      console.log(
        `Probe ${i}: ${err?.message} (cause: ${err?.cause?.message || err?.cause?.code})`,
      );
    }
    await new Promise((r) => setTimeout(r, 1000));
  }

  if (!ready) {
    console.error("Server failed to start on port 3042");
    server.kill();
    process.exit(1);
  }

  console.log("Server is ready. Launching headless browser...");
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();

  console.log("Navigating to http://127.0.0.1:3042...");
  await page.goto("http://127.0.0.1:3042", { waitUntil: "networkidle" });
  await page.waitForTimeout(2000); // Wait for animations to settle

  const fullpagePath = path.join(artifactDir, "current-fullpage.png");
  await page.screenshot({ path: fullpagePath, fullPage: true });
  console.log(`Saved full-page screenshot to: ${fullpagePath}`);

  const heroPath = path.join(artifactDir, "current-hero.png");
  const heroEl = page.locator("section").first();
  if (await heroEl.count()) {
    await heroEl.screenshot({ path: heroPath });
    console.log(`Saved hero screenshot to: ${heroPath}`);
  }

  const bentoPath = path.join(artifactDir, "current-bento.png");
  const bentoEl = page.locator("#bento-vitrin");
  if (await bentoEl.count()) {
    await bentoEl.screenshot({ path: bentoPath });
    console.log(`Saved bento screenshot to: ${bentoPath}`);
  }

  await browser.close();
  server.kill();
  console.log("Done capture!");
  process.exit(0);
}

main().catch((err) => {
  console.error("Capture failed:", err);
  process.exit(1);
});
