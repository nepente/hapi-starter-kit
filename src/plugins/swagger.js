const hapiSwagger = require('hapi-swagger');
const { version } = require('../../package');

const options = {
  info: {
    version,
    title: 'API Documentation',
  },
  schemes: ['https'],
  basePath: '/v1/',
};

module.exports = {
  register: hapiSwagger,
  options,
};
