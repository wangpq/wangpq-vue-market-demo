<template>

<transition :name="transition">
  <section :class="setClass()">
    <header v-if="header.title">
      <van-icon v-if="header.close" name="close" class="cancel" @click="onCancelTap"/>
      <div class="title" v-if="header.title">{{header.title}}</div>
      <slot name="action"></slot>
    </header>
    <div class="body">
      <div class="inner">
        <slot name="content">{{content}}</slot>
      </div> 
    </div>
    <slot name="footer">
    </slot>
  </section>
</transition>
</template>

<script>

export default {
  props: {
    onPageCloseFn : {
      type : Function,
      default : ()=>{}
    },
    visible : {
      type : Boolean,
      default : false
    },
    transition : {
      type : String,
      default : "zoom"
    },
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
  created(){ 


    this.onAndroidBackTap();
  },
  methods:  {
    // 用于安卓物理返回键
    onAndroidBackTap(){
      if (window.history && window.history.pushState) {
        window.addEventListener("popstate", (e)=>{ 
           this.$emit("onPageClose");
        }, false); 
      }
    },
    setClass(){ 
      let str="pop-view";
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
    onCancelTap(tag){ 
      this.$router.back();
      this.$emit("onPageClose");
    }
  }

}
</script>

<style scoped lang="less">
.pop-view{
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
    i.cancel{
      padding:0 10px;
      height:48px;
      line-height: 48px; 
      font-size:24px; 
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
