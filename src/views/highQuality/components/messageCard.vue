<!--
 * @Author: Jarvis 823867852@qq.com
 * @Date: 2022-05-06 21:48:48
 * @LastEditors: Jarvis 823867852@qq.com
 * @LastEditTime: 2022-05-08 14:27:13
 * @FilePath: \beautiful-language\src\views\highQuality\components\messageCard.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="message-card font-ali mb-4 text-left">
    <div class="name ml-2.5 text-lg">
      {{ name }}
    </div>
    <div
      contenteditable="true"
      class="bubble text-2xl p-4 ml-2.5 mr-4 rounded-lg font-semibold tracking-widest"
      @focus="handleContentFocus"
      @blur="handleContentBlur"
      @input="handleContentInput($event)"
    >
      {{ content }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    default: ''
  },
  content: {
    type: String,
    default: ''
  }
})
const emit = defineEmits(['updateContent'])

const handleContentFocus = () => {
  document.documentElement.style.setProperty('--main-bg-color', '#111')
}
const handleContentBlur = () => {
  document.documentElement.style.setProperty('--main-bg-color', '#fff')
}
const handleContentInput = (e) => {
  emit('updateContent', e.target.innerText)
}
</script>

<style lang="less" scoped>
.bubble {
  background: #2e2e2e;
  color: rgba(255, 255, 255, 0.7);
  position: relative;
  line-height: 1.8rem;
  &:focus {
    outline: none;
    border: none;
  }
  &:before {
    position: absolute;
    top: 1.375rem;
    left: 0;
    transform: translateX(-100%);
    content: '';
    display: inline-block;
    border-style: solid;
    border-width: 0.3125rem 0.5437rem 0.3125rem 0;
    border-color: transparent #2e2e2e transparent transparent;
  }
}
.name {
  color: rgba(255, 255, 255, 0.5);
  font-weight: 600;
}
</style>
