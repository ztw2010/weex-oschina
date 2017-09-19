<template>
  <div class="item_tweet_mine_div_class">
    <div class="item_tweet_mine_top_div_class">
      <md-avatar style="flex: 1;margin: 0px">
        <img class="item_tweet_mine_portrait_img_class" :src="item.portrait">
      </md-avatar>
      <div class="item_tweet_mine_right_div_class">
        <span class="item_tweet_mine_uname_span_class">{{item.author}}</span>
        <span class="item_tweet_mine_msg_span_class">{{item.message}}</span>
        <div v-if="item.tweetImageList" class="item_tweet_mine_pic_div_class">
          <img v-for="img in item.tweetImageList" v-lazy="img" class="item_tweet_mine_img_small_class">
        </div>
        <div v-else-if="item.tweetImage" class="item_tweet_mine_pic_div_class">
          <img v-lazy="item.tweetImage" class="item_tweet_mine_img_small_class">
        </div>
        <div class="item_tweet_mine_bottom_div_class">
          <span class="item_tweet_mine_device_type_span_class">{{ item.pubDate | timeAgo }}  {{ item.appClient | getDeviceNameByType}}</span>
          <div class="item_tweet_mine_bottom_right_div_class">
            <div class="item_tweet_mine_bottom_right_item_div_class">
              <img class="item_tweet_mine_bottom_right_item_img_class" src="../../assets/ic_thumb_normal.png">
              <span class="item_tweet_mine_bottom_right_item_count_class">赞</span>
            </div>
            <div class="item_tweet_mine_bottom_right_item_div_class">
              <img class="item_tweet_mine_bottom_right_item_img_class" src="../../assets/ic_comment_30.png">
              <span class="item_tweet_mine_bottom_right_item_count_class">{{item.commentCount === 0 ? '评论' : item.commentCount}}</span>
            </div>
            <div class="item_tweet_mine_bottom_right_item_div_class">
              <img class="item_tweet_mine_bottom_right_item_img_class" src="../../assets/ic_forward.png">
              <span class="item_tweet_mine_bottom_right_item_count_class">转发</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="item_tweet_mine_split_div_class"></div>
  </div>
</template>

<style scoped>

  .item_tweet_mine_div_class{
    display: flex;
    flex-direction: column;
    padding: 10px;
  }

  .item_tweet_mine_top_div_class{
    display: flex;
    flex-direction: row;
    flex: 9;
  }

  .item_tweet_mine_portrait_img_class{
    width: 40px;
    height: 40px;
  }

  .item_tweet_mine_right_div_class{
    display: flex;
    flex-direction: column;
    flex: 8;
    margin-left: 5px;
  }

  .item_tweet_mine_uname_span_class{
    color: #111111;
    font-size: 15px;
  }

  .item_tweet_mine_split_div_class {
    background-color: #c8c7cc;
    height: 1px;
    margin-top: 10px;
  }

  .item_tweet_mine_msg_span_class{
    color: #111111;
    font-size: 13px;
    margin-top: 5px;
  }

  .item_tweet_mine_pic_div_class{
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
    margin-top: 5px;
    height: auto;
  }

  .item_tweet_mine_img_small_class{
    width: 100px;
    height: 100px;
    margin-left: 5px;
    margin-top: 5px;
  }

  .item_tweet_mine_bottom_div_class{
    display: flex;
    flex-direction: row;
    height: 20px;
    margin-top: 10px;
  }

  .item_tweet_mine_device_type_span_class{
    color: #9d9d9d;
    font-size: 11px;
    flex: 6;
  }

  .item_tweet_mine_bottom_right_div_class{
    display: flex;
    flex-direction: row;
    flex: 5;
  }

  .item_tweet_mine_bottom_right_item_div_class{
    display: flex;
    flex-direction: row;
    flex: 1;
    align-items: center;
  }

  .item_tweet_mine_bottom_right_item_img_class{
    width: 15px;
    height: 15px;
  }

  .item_tweet_mine_bottom_right_item_count_class{
    color: #9d9d9d;
    font-size: 10px;
  }
</style>

<script type="text/ecmascript-6">
    import { Lazyload } from 'mint-ui'
    export default {
        name: "item_mine_info_mine_tweet",
        props: {
            item: {
                type: Object,
                required: true
            }
        },
    }
</script>
