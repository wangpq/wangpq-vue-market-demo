<template>
  <div id="app">
    <div class="load" v-if="loading">
      <h2>中铁如家超市管理系统</h2>
    </div>
    <Home v-if="!loading"></Home>
  </div>
</template>

<script>
import Home from '@/views/Home/index.vue'
export default {
  data() {
    return {
      loading : true,
    }
  },
  components: {
    Home
  },
  created (){
    //在页面加载时读取localStorage里的状态信息
    localStorage.getItem("movieCollect") && this.$store.replaceState(JSON.parse(localStorage.getItem("movieCollect")));
    
    //在页面刷新时将vuex里的信息保存到localStorage里
    window.addEventListener("beforeunload",()=>{ 
      localStorage.setItem("movieCollect",JSON.stringify(this.$store.state))
    })
    
    let loadFlag=sessionStorage.getItem("loading");
    if(loadFlag=="0"){
      this.loading=false;
    }

    let loginName=sessionStorage.getItem("userName");

    if(this.loading){  
      if(loginName!==""){
        let timer=window.setTimeout(()=>{
          this.loading=false;
          sessionStorage.setItem("loading","0");
          window.clearTimeout(timer);
        },1280)
      }else{
        sessionStorage.setItem("loading","0");
        this.$router.push("/login");
      }
    
    }

    if(!loginName){
      sessionStorage.setItem("loading","0");
      this.$router.push("/login");
    }

  }
}
</script>

<style>
#app {
  height:100%;
}
.load{
  position: absolute;
  left:0;
  top:0;
  height: 100%;
  width:100%;
  z-index:9;
  color:#f00;
  background-color: #f0f0f0;

  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content:center;

}
</style>
