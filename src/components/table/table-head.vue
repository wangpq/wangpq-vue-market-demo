<template>
  <div class="thead">
    <ul class="tr">
      <li class="th" v-if="data.no">序号</li>
      <li class="th" v-for="(item,index) in data.value" :key="index">
        <span>{{item}}</span>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  props : {
    data : {
      type : Object,
      default : {}
    }
  },
  components: {
  }
}
</script>

<style scoped lang="less">
.thead{
  color:#333;
  width:100%;
  height: auto;
  background-color: #fff;
  border-top:1px solid #ccc;
  border-bottom:1px solid #ccc;
  >.tr{
    display:flex;
    flex-direction: row;
    border-bottom:1px solid #ccc;
    padding:0 2px;
    &:last-of-type{
      border-bottom:none; 
    }
    >.th{
      flex :1;
      font-size:14px;
      padding:10px 0;
      overflow:hidden; 
      text-align: center;
      >span{
        display: block;
        overflow:hidden;
        text-overflow: ellipsis;
        white-space: nowrap; 
      }
    }
  } 
}
</style>
