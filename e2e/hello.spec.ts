import { expect, test } from '@playwright/test'

test('has hello world', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByText(/hello world/i)).toBeVisible()
})
