const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  devServer: {
    port: 8080 // Измените на нужный вам порт
  },
  transpileDependencies: true
})