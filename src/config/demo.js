export default {
  db: process.env.DB,
  middlewares: [
    {
      id: 'koa-logger',
      sort: 1000
    }
  ],
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
    'alaska-admin': {},
    'alaska-post': {}
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
