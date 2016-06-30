const Hapi = require('hapi');
const { HOST, PORT } = require('../env');
const good = require('./plugins/good');
const apiV1 = require('./v1/index');

function createApp({ host, port } = { host: HOST, port: PORT }) {
  const plugins = [good];

  const server = new Hapi.Server({
    connections: {
      router: {
        stripTrailingSlash: true,
      },
    },
  });

  server.connection({
    host,
    port,
  });

  return server.register(plugins)
    .then(() => server.register(apiV1, { routes: { prefix: '/v1' } }))
    .then(() => server);
}

module.exports = createApp;
