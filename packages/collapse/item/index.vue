<template>
  <div class="ih-default-collapse-item-box">
    <div class="ih-collapse-item-title"  @click="togger(this)">
      <span>标题</span>
      <i class="m-icon-arrow-right" :class="{rotate:boxshow}"></i>
    </div>
     <!-- v-show="boxshow" -->
    <transition name="slide-fade">
      <div class="ih-collapse-slot-box" v-show="boxshow">
        <div class="ih-slot-item-box">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import { ref, useSlots,getCurrentInstance  } from 'vue';
export default{
  name:"iCollapseItem"
}
</script>
<script setup>
const props = defineProps({
  name:String
})
const type = getCurrentInstance()
// console.log(type);
const slot = useSlots()
// console.log(slot);
// console.log(props.name);
const boxshow = ref(false)
const togger = (e) =>{
  // console.log(e.$parent.$el.children[0].lastChild);
  boxshow.value = !boxshow.value
}
</script>

<style lang="scss" scoped>
.slide-fade-enter-active,.slide-fade-enter-from {
  height:62px;
  transition: all .2s ease;
}
.slide-fade-leave-active {
  transition: all .2s ease;
  height:62px;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transition: all .2s ease;
  height:0px;
}
.ih-default-collapse-item-box{
  height:auto;
  
  .ih-collapse-item-title{
    width:100%;
    height:40px;
    padding:0 10px;
    box-sizing: border-box;
    border-top:1px solid #f0f0f0;
    cursor: pointer;
    span{
      width: 98%;
      display: inline-block;
      line-height: 40px;
      float: left;
      font-size: 14px;
      color:#505050
    }
    i{
      float: right;
      text-align: right;
      line-height: 40px;
      transition: all .2s ease;
    }
    .rotate{
      transform: rotate(90deg);
    }
  }
  .ih-collapse-slot-box{
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    .ih-slot-item-box{
      padding:10px 10px;
    }
  }
}
</style>