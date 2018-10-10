<template>
  <div class="loading">
    <img :src="imgUrl">
  </div>
</template>

<script>
import imgUrl from '../../assets/images/loading.gif'
export default {
  data() {
    return {
      imgUrl : imgUrl
    }
  }
}
</script>

<style scoped lang="less">
.loading{
  img{
    width:36px;
    display: block;
    margin:0 auto;
  }
}
</style>
