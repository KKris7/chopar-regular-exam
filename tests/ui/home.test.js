const { test, expect } = require('@playwright/test');

test('Check home page', async ({ page }) => {
    await page.goto('http://localhost:8070/');
    const heading = await page.$('title');
    const text = await heading.textContent();
    expect(text).toContain('Cookbook');  
  });
  