import { resolve } from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config = {
  entry: "./src",
  mode: "development",
  output: {
    path: resolve(__dirname, "dist"),
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
    new HtmlWebpackPlugin({ template: resolve(__dirname, "public/index.html") })
  ]
};

export default config;
