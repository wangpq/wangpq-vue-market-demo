<template>

  <section class="page index">
    <header v-if="currentTabIndex==0">
      <div class="title">中铁如家超市管理系统</div>
      <div class="action" slot="action">
        <van-icon name="like-o" @click="onShareTap"/>
      </div>
    </header>

    <home-page v-if="currentTabIndex==0"></home-page>
    <mine-page v-if="currentTabIndex==1"></mine-page>

    <tab-bar :data="tabBar" @tabBarIndex="onTabBarIndex"></tab-bar>
  </section>
</template>

<script>
import TabBar from '@/components/common/tab-bar.vue'
import HomePage from '@/views/home/home-page.vue'
import MinePage from '@/views/home/mine-page.vue'

export default {
  name: 'Home',
  data() {
    return {
      nav : [
        {
          name : "要货管理",
          icon : "home",
          url : "/home/goodsmanage"
        },
        {
          name : "库存管理",
          icon : "home",
          url : "/home/stockmanage"
        }  
      ],
      tabBar : [
        {
          id : "home",
          icon : "home",
          name : "首页"
        },
        {
          id : "mine",
          icon : "contact",
          name : "我的"
        }  
      ],
      currentTabIndex : 0
    }
   
  },
  components: {
    TabBar,
    HomePage,
    MinePage
  },
  methods : {
    onShareTap(){
      alert("别惦记我");
    },
    onTabBarIndex(index){
      this.currentTabIndex=index;
    }
  }
}
</script>

<style scoped lang="less">
.page{
  position: absolute;
  z-index: 10;
  left:0;
  right:0;
  top:0;
  bottom:0;
  width:100%;
  height:100%;
  background: #f2f2f2;
  overflow: hidden;
  >header{
    position:relative;
    z-index: 5;
    background-color: #fff;
    box-shadow: 0 1px 6px #fff;
    height:44px;
    line-height: 44px;
    span.back{
      line-height: 1;
      font-size:14px;
      padding:0 12px;
      height:44px;
      line-height: 44px;
      color:#333;
      cursor: pointer;
      display: block;
      position:absolute;
      left:0;
      top:0;
    }
    i.back{
      padding:0 10px;
      height:48px;
      line-height: 48px; 
      font-size:20px; 
      color:#4273EA;
      cursor: pointer;
      position:absolute;
      left:0;
      top:0;
    }
    .title{
      color:#000;
      width:70%;
      margin:0 auto;
      text-align: center;
      font-size:16px;
      overflow:hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .action{
      position:absolute;
      right:10px;
      top:0; 
      bottom:0;
      display: flex;
      flex-direction: row;
      align-items:center;
      justify-content:center;
      span{
        display: inline-block;
        padding:0 5px;
        color:#333;
        font-size: 14px;
        cursor:pointer;
      }
      i{
        display: inline-block;
        padding:0 5px;
        color:#4273EA;
        font-size: 20px;
        cursor:pointer;
      }
    }
  }
  >.body{
    height: calc(100% - 44px);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    .inner{
       height:100%;
    }
  }

  &.has-header{
    .body{
      top:44px;
    }
  }
  &.has-footer{
    .body{
      bottom:44px;
    }
  }
}
</style>
