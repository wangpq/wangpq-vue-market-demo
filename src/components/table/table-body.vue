<template>
  <div class="tbody-wrap">
    <div class="tbody" v-if="data.value">
      <ul class="tr" v-for="(item,index) in data.value" :key="item.productNo">
        <li class="td no" v-if="data.no"><span>{{index+1}}</span></li>
        <li class="td"><span>{{item.productNo}}</span></li>
        <li class="td"><span>{{item.productName}}</span></li>
        <li class="td"><span>{{item.saleNumber}}</span></li>
      </ul>
    </div>
    <div class="tbody" v-if="!data.value || (data.value && data.value.length==0)">
      <ul class="tr">
        <li class="td"><span>没有数据！</span></li>
      </ul>
    </div>
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
.tbody-wrap{
  .tbody{
    color:#333;
    width:100%;
    background-color: #fff;
    border-top:1px solid #ccc;
    border-bottom:1px solid #ccc;
    >.tr{
      display:flex;
      flex-direction: row;
      border-bottom:1px solid #ccc;
      padding:0 2px;
      transition: all 0.2s;
      &:last-of-type{
        border-bottom:none; 
      }
      &:active{
        background-color: #f8f8f8;
      }
      >.td{
        flex :1;
        font-size:14px;
        padding:10px 0;
        overflow:hidden; 
        margin:0;
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
}

</style>
