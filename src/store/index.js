import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import multiple_timeline from './modules/multiple_timeline' //所有新闻
import multiple_multiplenews from './modules/multiple_multiplenews'//综合新闻
import multiple_softupdatenews from './modules/multiple_softupdatenews'//软件更新
import news_detail from './modules/news_detail'
import comment_list from './modules/comment_list'
import recent_tweet from './modules/tweet/recent_tweet'
import mine_tweet from './modules/tweet/mine_tweet'
import hot_tweet from './modules/tweet/hot_tweet'
import multiple from './modules/multiple'
import mine from './modules/mine/mine'
import favorite from './modules/favorite/favorite_module'
import follow from './modules/follow/follow_module'
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
        comment_list,
        recent_tweet,
        hot_tweet,
        mine_tweet,
        multiple,
        favorite,
        follow,
        mine
    }
})