<template>
  <div class="nav-list-wrap">
    <div class="item" v-for="(item,index) in nav" :key="index">
      <router-link :to="item.url">
        <van-icon :name="item.icon" />
        <span>{{item.name}}</span>
      </router-link>
    </div>

    <common-view :transition="transition"></common-view>
   
  </div>
</template>

<script>
import CommonView from '@/components/common/common-view.vue'

export default {
  name: 'Navlist',
  props : {
    transition : {
      type : String,
      default : "slide-x"
    },
    nav : {
      type : Array,
      default : []
    }
  },
  components: {
    CommonView
  }
}
</script>

<style scoped lang="less">
.nav-list-wrap{
  color:#333;
  padding:48px 0;
  width:100%;
  display:flex;
  flex-direction: row;
  .item{
    flex :1;
    text-align: center;
    i{
       font-size:48px;
    }
    span{
      line-height: 1.68;
      display:block;
    }
  }
}
</style>
