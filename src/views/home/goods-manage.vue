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
import NavList from '@/components/nav-list.vue'

export default {
  name: 'GoodsManage',
  data() {
    return {
      header : {
        back : true,
        title : "要货管理"
      },
      foot: false,
      nav : [
        {
          name : "新增要货单",
          icon : "home",
          url : "/home/newrequisition"
        },
        {
          name : "要货单列表",
          icon : "home",
          url : "/home/requisitionlist"
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
.movie-content{
  margin-top:58px;
}
</style>
