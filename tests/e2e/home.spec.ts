import { expect, test } from "@playwright/test";

test.describe("Abdullah Keklik — Awwwards Seviyesi Vitrin & Kinetik Deneyim", () => {
  test("Sayfa başarıyla yüklenmeli, preloader perdesi kalkmalı, kinetik başlık ve bento vitrini görünür olmalıdır", async ({
    page,
  }) => {
    await page.goto("/");

    // 1. Ana H1 Başlık Denetimi (Preloader sonrası sahnelenme)
    const mainHeading = page.getByRole("heading", { level: 1 });
    await expect(mainHeading).toBeVisible({ timeout: 10000 });
    await expect(mainHeading).toContainText("Yüksek verimli mimariler");

    // 2. Kuş ve Marka Amblemi
    const birdEmblem = page.locator("img[alt*='Partridge Kuş Amblemi']");
    await expect(birdEmblem).toBeVisible();

    // 3. Marka Logosu ve İletişim Butonu
    const logoLink = page.getByRole("link", { name: "Abdullah Keklik Ana Sayfa" });
    await expect(logoLink).toBeVisible();
    const connectButton = page.getByRole("link", { name: "Bağlantı Kur" });
    await expect(connectButton).toBeVisible();

    // 4. Dokunsal Manyetik CTA Butonu
    const ctaButton = page.getByRole("link", { name: "İnteraktif Vitrini İncele" });
    await expect(ctaButton).toBeVisible();

    // 5. İnteraktif Bento Bölümü & Kinetik Başlık
    const showcaseHeading = page.getByRole("heading", {
      name: "İnteraktif Bento Vitrini",
    });
    await expect(showcaseHeading).toBeVisible();

    // 6. Bento Canlı Terminal Önizlemesi ve Benchmark Butonu
    const benchmarkButton = page.getByRole("button", { name: "Benchmark Testini Başlat" });
    await expect(benchmarkButton).toBeVisible();
    await benchmarkButton.click();
    await expect(page.getByText("ops/sec completed")).toBeVisible({ timeout: 5000 });

    // 7. Fiziksel Teknoloji Arenası
    const physicsHeading = page.getByRole("heading", { name: "Fiziksel Teknoloji Totemleri" });
    await expect(physicsHeading).toBeVisible();

    // 8. Filtre Butonları ile Etkileşim
    const corporateFilter = page.getByRole("button", { name: /Kurumsal/i });
    await corporateFilter.click();
    await expect(corporateFilter).toHaveAttribute("aria-pressed", "true");
  });
});
