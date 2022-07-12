process.on("unhandledRejection", (err) => {
  throw err;
});

const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");

const configFactory = require("../config/webpack.config.js");
const webpackConfig = configFactory("development");
const compiler = webpack(webpackConfig);
const devServerOptions = { ...webpackConfig.devServer };
const server = new WebpackDevServer(devServerOptions, compiler);

server.startCallback(() => {
  console.log("Starting server on http://localhost:3000");
});
