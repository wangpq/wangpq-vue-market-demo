<template>
  <common-page type="goods-manage" :header="header" :foot="foot">

    <div class="action" slot="action">
      <span @click="onEdit">编辑</span>
    </div>

    <div slot="content" class="wrap">
      <div class="active">
        <!--
        <div class="wrap">
          <div class="fixed">
            <table-head :data="thead"></table-head>
          </div>
          <div class="active" style="padding-top:6px;">
            <table-body :data="tbody"></table-body>
          </div>
        </div>
        -->
        <wang-table :thead="thead" :tbody="tbody"></wang-table>
      </div>
      <div class="fixed">
        <div class="btn">生成要货单</div>
      </div>
    </div>

  </common-page>
</template>

<script>
import CommonPage from '@/components/common/common-page.vue'
import NavList from '@/components/nav-list.vue'
import TableHead from '@/components/table/table-head.vue'
import TableBody from '@/components/table/table-body.vue'
import WangTable from '@/components/table/wang-table.vue'

import Mock from "mockjs";

const arr=Mock.mock({
  "array|5-20": [
    {
      "productNo": '@id',
      "productName": "@ctitle",
      "saleNumber": '@integer(1, 10)'
    }
  ]
})


export default {
  name: 'NewRequisition',
  data() {
    return {
      header : {
        back : true,
        title : "商品列表"
      },
      foot: false,

      thead : {
        no : false,
        value : [
          "条码","商品名称","数量"
        ]
      },
      tbody : {
        no : false,
        value : arr.array
      },
    }
  },
  components: {
    CommonPage,
    NavList,
    TableHead,
    TableBody,
    WangTable
  },
  methods : {
    onSave(){
      alert("别惦记我");
    },
    onEdit(){
      alert("编辑");
    }
  }
}
</script>

<style scoped lang="less">
.wrap{
  display:flex;
  flex-direction: column;
  height:100%;
  .active{
    flex :2;
    overflow-x:hdden;
    overflow-y:auto;
  }
  .fixed{
    .btn{
      line-height: 44px;
      display: block;
      text-align:center;
      background-color: #4273EA;
      color:#fff;
    }
  }
}
</style>
