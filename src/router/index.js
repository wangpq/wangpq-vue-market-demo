import Vue from 'vue'
import Router from 'vue-router'

import App from '@/App'

import Index from '@/views/home/index'
import GoodsManage from '@/views/home/goods-manage'
import StockManage from '@/views/home/stock-manage'
import NewRequisition from '@/views/home/new-requisition'
import SavedRequisition from '@/views/home/saved-requisition'
import RequisitionList from '@/views/home/requisition-list'
import MyGoods from '@/views/mine/my-goods.vue'
import Login from '@/views/mine/login.vue'
import AboutMe from '@/views/mine/about-me.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App,
    }, 
    {
      path: '/home',
      name: 'Home',
      component: Index,
      children: [
        {
          path: '/home/goodsmanage',
          name: 'GoodsManage',
          component: GoodsManage
        },
        {
          path: '/home/stockmanage',
          name: 'StockManage',
          component: StockManage,    
        }
      ]
    }, 
    {
      path: '/mygoods',
      name: 'MyGoods',
      component: MyGoods,
    },
    {
      path: '/home/requisitionlist',
      name: 'RequisitionList',
      component: RequisitionList,    
    },  
    {
      path: '/home/newrequisition',
      name: 'NewRequisition',
      component: NewRequisition,    
    },

    {
      path: '/home/savedrequisition',
      name: 'SavedRequisition',
      component: SavedRequisition,    
    },
    {
      path: '/home/requisitionlist',
      name: 'RequisitionList',
      component: RequisitionList,    
    },  

    {
      path: '/login',
      name: 'Login',
      component: Login,    
    },
    {
      path: "/about",
      name: 'AboutMe',
      component: AboutMe,    
    }


  ]
})
