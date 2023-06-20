import webpackNodeExternals from "webpack-node-externals";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const configuration = {
  optimization: {
    minimize: true,
  },

  mode: "production",

  // 入口文件
  entry: "./components",

  // 输出文件
  output: {
    path: resolve(dirname(__filename), "dist"),
    module: true,
    clean: true,
    library: {
      type: "module",
    },
  },

  // loader
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },

  // 文件后缀
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },

  externals: [webpackNodeExternals()],

  plugins: [
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        mode: "write-dts",
      },
    }),
  ],

  experiments: {
    outputModule: true,
  },
};

export default configuration;
