<template>
  <div class="main">
    <!--顶部菜单-->
    <div class="header">

    </div>
    <div class="bottom">

      <!--左侧选项-->
      <div class="menu">
        <dash-menu></dash-menu>
      </div>
      <!--mian Content-->
      <div class="content">

      </div>
    </div>
  </div>
</template>

<script>
  import Menu from './DashMenu.vue'

  export default {
    components: {
      'dash-menu': Menu
    }
  }

</script>

<style scoped lang="scss">
  .main {
    min-height: 600px;
    height: 100%;
    display: flex;
    flex-direction: column;
    .header {
      border-bottom: 1px solid #d3d3d3;
      height: 55px;
    }

    .bottom {
      flex: auto;
      height: 100%;
      display: flex;
      .menu {
        width: 200px;
        border-right: 1px solid #d3d3d3;
        height: 100%;
        flex: none;
      }

      .content {
        width: 100%;
        height: 100%;
      }
    }

  }
</style>
