<template>
  <div class="login-page">
    <div class="header"></div>
    <div class="content">
      <div class="row sub-container">
        <div class="col text">
          <login-text></login-text>
        </div>
        <div class="col text-align-c">
          <login-form></login-form>
        </div>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import LoginForm from './LoginForm.vue'
  import LoginText from './LoginText.vue'

  export default {
    components: {
      // <my-component> 将只在父模板可用
      'login-form': LoginForm,
      'login-text': LoginText,
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .login-page {
    width: 100%;
    height: 100%;
  }

  .content {
    background: #2c3e50;
    min-height: 500px;
    min-width: 1000px;
    display: flex;
    justify-content: center;
    .sub-container {
      display: flex;
      align-items: center;
      max-width: 1000px;

      .text {
        padding-left: 40px;
        min-height: 15rem;
      }
    }
  }

  .header, .footer {
    height: 100px;
  }

</style>
