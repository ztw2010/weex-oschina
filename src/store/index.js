import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import multiple_timeline from './modules/multiple_timeline'
import multiple_multiplenews from './modules/multiple_multiplenews'
import multiple_softupdatenews from './modules/multiple_softupdatenews'
import news_detail from './modules/news_detail'
import comment_list from './modules/comment_list'
import * as getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
    getters,
    modules: {
        auth,
        multiple_timeline,
        multiple_multiplenews,
        multiple_softupdatenews,
        news_detail,
        comment_list
    }
})