<template>
  <div class="container font-ali max-w-xl h-screen my-0 mx-auto py-4 text-left">
    <div class="name ml-2.5 text-lg">
      人类高质量前端
    </div>
    <div class="bubble text-xl px-4 py-4 ml-2.5 mr-4 rounded-lg leading-6 font-semibold tracking-widest">
      你跪在你🐴坟头上写的页面？要不要我下个VSC教你怎么写
    </div>
  </div>
</template>

<script setup></script>

<style lang="less">
.container {
  background: #111;
}
.bubble {
  background: #2e2e2e;
  color: rgba(255, 255, 255, .7);
  position: relative;
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
