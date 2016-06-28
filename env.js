const envalid = require('envalid');
const { str, num } = envalid;

module.exports = envalid.cleanEnv(process.env, {
  HOST: str({ default: '127.0.0.1' }),
  PORT: num({ default: 3000, desc: 'The port to start the server on' }),
});
