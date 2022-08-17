// development kısmında dosyalar compiler olmaz

const path = require("path");
module.exports = {
  // yorumlanıcak dosyalar
  entry: "./src/app.js",
  mode: "development",
  // dosya çıktısı
  output: {
    // __dirname webpac.config.js yolunu temsil eder
    // dist aynı dizindeki dist klasörünü temsil eder
    path: path.resolve(__dirname, "dist"),
    // çıkarılıcak dosya ismi
    filename: "budle.js",
  },
  // live-server
  devServer: {
    static: {
      // live-serverde açılıcak dizin
      directory: path.join(__dirname, "dist"),
    },
    // compress: true,
    // port : 9000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
