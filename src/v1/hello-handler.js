const Joi = require('joi');

const validate = {
  params: {
    name: Joi.string()
      .regex(/^[a-zA-Z]+$/)
      .min(3)
      .max(30)
      .required(),
  },
};

function helloHandler(request, reply) {
  const { name } = request.params;
  reply(`Hello ${name}`);
}

module.exports = {
  method: 'GET',
  path: '/hello/{name}',
  handler: helloHandler,
  config: { validate },
};
