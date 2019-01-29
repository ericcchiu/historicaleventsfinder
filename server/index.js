const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = 3000;

server.use(middlewares);
server.use(router);
// server.use('/api', router);

server.get('/events', (req, res) => {
  res.jsonp(req.query);
});

server.get('/events' + '?q=' + req.params.query, (req, res) => {
  res.jsonp(req.query);
});

// server.get('/events?&_limit=20', (req, res) => {
//   res.jsonp(req.query);
// });

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});