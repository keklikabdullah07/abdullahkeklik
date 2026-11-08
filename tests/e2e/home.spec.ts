import { expect, test } from "@playwright/test";

test.describe("Abdullah Keklik — Awwwards Seviyesi Vitrin", () => {
  test("Sayfa başarıyla yüklenmeli, interaktif bento ve spotlight bileşenleri görünür olmalıdır", async ({
    page,
  }) => {
    await page.goto("/");

    // 1. Ana H1 Başlık Denetimi
    const mainHeading = page.getByRole("heading", { level: 1 });
    await expect(mainHeading).toBeVisible();
    await expect(mainHeading).toContainText("Yüksek verimli mimariler");

    // 2. Marka Logosu ve İletişim Butonu
    const logoLink = page.getByRole("link", { name: "Abdullah Keklik Ana Sayfa" });
    await expect(logoLink).toBeVisible();
    const connectButton = page.getByRole("link", { name: "Bağlantı Kur" });
    await expect(connectButton).toBeVisible();

    // 3. Yüksek Kontrastlı Parlayan CTA Butonu
    const ctaButton = page.getByRole("link", { name: "İnteraktif Vitrini İncele" });
    await expect(ctaButton).toBeVisible();

    // 4. İnteraktif Bento Bölümü
    const showcaseHeading = page.getByRole("heading", {
      name: "İnteraktif Bento Vitrini",
    });
    await expect(showcaseHeading).toBeVisible();

    // 5. Bento Canlı Terminal Önizlemesi ve Benchmark Butonu
    const benchmarkButton = page.getByRole("button", { name: "Benchmark Testini Başlat" });
    await expect(benchmarkButton).toBeVisible();
    await benchmarkButton.click();
    await expect(page.getByText("ops/sec completed")).toBeVisible({ timeout: 3000 });

    // 6. Filtre Butonları ile Etkileşim
    const corporateFilter = page.getByRole("button", { name: /Kurumsal/i });
    await corporateFilter.click();
    await expect(corporateFilter).toHaveAttribute("aria-pressed", "true");
  });
});
