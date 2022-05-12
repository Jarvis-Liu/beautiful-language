/*
 * @Author: Jarvis 823867852@qq.com
 * @Date: 2022-05-06 17:14:58
 * @LastEditors: Jarvis 823867852@qq.com
 * @LastEditTime: 2022-05-09 22:55:11
 * @FilePath: \beautiful-language\.eslintrc.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:vue/vue3-recommended', 'prettier', '@vue/prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['vue', 'prettier'],
  rules: {
    endOfLine: 'auto'
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly'
  },
  overrides: [
    {
      files: ['src/views/index.vue', 'src/views/**/index.vue'],
      rules: {
        'vue/multi-word-component-names': 'off'
      }
    }
  ]
}
