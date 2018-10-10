<template>
  <div class="wrap">
    <div :class="start">
      <slot :name="start"></slot>
    </div>
    <div :class="end">
      <slot :name="end"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    start : {
      type : String,
      default : "active" // "fixed"
    },
    end : {
      type : String,
      default : "fixed" // "active"
    },
  },
  components: {
  }
}
</script>

<style scoped lang="less">
.wrap{
  display:flex;
  flex-direction: column;
  height:100%;
  .active{
    flex :1;
    overflow-x:hdden;
    overflow-y:auto;
  }
  .fixed{
    .btn{
      line-height: 44px;
      display: block;
      text-align:center;
      background-color: #4273EA;
      color:#fff;
    }
  }
}
</style>
