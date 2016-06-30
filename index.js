/* eslint-disable no-console */

/*
YEAY! Here is your project entry file.
*/

/*
This require will validate if your environment is properly configured
If you need to access environment variables DON'T use process.env.MYVAR, instead
require env.js and assign it to some variable ( const env = require('./env'); )
or if you prefer just use destructuring ( const { MYVAR } = require('./env'); ).
*/
const { HOST, PORT } = require('./env');

const createApp = require('./src/app');

createApp()
  .then(server => server.start().then(() => server))
  .then(server => server.log('info', `Server started at: http://${HOST}:${PORT}/`))
  .catch((err) => { throw err; });
