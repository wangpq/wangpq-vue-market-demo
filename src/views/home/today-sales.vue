<template>
  <div class="today-wrap">
    <div class="item">
      今日销售额：¥280.00
    </div>
    <div class="item">
      今日销售笔数：55笔
    </div>
  </div>
</template>

<script>


export default {
  name: 'TodaySales',
  data() {
    return {
    }
  },
  components: {
  }
}
</script>

<style scoped lang="less">
.today-wrap{
  background-color: #4273EA;
  color:#fff;
  padding:60px 0;
  .item{
    line-height: 1.68;
    text-align: center;
  }
}
</style>
