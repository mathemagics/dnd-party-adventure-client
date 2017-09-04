const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  projectRoot: resolveApp('./'),
  appBuild: resolveApp('build'),
  appSrc: resolveApp('src'),
  appIndexJs: resolveApp('src/index.js'),
  appHtml: resolveApp('src/index.html'),
};
