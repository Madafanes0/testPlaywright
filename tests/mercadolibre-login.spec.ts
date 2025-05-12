import { test, expect } from '@playwright/test';

test.describe('Mercado Libre Login Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.mercadolibre.com.mx');
    await page.getByRole('link', { name: 'Ingresa', exact: true }).click();
  });

  test('should show error with invalid credentials', async ({ page }) => {
    await page.getByLabel('Usuario, email o celular').fill('invalid@email.com');
    await page.getByRole('button', { name: 'Continuar' }).click();
    
    await page.waitForSelector('.error-message');
    
    const errorMessage = await page.locator('.error-message').textContent();
    expect(errorMessage).toContain('No pudimos encontrar tu cuenta');
  });

  test('should navigate to password page with valid email', async ({ page }) => {
    await page.getByLabel('Usuario, email o celular').fill('test@example.com');
    await page.getByRole('button', { name: 'Continuar' }).click();
    
    await expect(page.getByLabel('Contraseña')).toBeVisible();
  });

  test('should maintain email when going back', async ({ page }) => {
    const testEmail = 'test@example.com';
    await page.getByLabel('Usuario, email o celular').fill(testEmail);
    
    await page.getByRole('button', { name: 'Continuar' }).click();
    await page.getByRole('link', { name: 'Volver' }).click();
    
    const emailInput = page.getByLabel('Usuario, email o celular');
    await expect(emailInput).toHaveValue(testEmail);
  });
}); 