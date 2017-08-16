<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

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
      console.log('a is: ' + this.username);
    }


  }
</script>

<style lang="scss">
  /***************** 变量 *************************/
  $color-primary: #009688;
  $color-primary-dark: #00675b;
  $color-primary-light: #52c7b8;
  $color-secondary: #fff;
  $color-default: #b3b3b3;
  $color-text: #3d3d3d;
  $color-text-light: #dfdfdf;

  /****************** 修改浏览器默认组件 ************************/
  html, body {
    padding: 0;
    margin: 0;
    font-size: 16px;
  }

  div {
    box-sizing: border-box;
  }

  input {
    border: 1px solid $color-default;
    box-sizing: border-box;
    width: 100%;
    padding: 10px 15px;
    font-size: 16px;
  }

  input:hover {
    border: 1px solid $color-primary;
  }

  input:focus {
    border: 1px solid $color-primary;
    outline-color: $color-primary;
  }

  button {
    padding: 5px 10px;
    background-color: $color-primary;
    color: $color-secondary;
    font-size: 1.2rem;
    border: none;

  }

  button:focus {
    outline: none;
  }

  button:hover {
    background-color: $color-primary-light;
  }

  button:active {
    background-color: $color-primary-dark;
  }

  h1, h2, h3, h4, button, p, a {
    user-select: none;
  }

  a {
    box-sizing: border-box;
    font-size: 0.8rem;
    padding: 5px;
    display: inline-block;
    color: $color-text;
    cursor: pointer
  }

  a:hover {
    color: $color-primary;
  }

  a:active {
    color: $color-primary-light;
  }

  a:visited {
    color: $color-primary-dark;

  }

  /**************** 自定义 *************************/
  .color-text-light {
    color: $color-text-light;
  }

  .text-align-r {
    text-align: right;
  }

  .text-align-l {
    text-align: left;
  }

  .text-align-c {
    text-align: center;
  }

  .overflow-hidden {
    overflow: hidden;
  }

  .relative {
    position: relative;
  }

  .absolute {
    position: absolute;
  }

  .row {
    display: flex;
    width: 100%;
    .col {
      width: 100%;
      flex: auto;
    }
  }

  /*************/
  html, body {
    height: 100%;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    width: 100%;
  }
</style>
