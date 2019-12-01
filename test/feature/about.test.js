describe('about', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000/about')
  })

  it('should display "Hi, my name is David Walsh" on page', async () => {
    await expect(page).toMatch('Hi, my name is David Walsh')
  })
})