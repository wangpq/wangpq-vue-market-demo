<template>
  <dl class="body mine-page">
    <dt>
      <!--
      <img src="../../assets/images/logo.png">
      -->
    </dt>
    <dd>
      <div class="item">
        <router-link to="/mygoods">
          <van-icon name="like" />
          <span>我的要货单</span>
        </router-link>
      </div>
      <div class="item">
        <router-link to="/about">
          <van-icon name="contact" />
          <span>关于我</span>
        </router-link>
      </div>

    </dd>
    <common-view transition="slide-x"></common-view>
   
  </dl>
</template>

<script>
import CommonView from '@/components/common/common-view.vue'

export default {
  components: {
    CommonView
  },
  methods :{
    onLogoutTap(){  debugger
      sessionStorage.clear();
      this.$router.push("/");
    }
  }
}
</script>

<style scoped lang="less">
dl{
  margin:0 8px;
  dt{
    width:100px;
    height:100px;
    margin:80px auto;
    background-color: #888;
    border-radius:60px;
    img{
      display: block;
      width : 80%;
      margin:0 auto;
    }
  }
  dd{
    margin:0;
    padding:0; 
    background-color: #fff;
    border-radius:4px;
    overflow:hidden;
    .item{
      text-align: left;
      padding:14px 10px;
      border-bottom:1px solid #eee;
      &:last-of-type{
         border-bottom:none;
      }
      a{
        color:#555;
        vertical-align: middle;
        font-size:14px;
      }
      i{
        vertical-align: middle;
        margin-right:4px;
      }
      &:active{
        background-color: #4273EA;
        a{
        color:#fff;
        }
      }
    }
  }
}
</style>
