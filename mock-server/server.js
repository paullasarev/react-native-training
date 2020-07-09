const path = require('path');
const jsonServer = require('json-server');
const db = require('./db.json');
// const routes = require('./routes.json');

const server = jsonServer.create();
const router = jsonServer.router(db);
// const rewriter = jsonServer.rewriter(routes);
const static = path.join(__dirname, 'public');
const middlewares = jsonServer.defaults({ static });
const PORT = 3000;

// server.use(rewriter);
server.use(middlewares);
server.use('/api', router);
server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`JSON Server is running on ${PORT}`);
});
