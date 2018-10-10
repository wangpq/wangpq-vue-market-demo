<template>
  <div ref="wrapper" class="wrapper">
    <ul class="content" v-if="wrapperNode=='ul'"> 
      <slot name="refresh">
        <div class="refresh" v-if="pulldown">
          <span class="refresh-text" v-show="refreshing">{{refreshText}}</span>
        </div>
      </slot>
      <slot></slot>
      <slot name="loading">
        <li class="loading">
          <van-loading size="16px" v-if="!finished"/>
          <span class="load-text">{{loadText}}</span>
        </li>
      </slot>
    </ul>
    <div class="content" v-else> 
      <slot name="refresh">
        <div class="refresh" v-if="pulldown">
          <span class="refresh-text" v-show="refreshing">{{refreshText}}</span>
        </div>
      </slot>
      <slot></slot>
      <slot name="loading">
        <div class="loading">
          <van-loading size="16px" v-if="!finished"/>
          <span class="load-text">{{loadText}}</span>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  //import { Loading } from 'vant';
  
  export default {
    props: {
      /**
       * 1 滚动的时候会派发scroll事件，会截流。
       * 2 滚动的时候实时派发scroll事件，不会截流。
       * 3 除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
       */
      probeType: {
        type: Number,
        default: 1
      },
      /**
       * 点击列表是否派发click事件
       */
      click: {
        type: Boolean,
        default: true
      },
      /**
       * 是否开启横向滚动
       */
      scrollX: {
        type: Boolean,
        default: false
      },
      /**
       * 是否派发滚动事件
       */
      listenScroll: {
        type: Boolean,
        default: false
      },
      /**
       * 列表的数据
       */
      data: {
        type: Array,
        default: null
      },
      /**
       * 是否派发滚动到底部的事件，用于上拉加载
       */
      pullup: {
        type: Boolean,
        default: false
      },
      /**
       * 是否派发顶部下拉的事件，用于下拉刷新
       */
      pulldown: {
        type: Boolean,
        default: false
      },
      /**
       * 数据已加载完成
       */
      finished: {
        type: Boolean,
        default: false
      },
      loadText : {
        type: String,
        default: "正在加载数据..."
      },
      refreshText : {
        type: String,
        default: "下拉即可刷新..."
      },
      refreshing : {
        type: Boolean,
        default: false
      },
      /**
       * 滚动列表包裹元素类型
       * 只有"ul"、"div"，默认"ul""
       */
      wrapperNode: {
        type: String,
        default: "ul"
      },
      loading : {
        type: Boolean,
        default: true
      },
      /**
       * 是否派发列表滚动开始的事件
       */
      beforeScroll: {
        type: Boolean,
        default: false
      },
      /**
       * 当数据更新后，刷新scroll的延时。
       */
      refreshDelay: {
        type: Number,
        default: 20
      }
    },
    mounted() {
      // 保证在DOM渲染完毕后初始化better-scroll
      setTimeout(() => {
        this._initScroll()
      }, 20)
    },
    methods: {
      _initScroll() {
        if (!this.$refs.wrapper) {
          return
        }
        // better-scroll的初始化
        this.scroll = new BScroll(this.$refs.wrapper, {
          probeType: this.probeType,
          click: this.click,
          scrollX: this.scrollX
        })

        // 是否派发滚动事件
        if (this.listenScroll) {
          let me = this
          this.scroll.on('scroll', (pos) => { 
            me.$emit('scroll', pos)
          })
        }

        // 是否派发滚动到底部事件，用于上拉加载
        if (this.pullup) {
          this.scroll.on('scrollEnd', () => { 
            // 滚动到底部
            if (this.scroll.y <= (this.scroll.maxScrollY + 50)) { 
              this.$emit('scrollToEnd')
            }
          })
        }

        // 是否派发顶部下拉事件，用于下拉刷新
        if (this.pulldown) { 
          this.scroll.on('touchEnd', (pos) => {  
            // 下拉动作
            if (pos.y > 50) { 
              this.$emit('pulldown')
            }
          })
        }

        // 是否派发列表滚动开始的事件
        if (this.beforeScroll) {
          this.scroll.on('beforeScrollStart', () => {
            this.$emit('beforeScroll')
          })
        }
      },
      disable() {
        // 代理better-scroll的disable方法
        this.scroll && this.scroll.disable();
      },
      enable() {
        // 代理better-scroll的enable方法
        this.scroll && this.scroll.enable();
      },
      refresh() {
        // 代理better-scroll的refresh方法
        this.scroll && this.scroll.refresh();
      },
      scrollTo() {
        // 代理better-scroll的scrollTo方法
        this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments);
      },
      scrollToElement() {
        // 代理better-scroll的scrollToElement方法
        this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments);
      }
    },
    watch: {
      // 监听数据的变化，延时refreshDelay时间后调用refresh方法重新计算，保证滚动效果正常
      data() {
        setTimeout(() => {
          this.refresh();
        }, this.refreshDelay);
      }
  }
}
</script>

<style scoped lang="less">
@fontSize:14px; 
.wrapper{
  height:100%;
  overflow:hidden;
  position:relative;
  .content{
    >.loading{
      padding:10px 2px;
      text-align: center;
      .van-loading{
        display: inline-block;
        vertical-align: middle;
        margin-right:4px;
        color:#888;
        font-size:@fontSize;
      }
      .load-text{
        vertical-align: middle;
        font-size:@fontSize;
        color:#888;
      }
    }
    >.refresh{
      height:28px;
      line-height: 28x;
      text-align: center;
      position:absolute;
      left:0;
      right:0;
      top:-28px;
      .refresh-text{
        vertical-align: middle;
        font-size:@fontSize;
        color:#888;
      }
    }
  } 
}



</style>
