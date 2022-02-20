// @ts-nocheck
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const auth = require('json-server-auth')

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
server.db = router.db
server.use(auth)
// const rules = auth.rewriter({
//   // Permission rules
//   users: 600,
//   messages: 640,
// })
// server.use(rules)
// Use default router
server.use('/api', router)
const port = process.env.PORT || 1234
server.listen(port, '0.0.0.0' ,() => {
  console.log(`JSON Server is running with port: ${port}`)
})