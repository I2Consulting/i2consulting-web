
const { test, expect } = require('@playwright/test');

test('Navegación a la página de filosofía', async ({ page }) => {
  // 1. Navegar a la página de inicio
  await page.goto('http://localhost:8000/index.html');

  // 2. Hacer clic en el enlace "Nuestra Filosofía"
  await page.click('a[href="filosofia.html"]');

  // 3. Verificar que la URL es la correcta
  await expect(page).toHaveURL('http://localhost:8000/filosofia.html');

  // 4. Tomar una captura de pantalla de la página de filosofía
  await page.screenshot({ path: 'filosofia-screenshot-full.png', fullPage: true });
});
