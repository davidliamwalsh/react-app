describe('contact', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000/contact')
  })

  it('should display "Contact Me" on page', async () => {
    await expect(page).toMatch('Contact Me')
  })
})