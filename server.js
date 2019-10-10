const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare() 
.then(() => {
  const server = express()

  server.get('/', (req, res) => {
    return app.render(req, res, '/', req.query)
  })

  server.get('/about', (req, res) => {
    return app.render(req, res, '/about', req.query)
  })

  server.get('/contact', (req, res) => {
    return app.render(req, res, '/contact', req.query)
  })

  server.get('/article', (req, res) => {
    return app.render(req, res, '/article', req.query)
  })

  server.get('/callback', (req, res) => {
    return app.render(req, res, '/callback', req.query)
  })

  server.get('/articles-gallery', (req, res) => {
    return app.render(req, res, '/articles-gallery', req.query)
  })

  server.get('/articles/:slug', (req, res) => {
    return app.render(req, res, '/article', { slug: req.params.slug })
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})