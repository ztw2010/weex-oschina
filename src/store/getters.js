export const login = state => state.auth.login
export const token = state => state.auth.token


// main/multiple 所有新闻
export const multiple_timeline = state => state.multiple_timeline.statuses
export const multiple_option = state => state.multiple_timeline.option

//综合新闻
export const multiple_multiplenews_statuses = state => state.multiple_multiplenews.statuses
export const multiple_multiplenews_option = state => state.multiple_multiplenews.option

//软件更新
export const multiple_softupdatenews_statuses = state => state.multiple_softupdatenews.statuses
export const multiple_softupdatenews_option = state => state.multiple_softupdatenews.option

//新闻详情页
export const news_detail_content = state => state.news_detail.newscontent

//发布评论结果
export const pub_comment_result = state => state.news_detail.pubCommentResult

//获取评论列表
export const comment_list = state => state.comment_list.commentList
export const comment_list_option = state => state.comment_list.option

//获取tab页
export const tab_page = state => state.multiple.tabPage

//动弹-最新动弹
export const recent_tweet_list = state => state.recent_tweet.statuses
export const recent_tweet_option = state => state.recent_tweet.option

//动弹-热门动弹
export const hot_tweet_list = state => state.hot_tweet.statuses
export const hot_tweet_option = state => state.hot_tweet.option

//动弹-我的动弹
export const mine_tweet_list = state => state.mine_tweet.statuses
export const mine_tweet_page = state => state.mine_tweet.page

//个人信息
export const mine_info = state => state.mine.mineInfo

//收藏列表
export const favorite_list = state => state.favorite.statuses
export const favorite_list_page = state => state.favorite.page

//个人中心-关注列表
export const follow_list = state => state.follow.statuses
export const follow_page = state => state.follow.page
// 1:关注 0:粉丝
export const follow_type = state => state.follow.type

//个人中心-动弹
export const mine_info_mine_tweet_list = state => state.mine_info_mine_tweet_module.statuses
export const mine_info_mine_tweet_page = state => state.mine_info_mine_tweet_module.page

//个人中心-我的消息-@我
export const at_me_list = state => state.at_me_module.statuses
export const at_me_page = state => state.at_me_module.page

//个人中心-我的消息-评论
export const mine_comment_list = state => state.mine_comment_module.statuses
export const mine_comment_page = state => state.mine_comment_module.page

//个人中心-我的消息-私信
export const private_letter_list = state => state.private_letter_module.statuses
export const private_letter_page = state => state.private_letter_module.page