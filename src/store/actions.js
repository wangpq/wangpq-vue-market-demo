//import axios from 'axios'
import jsonp from 'jsonp'

//action 异步的操作
export default {

  deleteCollectById({commit},id){ 
    commit('delete_collect_by_id',id)
  },

  setCollectPageShow({commit},show){ 
    commit('set_collect_page_show',show)
  }
  

}
