<template>
  <transition-group name="fade" class="color-text-light">
    <h2 v-for="(item, index) in text" :key="index">{{item}}</h2>
  </transition-group>
</template>

<script>
  export default {
    data: () => {
      return {
        text: [,],
        flag: true
      }
    },
    mounted: function () {
      let pointer = this.text;
      setTimeout(function () {
        pointer.push('纯手工代码')
      }, 500);
      setTimeout(function () {
        pointer.push('十年匠心')
      }, 2000);
      setTimeout(function () {
        pointer.push('Hello World!')
      }, 3500);
    }
  }
</script>

<style scoped lang="scss">

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter, .fade-leave-to
    /* .list-leave-active for below version 2.1.8 */
  {
    opacity: 0;
    transform: translateY(30px);
  }
</style>
