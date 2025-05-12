import { test, expect } from '@playwright/test';

test.describe('Google Search and Navigate', () => {
  test('should search for Playwright, click first link, and verify title', async ({ page }) => {
    await page.getByRole('combobox', { name: 'Buscar' }).click();
    await page.getByRole('combobox', { name: 'Buscar' }).fill('playwright');
    await page.keyboard.press('Enter');
    await page.getByRole('link', { name: 'Playwright: Fast and reliable' }).click();
  });
});