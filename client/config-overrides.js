module.exports = {
  webpack: function(config, env) {

    // add hoc resolve
    const path = require('path');
    config.resolve.alias.hoc = path.resolve('src/hoc');
    config.resolve.alias.reducers = path.resolve('src/reducers');
    config.resolve.alias.components = path.resolve('src/components');

    return config;
  }
}
