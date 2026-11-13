import { expect, test } from "@playwright/test";

test.describe("Partridge — Temiz Başlangıç Tuvali", () => {
  test("Sayfa başarıyla yüklenmeli ve ana başlık görünür olmalıdır", async ({ page }) => {
    await page.goto("/");
    const mainHeading = page.getByRole("heading", { level: 1 });
    await expect(mainHeading).toBeVisible({ timeout: 10000 });
    await expect(mainHeading).toHaveText("Partridge");
  });
});
