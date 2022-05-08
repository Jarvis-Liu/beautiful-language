/*
 * @Author: Jarvis 823867852@qq.com
 * @Date: 2022-05-06 17:14:58
 * @LastEditors: Jarvis 823867852@qq.com
 * @LastEditTime: 2022-05-08 12:56:56
 * @FilePath: \beautiful-language\.eslintrc.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly'
  }
}
