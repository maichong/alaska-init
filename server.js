/* eslint strict:0 */
/* eslint no-console:0 */

process.chdir(__dirname);

process.env.BABEL_CACHE_PATH = process.env.BABEL_CACHE_PATH || 'runtime/babel-cache.json';
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.DEBUG = process.env.DEBUG || '*,-babel';

require('babel-register')({
  ignore: [
    /node_modules/
  ]
});

const service = require('./src/').default;
const createModules = require('alaska-modules').default;

const modules = createModules(service);

service.launch(modules).then(() => {
  console.log('server started');
  console.log('listen :' + service.getConfig('port'));
}, (error) => {
  console.error(error.stack);
  process.exit(1);
});
