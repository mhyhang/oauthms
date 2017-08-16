<template>
  <div class="login_form">
    <div class="container">
      <input class="" placeholder="用户名">
    </div>
    <div class="container">
      <input type="password" class="" placeholder="密码">
    </div>

    <button @click="login()">
      登录
    </button>
    <div class="text-align-r link">
      <a>忘记密码</a>
      <a>免费注册</a>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'loginForm',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    computed: {
      ...mapState({
        user: state => {
          console.log(state);
          return state.user.user;
        }
      })
    },
    methods: {
      login: function () {
        this.$router.push('dashboard')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login_form {
    box-sizing: border-box;
    padding: 50px;
    width: 100%;
    max-width: 380px;
    display: inline-block;
    background: rgba(255, 255, 255, 0.8);
  }

  .container {
    width: 100%;
    padding-bottom: 20px;
  }

  .link {
    margin-top: 10px;
  }

  input {
    font-size: 0.8rem;
    opacity: 1;
  }

  button {
    width: 100%;
  }
</style>
