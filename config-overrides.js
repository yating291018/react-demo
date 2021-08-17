const{ override, addBabelPlugin, addDecoratorsLegacy } = require('customize-cra');
module.exports = override(
  // addBabelPlugin( [
  //   //引入装饰器Decorator
  //   "@babel/plugin-proposal-decorators", { "legacy": true }
  // ])
	addDecoratorsLegacy()
);