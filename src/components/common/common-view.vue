<template>
  <transition :name="transition">
    <router-view></router-view>
  </transition>
</template>

<script>
export default {
  props: {
    transition: {
      type : String,
      default: "slide-y"
    },
  },
  watch:{
    $route(to,from){
      /*
      let _to=to.path;
      let _from=from.path;
      if(_from==="/mine" && _to==="/home" || _from==="/home" && _to==="/mine"){
        this.name="fade";
      }
      else{
        this.name="slide-x" 
      }
      */
    }
  },
}
</script>
