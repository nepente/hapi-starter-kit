/* eslint-disable max-len */
/*
Welcome to env.js!

Here you will configure your Environment Variables scheme.
You must not store environment dependent or sensitive data on your VCS, instead read it from Environment Variables.
During development use a .env file to set these variables, it will be automatically parsed and used by envalid.

More information at https://12factor.net/config

-- IMPORTANT NOTE --
NEVER commit the .env file. If you need a starting point for developers use .env.example instead, but remember, NO SENSITIVE DATA.
*/
const envalid = require('envalid');

const { str, num } = envalid;

/* For complete scheme options check https://github.com/af/envalid */
module.exports = envalid.cleanEnv(process.env, {
  /* Not obligatory variable because it has a default value */
  HOST: str({ default: '127.0.0.1', desc: 'The host to bind to. Set to 0.0.0.0 if you wish external access.' }),
  PORT: num({ default: 3000, desc: 'The port to start the server on.' }),
  /* Obligatory variable, your service won't start if not set on environment or .env file. */
  COMPANY_NAME: str({ desc: 'Your company name.' }),
});
