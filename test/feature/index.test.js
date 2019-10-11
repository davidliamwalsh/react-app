describe('index', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000')
  })

  it('should display "My Articles" on page', async () => {
    await expect(page).toMatch('My Articles')
  })
})