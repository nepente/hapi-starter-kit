const hapiPluginHeader = require('hapi-plugin-header');
const { COMPANY_NAME } = require('../../env');

module.exports = {
  register: hapiPluginHeader,
  options: {
    'X-Developed-By': COMPANY_NAME,
  },
};
