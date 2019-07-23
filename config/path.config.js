const appRoot = require("app-root-path");

const root = appRoot.path;
const output = `${root}/dist`;

module.exports = {
  root: root,
  output: output
};
