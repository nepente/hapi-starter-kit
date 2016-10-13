const path = require('path');
const glob = require('glob');

function getFilePaths(pattern = '**/*-handler.js', cwd = __dirname, ignore) {
  return glob.sync(pattern, { nodir: true, cwd, ignore })
    .map(handlerPath => path.join(cwd, handlerPath));
}

function registerRoutes(server, handlerPath) {
  server.route(require(handlerPath)); // eslint-disable-line max-len, global-require, import/no-dynamic-require
  delete require.cache[handlerPath];
}

exports.register = (server, options, next) => {
  const handlersPaths = getFilePaths();
  handlersPaths.forEach((handlerPath) => {
    registerRoutes(server, handlerPath);
  });

  next();
};

exports.register.attributes = {
  name: 'api',
  version: '1.0.0',
};
