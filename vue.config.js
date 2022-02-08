// const { devServer } = require("shangpinhui_0415-master/vue.config");

module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://39.98.123.211'
      }
    }
  }
}
