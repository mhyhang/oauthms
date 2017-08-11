<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
  import * as mdc from 'material-components-web'
  import 'material-components-web/dist/material-components-web.min.css';

  export default {
    name: 'app',
    data: () => {
      return {
        username: undefined,
        password: undefined
      }
    },
    mounted: function () {
      // `this` points to the vm instance
      mdc.autoInit();
      console.log('a is: ' + this.username);
    }


  }
</script>

<style>
  body {
    padding: 0;
    margin: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    height: 100vh;
    width: 100vw;
  }
</style>
