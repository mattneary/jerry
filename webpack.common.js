const path = require("path");
const ejs = require('ejs');
const {version} = require('./package.json');

module.exports = {
  context: __dirname,
  entry: "./src/index.ts",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.js",
    library: "jerrymander",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: "ts-loader"
      }
    ]
  },
  mode: 'production',
  resolve: {
    extensions: [".js", ".ts"]
  },
};

function transformHtml(content) {
  return ejs.render(content.toString(), {
    ...process.env,
  });
}
