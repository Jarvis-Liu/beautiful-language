<!--
 * @Author: Jarvis 823867852@qq.com
 * @Date: 2022-05-06 21:48:48
 * @LastEditors: Jarvis 823867852@qq.com
 * @LastEditTime: 2022-05-06 23:48:13
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
      class="bubble text-2xl px-4 ml-2.5 mr-4 rounded-lg font-semibold tracking-widest"
      @focus="handleContentFocus"
      @blur="handleContentBlur"
    >
      {{ content }}
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
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
const handleContentFocus = () => {
  document.documentElement.style.setProperty('--main-bg-color', '#111')
}
const handleContentBlur = () => {
  document.documentElement.style.setProperty('--main-bg-color', '#fff')
}

</script>

<style lang="less">
.message-card {
}
.bubble {
  background: #2e2e2e;
  color: rgba(255, 255, 255, .7);
  position: relative;
  line-height: 1.2;
  padding-top: 10px;
  padding-bottom: 0px;
  &:focus {
    outline:none;
    border:none;
  }
  &:before {
    position: absolute;
    top: 1.375rem;
    left: 0;
    transform: translateX(-100%);
    content: "";
    display: inline-block;
    border-style: solid;
    border-width: 0.3125rem 0.5437rem 0.3125rem 0;
    border-color: transparent #2e2e2e transparent transparent;
  }
}
.name {
  color: rgba(255, 255, 255, .5);
  font-weight: 600;
}

</style>
