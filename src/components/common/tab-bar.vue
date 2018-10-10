<template>
  <footer class="footer">
    <ul class="wrap" >
      <li v-for="(item,index) in data" :key="item.id" :index="index" @click="onTabItemTap">
          <div :class="currentIndex==index ? 'selected':''">
            <van-icon :name="item.icon" />
            <span>{{item.name}}</span>
          </div>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentIndex : 0
    }
  },
  props: {
    data: {
      type : Array,
      default(){
        return []
      }
    }
  },
  methods : {
    onTabItemTap(evt){
      let index=evt.currentTarget.getAttribute("index");
      this.currentIndex=index;
      this.$emit("tabBarIndex",index);
    }
  }
}
</script>

<style scoped lang="less">
footer{
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
    div{
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
    & .selected{
      color:#4273EA;
    }
  }
}

</style>
