/* eslint strict:0 */
/* eslint no-console:0 */

'use strict';

process.title = 'example';
process.chdir(__dirname);

process.env.BABEL_CACHE_PATH = process.env.BABEL_CACHE_PATH || 'runtime/babel-cache.json';
process.env.NODE_ENV = process.env.NODE_ENV || 'production';

if (!process.env.DB) {
  if (process.env.MONGO_PORT_27017_TCP_ADDR) {
    process.env.DB = 'mongodb://' + process.env.MONGO_PORT_27017_TCP_ADDR + '/alaska-demo';
  } else {
    process.env.DB = 'mongodb://localhost/alaska-demo';
  }
}

require('babel-register')({
  ignore: [
    /node_modules\/(?!alaska)/
  ],
  babelrc: false,
  presets: [],
  plugins: [
    'syntax-flow',
    'transform-class-properties',
    'transform-es2015-modules-commonjs',
    'transform-flow-strip-types',
    'transform-object-rest-spread'
  ]
});

let service = require('./').default;

service.launch().then(() => {
  console.log('server started');
}, (error) => {
  console.error(error.stack);
  process.exit(1);
});
