<template>
  <common-page type="goods-manage" :header="header" :foot="foot">
    <div class="action" slot="action">
      <van-icon name="like-o" @click="onShareTap"/>
    </div>
    <div slot="content" >
      <nav-list :nav="nav"></nav-list>
    </div>
  </common-page>
</template>

<script>
import CommonPage from '@/components/common/common-page.vue'
import CommonView from '@/components/common/common-view.vue'
import NavList from '@/components/nav-list.vue'

export default {
  name: 'GoodsManage',
  data() {
    return {
      header : {
        back : true,
        title : "库存管理"
      },
      foot: false,
      nav : [
        {
          name : "配送单入库",
          icon : "home",
          url : "/home/goodstostock"
        },
        {
          name : "门店库存",
          icon : "home",
          url : "/home/stockmanage"
        },
        {
          name : "配送单",
          icon : "home",
          url : "/home/stockmanage"
        }  
      ]
    }
  },
  components: {
    CommonPage,
    NavList
  },
  methods : {
    onShareTap(){
      alert("别惦记我");
    }
  }


}
</script>

<style scoped lang="less">

</style>
