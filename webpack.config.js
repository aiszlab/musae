import webpackNodeExternals from "webpack-node-externals";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

export default {
  mode: "production",

  // 入口文件
  entry: "./components/avatar",

  // 输出文件
  output: {
    path: resolve(dirname(__filename), "dist"),
    filename: "[name].js",
    module: true,
    library: {
      type: "module",
    },
  },

  // loader
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: ["babel-loader"],
      },
    ],
  },

  // 文件后缀
  resolve: {
    extensions: [".ts", ".tsx"],
  },

  externals: [webpackNodeExternals()],

  experiments: {
    outputModule: true,
  },
};
