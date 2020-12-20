<template>
  <div class="h-100 login">
    <div class="login_box">
      <div class="login_title">
        <span>
          登录
        </span>
      </div>
      <div class="login_content">
        <el-form :model="form" label-width="70px" :rules="rules" ref="ruleForm">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="form.username" type="text" placeholder="请输入用户名"/>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="form.password" type="password" placeholder="请输入密码"/>
          </el-form-item>
          <el-form-item class="t-a-r">
            <el-button type="primary" @click="login('ruleForm')">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          {required: true, message: '用户名不能为空', trigger: 'blur'},
        ],
        password: [
          {required: true, message: '用户名不能为空', trigger: 'blur'},
        ]
      }
    }
  },
  methods: {
    login(formName) {
      this.$refs[formName].validate(valid => {
        if (valid){
          console.log('submit')
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.login {
  display: flex;
  background: url("../assets/images/login_bg.jpg") no-repeat center;
  background-size: cover;
}

.login_box {
  width: 350px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 46px #a8a3f5;
  margin: auto;
}

.login_title {
  padding: 0 15px;
  line-height: 40px;

  span {
    position: relative;
    display: inline-block;

    &:after {
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

.login_content {
  padding: 0 15px;
}
</style>