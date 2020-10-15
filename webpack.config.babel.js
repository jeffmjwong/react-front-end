import { resolve } from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";

const frontConfig = {
  entry: "./src",
  mode: "development",
  target: "web",
  output: {
    path: resolve("dist", "www"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: resolve(__dirname, "public/index.html") }),
    new webpack.DefinePlugin(
      {
        "process.env.NODE_VERSION": JSON.stringify(process.env.NODE_VERSION),
        "process.env.ABC": JSON.stringify(process.env.ABC)
      }
    )
  ],
  devServer: {
    compress: true,
    port: 3000
  }
};

const backConfig = {
  entry: "./server.js",
  mode: "development",
  target: "node",
  output: {
    path: resolve("dist"),
    filename: "server.js"
  }
};

export default [frontConfig, backConfig];
