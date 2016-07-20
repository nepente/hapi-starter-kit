const Hapi = require('hapi');
const inert = require('inert');
const vision = require('vision');
const { HOST, PORT } = require('../env');
const good = require('./plugins/good');
const swagger = require('./plugins/swagger');
const customHeaders = require('./plugins/custom-headers');
const apiV1 = require('./v1/index');

function createApp({ host, port } = { host: HOST, port: PORT }) {
  const plugins = [
    good,
    inert,
    vision,
    swagger,
    customHeaders,
  ];

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
