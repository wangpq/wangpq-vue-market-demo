<template>
  <section :class="setClass()">
    <header v-if="header.title">
      <van-icon v-if="header.back" name="arrow-left" class="back" @click="onBackTap"/>
      <div class="title" v-if="header.title">{{header.title}}</div>
      <slot name="action"></slot>
    </header>
    <div class="body">
      <div class="inner">
        <slot name="content">{{content}}</slot>
      </div> 
    </div>
    <slot name="footer">
      <footer class="footer" v-if="foot">
        <ul class="wrap">
          <li>
            <router-link to="/home">
              <van-icon name="home" />
              <span>首页</span>
            </router-link>
          </li>
          <li>
            <router-link to="/mine">
              <van-icon name="contact" />
              <span>我的</span>
            </router-link>
          </li> 
        </ul>
      </footer>
    </slot>
  </section>
</template>

<script>
export default {
  props: {
    header: {
      type : Object,
      default(){
        return {
        }
      }
    },
    foot: {
      type: Boolean,
      default: false,
      required: false
    },
    type: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    }
  },
  methods:  {
    setClass(){ 
      let str="page";
      if(this.header.title || this.header.action){
        str+=" has-header"
      }
      if(this.foot){
        str+=" has-footer"
      } 
      if(this.type){
        str+=" "+this.type
      } 
      return str;
    },
    onBackTap(){  
      this.$router.back()
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
    height:44px;
    line-height: 44px;
    border-bottom: 1px solid #f0f0f0;
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
  >footer{
    overflow:hidden;
    height:44px;  
    position:absolute;
    left:0;
    right:0;
    bottom:0;
    overflow: hidden;
    z-index:5;
    .wrap{
      padding: 0;
      background-color: #fff;
      z-index:1000;
      display:flex;
      flex-direction: row;
      height:100%;
      border-top:1px solid #f0f0f0;
      li{
        flex :1;
        list-style:none;
        display: flex;
        flex-direction: row;
        align-items:center;
        justify-content:center;
      }
      a{
        font-size:16px;
        color:#666;
        display:block;
        transition: all 0.4s;
        text-align: center;
        i{
          font-size:20px;
        }
        span{
          display: block;
          font-size:12px;
        }
      }
      & .router-link-exact-active{
        color:#4273EA;
      }
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
