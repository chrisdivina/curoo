module.exports = {
  webpack: function(config, env) {

    // add hoc resolve
    config.resolve.alias.hoc = require('path').resolve('src/hoc');
    config.resolve.alias.reducers = require('path').resolve('src/reducers');
    console.log(config);

    return config;
  }
}
