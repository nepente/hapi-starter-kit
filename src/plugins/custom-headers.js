const hapiPluginHeader = require('hapi-plugin-header');

module.exports = {
  register: hapiPluginHeader,
  options: {
    'X-Developed-By': 'Nepente - Artesanato de Software',
  },
};
