<template>
  <div class="login">
    <div class="message">本地设备监控系统</div>
    <div id="darkbannerwrap"></div>

    <form id="login-form" method="post" onsubmit="return false;">
      <input id="username" name="username" type="text" placeholder="请输入账号" autocomplete="off">
      <hr class="hr15">
      <input id="password" name="password" type="password" placeholder="请输入密码"
             autocomplete="off">
      <hr class="hr15">
      <button style="width: 100%;" type="submit" id="button_login"
              >登录</button>
      <hr class="hr20">
      <span id="info" style="color: red"></span>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: '欢迎来到菜鸟教程！'
    }
  }
}
</script>

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
