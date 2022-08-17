const path = require("path");
module.exports = {
  // yorumlanıcak dosyalar
  entry: "./src/index.js",

  // dosya çıktısı
  output: {
    // __dirname webpac.config.js yolunu temsil eder
    // dist aynı dizindeki dist klasörünü temsil eder
    path: path.resolve(__dirname, "dist"),

    // çıkarılıcak dosya ismi
    filename: "budle.js",
  },
};
