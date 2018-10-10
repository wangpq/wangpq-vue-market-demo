<template>

    <div class="wrap">
      <div class="fixed">
        <div class="thead">
          <ul class="tr">
            <li class="th" v-if="thead.no">序号</li>
            <li class="th" v-for="(item,index) in thead.value" :key="index">
              <span>{{item}}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="active" style="padding-top:6px;">
        <div class="tbody" v-if="tbody.value">
          <ul class="tr" v-for="(item,index) in tbody.value" :key="item.productNo">
            <li class="td no" v-if="tbody.no"><span>{{index+1}}</span></li>
            <li class="td"><span>{{item.productNo}}</span></li>
            <li class="td"><span>{{item.productName}}</span></li>
            <li class="td"><span>{{item.saleNumber}}</span></li>
          </ul>
        </div>
        <div class="tbody" v-if="!tbody.value || (tbody.value && tbody.value.length==0)">
          <ul class="tr">
            <li class="td"><span>没有数据！</span></li>
          </ul>
        </div>
      </div>
    </div>

</template>

<script>

export default {
  props : {
    thead : {
      type : Object,
      default : {}
    },
    tbody : {
      type : Object,
      default : {}
    }
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
    flex :2;
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
</style>
