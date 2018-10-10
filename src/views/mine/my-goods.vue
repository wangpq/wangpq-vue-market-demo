<template>
  <common-page type="collect-page" :header="header" :foot="foot">

    <div class="action" slot="action">
      <van-icon name="like-o" />
      <span @click="onShareTap">分享</span>
    </div>

    <div slot="content" style="height:100%;">
      <fixed-block start="fixed" end="active">
        <div slot="fixed">
          <table-head :data="thead"></table-head>
        </div>
        <div slot="active" style="height:100%;">

          <scroll-view class="wrapper" 
            wrapperNode="ul"
            :loadText= "loadText"
            :loading="loading"
            :finished="finished"
            :pullup="pullup"
            :pulldown="pulldown"
            :listenScroll="listenScroll"
            :refreshText="refreshText"
            :refreshing="refreshing"
            @scroll="onScroll"
            @pulldown="onPullDown"
            @scrollToEnd="onLoad">
            <li class="tr" v-for="item in goodsList" :key="item.productNo">
              <span class="td">{{item.productNo}} </span>
              <span class="td">{{item.productName}}</span>
              <span class="td">{{item.saleNumber}}</span>
            </li>
              <!--
              <li class="tr loading" slot="loading">
                <span class="td"><van-loading size="18px" v-if="!finished"/>---<span class="load-text">{{loadText}}</span></span>
              </li>
              -->
          </scroll-view>
        </div>
      </fixed-block>
    </div>

  </common-page>
</template>

<script>


import CommonPage from '@/components/common/common-page.vue'
import FixedBlock from '@/components/fixed-block.vue'
import TableHead from '@/components/table/table-head.vue'
import ScrollView from '@/components/scroll-view.vue'
import Mock from "mockjs";

export default {
  components: {
    CommonPage,
    FixedBlock,
    TableHead,
    ScrollView
  },
  data() {
    return {
      foot : false,
      header : {
        back : true,
        title : "我的要货单"
      },
      thead : {
        no : false,
        value : [
          "条码","商品名称","数量"
        ]
      },
      
      goodsList : [],
      length : 20,

      pullup: true,
      finished : false,
      loading: true,

      listenScroll : true,
      pulldown : true,
      refreshText : "下拉即可刷新...",
      refreshing : false,
      loadText : "正在加载数据..."
    }
  },
  created() {
    this.onLoad()
  },
  methods :{
    onShareTap(){
      alert("你点了分享");
    },
    requestData(){
      return new Promise((resovle, reject) => {
        // 模拟异步更新数据
        setTimeout(() => {
          const data=Mock.mock({
            "array|20-25": [
              {
                "productNo": '@id',
                "productName": "@ctitle",
                "saleNumber": '@integer(1, 10)'
              }
            ],
            "length" : 60
          })
          resovle(data);
          reject({"message":"fail","success":false})
        }, 1080);
      })
    },
    onLoad(){ 
      if(!this.finished){
        this.requestData().then(res => {
          this.goodsList = this.goodsList.concat(res.array);
          this.length=res.length;
          // 加载状态结束
          this.loading = false;
          // 数据全部加载完成
          if (this.goodsList.length >= this.length) {
            this.finished = true;
            this.loadText="数据已加载完毕！"
          }
        }).catch(err => {
        })
      }
    },
    onScroll(pos){
      this.refreshing=true;
      this.refreshText="下拉即可刷新...";
      if (pos.y > 50) {
        this.refreshText="释放立即刷新...";
      }
    },
    onPullDown(){
      this.resetParams();
      // 从新请求数据
      this.onLoad();
    },
    resetParams(){
      this.goodsList= [];
      this.finished = false;
      this.refreshing=false;
      this.refreshText="下拉即可刷新...";
      this.loadText="正在加载数据...";
    }
  }
}
</script>

<style scoped lang="less">
.wrapper{
  height:100%;
  overflow:hidden;
  position:relative;
  >.loading-wrap{
    position:absolute;
    bottom:0;
    left:0;
    right:0;
    text-align: center;
  }
}

.tr{
  border-bottom: 1px solid #ccc;
  list-style: none;
  display: flex;
  flex-direction: row;
  width:100%;
  >.td{
    flex :1;
    padding:12px 2px;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size:14px;
  }
}


</style>