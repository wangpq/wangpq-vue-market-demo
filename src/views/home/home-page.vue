<template>
  <div class="body home-page">
    <today-sales></today-sales>
    <nav-list :nav="nav"></nav-list>
  </div>
</template>

<script>
import TodaySales from '@/views/home/today-sales.vue'
import NavList from '@/components/nav-list.vue'

export default {
  name: 'HomePage',
  data() {
    return {
      nav : [
        {
          name : "要货管理",
          icon : "home",
          url : "/home/goodsmanage"
        },
        {
          name : "库存管理",
          icon : "home",
          url : "/home/stockmanage"
        }  
      ]
    }
  },
  components: {
    TodaySales,
    NavList
  }
}
</script>

<style scoped lang="less">
</style>
