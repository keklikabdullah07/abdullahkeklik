import { expect, test } from "@playwright/test";

test.describe("Partridge — Editoryal Vitrin E2E", () => {
  test("Sayfa başarıyla yüklenmeli ve ana bölümler görünür olmalıdır", async ({ page }) => {
    await page.goto("/");
    const mainHeading = page.getByRole("heading", { level: 1 });
    await expect(mainHeading).toBeVisible({ timeout: 10000 });
    await expect(mainHeading).toContainText("ABDULLAH");
    await expect(mainHeading).toContainText("KEKLİK");

    // Ana bölümlerin varlığı
    await expect(page.locator("#curated-works")).toBeVisible();
    await expect(page.locator("#about")).toBeVisible();
    await expect(page.locator("#contact")).toBeVisible();
  });
});
