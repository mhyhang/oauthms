<template>
  <div>
    <div>
      <div class="mdc-form-field">
        <div class="mdc-textfield" data-mdc-auto-init="MDCTextfield">
          <input id="firstname" class="mdc-textfield__input">
          <label for="firstname" class="mdc-textfield__label">
            用户名:
          </label>
        </div>
      </div>

      <div class="mdc-form-field">
        <div class="mdc-textfield" data-mdc-auto-init="MDCTextfield">
          <input id="password" type="password" class="mdc-textfield__input">
          <label for="password" class="mdc-textfield__label">
            密码:
          </label>
        </div>
      </div>
    </div>
    <button
      class="mdc-button mdc-button--raised mdc-button--primary mdc-ripple-surface"
      data-mdc-auto-init="MDCRipple" @click="login()">
      登录
    </button>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      login: function () {
        console.log(this.$getUrl('user'));
        this.$router.push('login')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
