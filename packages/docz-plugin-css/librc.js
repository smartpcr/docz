const pkg = require('./package.json')

module.exports = {
  external: Object.keys(pkg.dependencies).concat([
    'react-dev-utils/getCSSModuleLocalIdent',
  ]),
}
