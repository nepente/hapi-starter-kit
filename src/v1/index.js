exports.register = (server, options, next) => {
  server.route({
    method: 'GET',
    path: '/',
    handler(request, reply) {
      reply();
    },
  });

  next();
};

exports.register.attributes = {
  name: 'api',
  version: '1.0.0',
};
