import globby from 'globby';

export default globby.sync(['components/*.jsx', 'pages/*.jsx'], {
  cwd: __dirname
});
