/*
 * @Author: Jarvis 823867852@qq.com
 * @Date: 2022-05-06 17:21:22
 * @LastEditors: Jarvis 823867852@qq.com
 * @LastEditTime: 2022-05-06 17:27:24
 * @FilePath: \beautiful-language\tailwind.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { resolve } = require('path')
module.exports = {
  content: [],
  theme: {
    extend: {}
  },
  plugins: [],
  css: {
    // css预处理器
    preprocessorOptions: {
      less: {
        charset: false,
        // additionalData: '@import "./src/assets/style/global.less";'
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
}
