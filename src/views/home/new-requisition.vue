<template>
  <common-page type="goods-manage" :header="header" :foot="foot">

    <div class="action" slot="action">
      <span @click="savedRequisition">已保存</span>
    </div>

    <div slot="content" class="wrap">
       
      <div class="body">
          新增要货  新增要货
      </div>
      <div class="foot">
        <van-button type="primary" block=true @click="onBtnSave">保存</van-button>
        <van-button type="warning" block=true @click="onBtnSaveAndContinue">保存并继续录入</van-button>
      </div>
    </div>

    <common-view></common-view>
    
  </common-page>
</template>

<script>
import Vue from 'vue';
import { Button } from 'vant';
Vue.use(Button);

import CommonPage from '@/components/common/common-page.vue'
import CommonView from '@/components/common/common-view.vue'
import NavList from '@/components/nav-list.vue'

export default {
  name: 'NewRequisition',
  data() {
    return {
      header : {
        back : true,
        title : "新增要货"
      },
      foot: false,
      // 保存状态: true:已保存,false,未保存
      //saved : false,
      // 按钮保存文字 : 已保存，未保存
      //btnSaveText : "保存",
    }
  },
  components: {
    CommonPage,
    CommonView,
    NavList
  },
  methods : {
    onSave(){
      alert("别惦记我");
    },
    savedRequisition(){
      this.$router.push("/home/savedrequisition");
    },
    onBtnSave(){
      alert("保存");
    },
    onBtnSaveAndContinue(){
      alert("保存并继续录入");
    }, 
  }
}
</script>

<style scoped lang="less">
.wrap{
  display:flex;
  flex-direction: column;
  height:100%;
  >.body{
    flex :2;
  }
  >.foot{
    padding:0 10px;
    button{
      text-align:center;
      margin-bottom:5px;
    }
  }
}
</style>
