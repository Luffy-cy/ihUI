<template>
  <div class="ih-defalu-collapse-box" ref="collapseRef">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "iCollapse",
};
</script>

<script setup>
import collapseItem from "./item/index.vue";
import { onMounted, ref, getCurrentInstance } from "vue";
const collapseRef = ref(null);
const type = getCurrentInstance();
onMounted(() => {
  // console.log(collapseRef.value);
});
</script>

<style lang="scss" scoped>
.ih-defalu-collapse-box {
  width: 100%;
  height: auto;
  overflow: hidden;
  border-bottom: 1px solid #f0f0f0;
}
</style>