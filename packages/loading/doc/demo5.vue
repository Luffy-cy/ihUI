<!-- html -->
<template>
  <i-button @click="openLoading">更多自定义配置项</i-button>
</template>

<!-- js -->
<script setup>
  import Loading from "../index.js"; //此处为本地示例，请使用import { Loading } from "ih-ui";
  const openLoading = () => {
    Loading.show({
      text:'正在加载ih-ui...',
      icon:'m-icon-loading3',
      scrollLock:true,
      textColor:'#333',
      bgColor:"rgba(248,253,255,.9)",
      showIcon:true,
    })
    setTimeout(()=>{
      Loading.hide()
    },5000)
  }
</script>