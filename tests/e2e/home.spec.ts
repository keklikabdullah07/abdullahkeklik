import { expect, test } from "@playwright/test";

test.describe("Partridge Vitrin Ana Sayfası", () => {
  test("Sayfa başarıyla yüklenmeli ve ana başlık görünür olmalıdır", async ({ page }) => {
    await page.goto("/");

    // 1. Ana H1 Başlık Denetimi
    const mainHeading = page.getByRole("heading", { level: 1 });
    await expect(mainHeading).toBeVisible();
    await expect(mainHeading).toContainText("Yüksek performanslı sistemler");

    // 2. Marka Logosu ve İletişim Butonu
    const logoLink = page.getByRole("link", { name: "Abdullah Keklik Ana Sayfa" });
    await expect(logoLink).toBeVisible();
    const connectButton = page.getByRole("link", { name: "Bağlantı Kur" });
    await expect(connectButton).toBeVisible();

    // 3. Vitrin Bölümü ve Projeler
    const showcaseHeading = page.getByRole("heading", {
      name: "Vitrin & Çalışmalar",
    });
    await expect(showcaseHeading).toBeVisible();

    // 4. Proje Kartlarının Varlığı
    const projectArticle = page.getByRole("article");
    const count = await projectArticle.count();
    expect(count).toBeGreaterThanOrEqual(4);

    // 5. Filtre Butonları ile Etkileşim
    const corporateFilter = page.getByRole("button", { name: /Kurumsal/i });
    await corporateFilter.click();
    await expect(corporateFilter).toHaveAttribute("aria-pressed", "true");
  });
});
