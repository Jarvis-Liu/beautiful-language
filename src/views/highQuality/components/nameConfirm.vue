<!--
 * @Author: Jarvis 823867852@qq.com
 * @Date: 2022-05-07 14:33:06
 * @LastEditors: Jarvis 823867852@qq.com
 * @LastEditTime: 2022-05-08 12:57:01
 * @FilePath: \beautiful-language\src\views\highQuality\components\nameConfirm.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="name-confirm max-w-xl w-screen">
    <div class="content w-full">
      <p class="title text-3xl">
        请输入你的称号
      </p>
      <input
        v-model="name"
        class="w-1/2 h-10 my-4 px-4 rounded-lg text-gray-600"
        type="text"
        @input="$emit('update:name', $event.target.value)"
      >
      <div>
        <div
          class="btn"
          @click="handleConfirm"
        >
          确认
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    default: '高质量前端'
  }
})
const emit = defineEmits(['setIsShowArea'])
const handleConfirm = () => {
  emit('setIsShowArea', true)
}
</script>

<style lang="less" scoped>
.btn {
  background: #fff;
  color: #111;
}
.name-confirm {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    color: #ccc;
  }
}
</style>
