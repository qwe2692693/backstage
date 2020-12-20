<template>
  <div class="h-100 login">
    <div class="login_box">
      <div class="login_title">
        <span>
          登录
        </span>
      </div>
      <div class="login_content"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "logn"
}
</script>
<style lang="scss" scoped>
.login {
  display: flex;
  background: url("../assets/images/login_bg.jpg") no-repeat center;
  background-size: cover;
}

.login_box {
  width: 500px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 46px #a8a3f5;
  margin: auto;
}
.login_title{
  padding: 0 15px;
  line-height: 40px;
  span{
    position: relative;
    display: inline-block;
    &:after{
      position: absolute;
      bottom: 0;
      left: 0;
      content: '';
      width: 100%;
      height: 3px;
      background: #a8a3f5;
    }
  }
}
</style>