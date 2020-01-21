const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const postmark = require("postmark")
const bodyParser = require('body-parser')

app.prepare() 
.then(() => {
  const server = express()
  server.use(bodyParser.json())
  server.use(bodyParser.urlencoded({ extended: true }))

  server.get('/', (req, res) => {
    return app.render(req, res, '/', req.query)
  })

  server.get('/about', (req, res) => {
    return app.render(req, res, '/about', req.query)
  })

  server.get('/contact', (req, res) => {
    return app.render(req, res, '/contact', req.query)
  })

  server.post('/contact-me', (req, res) => {
    let client = new postmark.ServerClient(`${process.env.SERVER_TOKEN}`);
    
    client.sendEmail(
      {
        From: req.body.From,
        To: req.body.To,
        Subject: req.body.Name,
        HtmlBody: req.body.HtmlBody,
        ReplyTo: req.body.ReplyTo
      }
    ).then(response => {
      console.log('Sending message')
      console.log(response.To)
      console.log(response.Message)
      console.log(res.statusCode)
      return res.sendStatus(200)
    }).catch(error => {
      console.log(error)
      return res.sendStatus(500)
    })
  })

  server.get('/article', (req, res) => {
    return app.render(req, res, '/article', req.query)
  })

  server.get('/callback', (req, res) => {
    return app.render(req, res, '/callback', req.query)
  })

  server.get('/articles', (req, res) => {
    return app.render(req, res, '/articles', req.query)
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