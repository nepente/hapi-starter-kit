const test = require('tape');
const createApp = require('../../src/app');

test('Must return the greeting message "Hello myname"', (t) => {
  t.plan(2);

  const name = 'myname';
  const requestUrl = `/v1/hello/${name}`;

  return createApp()
    .then(app => app.inject(requestUrl))
    .then((response) => {
      t.deepEqual(response.statusCode, 200);
      t.deepEqual(response.payload, `Hello ${name}`);
    });
});
