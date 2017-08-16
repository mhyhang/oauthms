<template>
  <div>
    <div v-for="item in menus">
      {{item.title}}
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    computed: {
      ...mapState({
        menus: state => {
          console.log(state);
          return state.menu.menu;
        }
      })
    }
  }
</script>

<style scoped lang="scss">
</style>
