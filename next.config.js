require('./models/all');
require('./utils/mongodb');
const withReactSvg = require('next-react-svg')
const path = require('path')


module.exports = withReactSvg({
  // Target must be serverless
  target: "serverless",
  include: path.resolve(__dirname, 'assets/svg'),
});
