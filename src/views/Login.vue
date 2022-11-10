<template>
  <div class="about">
    <h1>Login</h1>
    <p v-if="loginIng" ref="blackp">Welcome {{userModel?.username}}
      <a href="/logout" @click.prevent="logOut">退出登录</a>
    </p>
    <el-form ref="form" :model="userModel" label-width="80px" v-if="!loginIng">
      <el-form-item label="UserName">
        <el-input v-model="userModel.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="PassWord">
        <el-input type="password" v-model="userModel.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">import { useUser } from '@/compasables/useUser';
import { ref } from 'vue'

const { loginIng, userModel, logOut, login } = useUser();

const blackp = ref()

console.log(blackp);

</script>


<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
