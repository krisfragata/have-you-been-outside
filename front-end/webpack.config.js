const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    bundle: path.resolve(__dirname, "src", "index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    //prevent multiple bundle files to create
    clean: true,
    //keeps image added to same name as import
    assetModuleFilename: "[name][ext]",
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
    // your front-end development server port
    proxy: {
      "/api": {
        target: "http://localhost:8080", // your back-end server address
        secure: false, // for self-signed certificates, you may need to set this to false
        changeOrigin: true, // necessary for the correct routing of requests
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          // // Creates `style` nodes from JS strings
          "style-loader",
          // // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        //allows images to be loaded
        test: /\.(png|svg|jpg|jpeg|gif)/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack App",
      filename: "index.html",
      template: "src/template.html",
    }),
  ],
};
