<!--
 * @Author: Jarvis 823867852@qq.com
 * @Date: 2022-05-06 21:38:00
 * @LastEditors: Jarvis 823867852@qq.com
 * @LastEditTime: 2022-05-07 18:18:23
 * @FilePath: \beautiful-language\src\views\highQuality\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div
    ref="container"
    class="container max-w-xl h-screen my-0 mx-auto pb-16"
  >
    <Loading v-if="isShowLoading" />
    <name-confirm
      v-if="!isShowArea"
      v-model:name="name"
      @set-is-show-area="setIsShowArea"
    />
    <div v-if="isShowArea && !isShowLoading">
      <div
        ref="content"
        class="content pt-4 pb-16"
      >
        <template
          v-for="(item,index) in contentList"
          :key="index"
        >
          <message-card
            :name="name"
            :content="item"
            @update-content="updateContent(index,$event)"
          />
        </template>
      </div>
      <div class="operation px-8 grid grid-rows-1 grid-flow-col gap-4">
        <div
          class="btn"
          @click="handleSave"
        >
          保存
        </div>
        <div
          class="btn"
          @click="handleReset"
        >
          重置
        </div>
        <div
          class="btn"
          @click="handleChangeName"
        >
          更换称号
        </div>
      </div>
    </div>

    <i class="font-ali fixed z-0 w-0 h-0 invisible">
      site
    </i>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue'
import html2canvas from 'html2canvas'
import messageCard from './components/messageCard.vue'
import nameConfirm from './components/nameConfirm.vue'
import Loading from '@/components/MLoading.vue'

const container = ref(null)
const content = ref(null)
const name = ref('人类高质量前端')
const isShowArea = ref(false)
const isShowLoading = ref(false)
const flagFont = ref(false)
const contentList = reactive([
  '你跪在你🐴坟头上写的接口？要不要我起个node服务教你怎么写',
  '直接把数据库丢给前端，要你有啥用?',
  '你去财务领工资吧，明天别来了',
  '做不了就去贷两万块钱，去培训班深造一下，不要在这里拖后腿，废物'
])
let baseHeight = 0
onMounted(() => {
  document.fonts.ready.then(function () {
    flagFont.value = true
    isShowLoading.value = false
  }).catch(() => {
    console.log('字体文件加载失败')
  })
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

const setIsShowArea = (val) => {
  isShowArea.value = val
  if (!flagFont.value) {
    isShowLoading.value = true
  }
}
const getInitialData = () => {
  return [
    '你跪在你🐴坟头上写的接口？要不要我起个node服务教你怎么写',
    '直接把数据库丢给前端，要你有啥用?',
    '你去财务领工资吧，明天别来了',
    '做不了就去贷两万块钱，去培训班深造一下，不要在这里拖后腿，废物'
  ]
}

const handleReset = () => {
  Object.assign(contentList, getInitialData())
}
const updateContent = (index, value) => {
  contentList[index] = value
}
const handleChangeName = (index, value) => {
  handleReset()
  isShowArea.value = false
}

</script>

<style lang="less" scoped>
@bg-color: #111;
.container {
  background: @bg-color;
  min-height: 100vh;
  overflow-x: hidden;
  .content {
    background: @bg-color;
  }
  .btn {
    background: #fff;
    color: @bg-color;
  }
}

</style>
