<!--
 * @Author: Jarvis 823867852@qq.com
 * @Date: 2022-05-06 21:38:00
 * @LastEditors: Jarvis 823867852@qq.com
 * @LastEditTime: 2022-05-07 14:10:21
 * @FilePath: \beautiful-language\src\views\highQuality\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div
    ref="container"
    class="container max-w-xl h-screen my-0 mx-auto"
  >
    <div
      ref="content"
      class="content pt-4 pb-16"
    >
      <template
        v-for="(content,index) in contentList"
        :key="index"
      >
        <message-card
          :name="name"
          :content="content"
        />
      </template>
    </div>
    <div class="operation flex justify-center">
      <div
        class="btn px-5 py-2 rounded-lg tracking-widest"
        @click="handleSave"
      >
        保存
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue'
import html2canvas from 'html2canvas'
import messageCard from './components/messageCard.vue'
const container = ref(null)
const content = ref(null)
const name = ref('人类高质量前端')
const contentList = reactive([
  '你跪在你🐴坟头上写的接口？要不要我起个node服务教你怎么写',
  '直接把数据库丢给前端，要你有啥用?',
  '你去财务领工资吧，明天别来了',
  '做不了就去贷两万块钱，去培训班深造一下，不要在这里拖后腿，废物'
])
let baseHeight = 0
onMounted(() => {
  baseHeight = document.documentElement.clientHeight
  window.onresize = () => {
    if (document.documentElement.clientHeight < baseHeight) {
      container.value.style.height = `${baseHeight}px`
    } else {
      container.value.style.height = ''
    }
  }
  onBeforeUnmount(() => {
    window.onresize = null
  })
})
const handleSave = () => {
  html2canvas(content.value).then(function (canvas) {
    // document.documentElement.appendChild(canvas)
    const base64 = canvas.toDataURL('image/png')
    dowaload(dataURLtoBlob(base64))
  })
}

const dataURLtoBlob = (dataurl) => {
  const arr = dataurl.split(',')
  const mime = arr[0].match(/:(.*?);/)[1]
  const bstr = window.atob(arr[1])
  let n = bstr.length
  const u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new Blob([u8arr], { type: mime })
}

const dowaload = (blob) => {
  const a = document.createElement('a')
  a.download = `${new Date().getTime()}.jpg`
  a.innerHTML = 'download'
  a.href = URL.createObjectURL(blob)
  a.click()
}

</script>

<style lang="less">
.container {
  background: #111;
  min-height: 100vh;
  .content {
    background: #111;
  }
  .btn {
    background: #fff;
    color: #111;
  }
}

</style>
