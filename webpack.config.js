
const { VueLoaderPlugin } = require('vue-loader');
const path = require("path");
const webpack = require('webpack');

require('dotenv').config({ path: __dirname + '/.env' });

const config = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        VUE_APP_USER_ID: JSON.stringify(process.env.VUE_APP_USER_ID),
        VUE_APP_PASSWORD: JSON.stringify(process.env.VUE_APP_PASSWORD)
      }
    })
  ]
};

module.exports = {
  entry: "./src/script.js",
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    public: '127.0.0.1:8080',
    host: '0.0.0.0',
    port: '8080'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      }
    ],
  },
  resolve: {
    extensions: [".js", ".vue"],
    alias: {
      vue$: "vue/dist/vue.esm.js",
    },
  },
  plugins: [new VueLoaderPlugin()],
};