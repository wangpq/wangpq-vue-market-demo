<template>
  <common-page type="requisition-list" :header="header" :foot="foot">

    <div class="action" slot="action">
      <van-icon name="like-o"/>
      <van-icon name="edit" title="点击打开弹框页面" @click="onPopViewOpen"/>
    </div>

    <div slot="content" style="height:100%;">
      
      <fixed-block start="fixed" end="active">
        <div slot="fixed">
          <table-head :data="thead"></table-head>
        </div>
        <div slot="active">
          <van-list
            v-model="loading"
            :finished="finished"
            @load="onLoad"
          >
            <div class="tr" v-for="item in orderList" :key="item.productNo">
              <span class="td">{{item.productNo}} </span>
              <span class="td">{{item.productName}}</span>
              <span class="td">{{item.saleNumber}}</span>
            </div>
          </van-list>
        </div>
      </fixed-block>

      <pop-view transition="slide-y" type="manage" :header="popViewHeader" :foot="foot" v-show="popViewVisible" @onPageClose="onPageCloseFn">
        <div slot="content" id="pop-view-body">
          <p>具体内容</p><p>具体内容</p><p>具体内容</p>
          <p>具体内容</p><p>具体内容</p><p>具体内容</p>
          <p>具体内容</p><p>具体内容</p><p>具体内容</p>
          <p>具体内容</p><p>具体内容</p><p>具体内容</p>
          <p>具体内容</p><p>具体内容</p><p>具体内容</p>
        </div>
      </pop-view>
    </div>
    <common-view></common-view>
  </common-page>
</template>

<script>
import Vue from 'vue';
import CommonPage from '@/components/common/common-page.vue'
import CommonView from '@/components/common/common-view.vue'
import PopView from '@/components/popview/index.vue'

import FixedBlock from '@/components/fixed-block.vue'
import TableHead from '@/components/table/table-head.vue'


import {pushHistory} from '@/utils/index.js'

import { List } from 'vant';

Vue.use(List);

import Mock from "mockjs";

export default {
  data() {
    return {
      popViewVisible : false, 
      popViewHeader : {
        close : true,
        title : "编辑"
      },
      header : {
        back : true,
        title : "要货单列表"
      },
      foot: false,
      thead : {
        no : false,
        value : [
          "条码","商品名称","数量"
        ]
      },
      orderList : [],
      loading: false,
      finished: false
    }
  },
  components: {
    CommonPage,
    CommonView,
    PopView,
    FixedBlock,
    TableHead
  },
  methods : {
    onPopViewOpen(){
      this.popViewVisible=true
      pushHistory("pop-view-"+"manage");
    },
    onPageCloseFn(){
      this.popViewVisible=false
    },
    requestData(){
      return new Promise((resovle, reject) => {
        // 模拟异步更新数据
        setTimeout(() => {
          const data=Mock.mock({
            "array|15-20": [
              {
                "productNo": '@id',
                "productName": "@ctitle",
                "saleNumber": '@integer(1, 10)'
              }
            ]
          })
          resovle(data.array);
          reject({"message":"error","success":false})
        }, 680);
      })
    },
    onLoad(){
      this.requestData().then(res => {
        this.orderList = this.orderList.concat(res)
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.orderList.length >= 100) {
          this.finished = true;
        }
      }).catch(err => {
      })
    }
  }
}
</script>

<style scoped lang="less">
#pop-view-body{
  height:100%;
  background:#fff;
  padding:0 10px;
  overflow:auto;
}
.van-list{
  >.tr{
    border-bottom: 1px solid #ccc;
    list-style: none;
    display: flex;
    flex-direction: row;
    width:100%;
    >.td{
      flex :1;
      padding:12px 2px;
      text-align: center;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      font-size:14px;
    }
  }
} 

.thead{
  color:#333;
  width:100%;
  height: auto;
  background-color: #fff;
  border-top:1px solid #ccc;
  border-bottom:1px solid #ccc;
  >ul{
    display:flex;
    flex-direction: row;
    border-bottom:1px solid #ccc;
    padding:0 2px;
    &:last-of-type{
      border-bottom:none; 
    }
    >li{
      flex :1;
      font-size:14px;
      padding:10px 0;
      overflow:hidden; 
      text-align: center;
      >span{
        display: block;
        overflow:hidden;
        text-overflow: ellipsis;
        white-space: nowrap; 
      }
    }
  } 
}

</style>
