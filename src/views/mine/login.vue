<template>
  <common-page type="login-page" :header="header" :foot="foot">

    <div slot="content" class="login-body">

      <fixed-block start="active" end="fixed">
        <div slot="active" class="login-form">
          <van-cell-group>
            <van-field
              v-model="username"
              required
              clearable
              label="用户名"
              icon="question"
              placeholder="请输入用户名"
              @click-icon="$toast('question')"
            />

            <van-field
              v-model="password"
              type="password"
              label="密码"
              placeholder="请输入密码"
              required
            />
          </van-cell-group>
        </div>
        <div slot="fixed">
          <van-button type="primary" :block="block" @click="onBtnLoginTap">登录</van-button>
        </div>
      </fixed-block>

    </div>

  </common-page>
</template>

<script>
import Vue from 'vue';
import { Button } from 'vant';
Vue.use(Button);
import FixedBlock from '@/components/fixed-block.vue'
import CommonPage from '@/components/common/common-page.vue'

export default {
  components: {
    CommonPage,
    FixedBlock
  },
  data() {
    return {
      block : true,
      foot : false,
      header : {
        back : false,
        title : "登录"
      },
      username : "",
      password : ""
    }
  },
  methods :{
    onBtnLoginTap(){
      sessionStorage.setItem("userName",this.username);
      this.$router.push("/");
    }
  }
}
</script>

<style scoped lang="less">
.login-body{
  height:100%;
}
.login-form{
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content:center;
    height:100%;
}
</style>