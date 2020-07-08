const jsonServer = require('json-server');
// const bodyParser = require('body-parser');

const server = jsonServer.create();
const router = jsonServer.router('mock-server/db.json');
const middlewares = jsonServer.defaults({
  static: 'public',
});
const PORT = 3000;

server.use(middlewares);
// server.use(bodyParser);
server.use(router);
server.listen(PORT, () => {
  console.log(`JSON Server is running on ${PORT}`);
});
