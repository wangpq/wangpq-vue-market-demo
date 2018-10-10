<template>
  <common-page type="about-me-page" :header="header" :foot="foot">
    <div slot="content" class="contentWrap">
      <dl class="body">
        <dd>
          <div class="item">
            <router-link to="/modify">
              <van-icon name="contact" />
              <span>修改密码</span>
            </router-link>
          </div>
          <div class="item">
              <van-icon name="like" />
              <span @click="onLogoutTap">退出登录</span>
          </div>
        </dd>
        <common-view transition="slide-x"></common-view>
      </dl>
    </div>
  </common-page>
</template>

<script>
import CommonView from '@/components/common/common-view.vue'
import CommonPage from '@/components/common/common-page.vue'

export default {
  data() {
    return {
      foot : false,
      header : {
        back : true,
        title : "关于我"
      }
    }
  },
  components: {
    CommonView,
    CommonPage
  },
  methods :{
    onLogoutTap(){  
      sessionStorage.clear();
      this.$router.push("/");
    }
  }
}
</script>

<style scoped lang="less">
.contentWrap{
  height:100%;
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content:center;
}
dl{
  width:100%;
  margin:0 8px;
  dt{
    img{
      display: block;
      width : 50%;
      margin:88px auto 38px;
    }
  }
  dd{
    margin:0;
    padding:0; 
    background-color: #fff;
    border-radius:4px;
    .item{
      text-align: left;
      padding:14px 10px;
      border-bottom:1px dashed #eee;
      color:#555;
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
    }
  }
}
</style>
