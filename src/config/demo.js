/* eslint global-require:0 */
/* eslint quote-props:0 */

export default {
  db: process.env.DB,
  middlewares: {
    log: {
      id: 'koa-logger',
      sort: 1000
    },
    errorPage: {
      id: 'alaska-middleware-error-page',
      sort: 900,
      options: {
        default: 'error/error',
        '400': 'error/error400',
        '403': 'error/error403',
        '404': 'error/error404',
        '500': 'error/error500'
      }
    },
  },
  session: {
    cookie: {},
    store: {
      type: 'alaska-cache-mongo',
      url: process.env.DB,
      collection: 'app_session',
      maxAge: 3600 * 1000
    }
  },
  services: {
    'alaska-user': {},
    'alaska-update': {},
    'alaska-admin': {}
  },
  domain: '',
  prefix: '',
  redirect: '',
  statics: [
    {
      root: '../public',
      prefix: ''
    }
  ],
  plugins: {
    react: 'alaska-plugin-react'
  },
  renderer: {
    type: 'alaska-renderer-art',
  },
  superUser: '',
  autoUpdate: true,
  'alaska-field-image': {
    dir: 'public/uploads/',
    pathFormat: 'YYYY/MM/DD/',
    prefix: '/uploads/'
  },
  'alaska-field-iid': {
    cache: {
      type: 'alaska-cache-mongo',
      url: process.env.DB,
      collection: 'app_iid'
    }
  },
  port: 5000
};
