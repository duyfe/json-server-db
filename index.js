// @ts-nocheck
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// Add custom routes before JSON Server router
server.get('/echo', (req, res) => {
  res.jsonp(req.query)
})

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
    req.body.updateAt = Date.now()
  }
  // Continue to JSON Server router
  next()
})

// Use default router
const port = process.env.PORT || 1234
server.use('/api', router)
server.listen(port, '0.0.0.0' ,() => {
  console.log(`JSON Server is running with port: ${port}`)
})