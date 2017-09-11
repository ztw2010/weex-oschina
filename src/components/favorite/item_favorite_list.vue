<template>
  <div class="tweet_item_div_class">
      <div class="tweet_item_top_div_class">
        <md-avatar style="vertical-align: top;position: relative;margin: 0px">
          <img v-lazy="item.portrait" class="tweet_item_img_class">
        </md-avatar>
        <div class="tweet_item_right_div_class">
          <span class="tweet_item_name_span_class">{{item.author}}</span>
          <span class="tweet_item_body_span_class" v-html="item.body"></span>
          <div v-if="item.imgSmallList" class="tweet_item_pic_div_class">
            <img v-for="smallImg in item.imgSmallList" v-lazy="smallImg" class="tweet_item_img_small_class">
          </div>
          <div v-else-if="item.imgSmall" class="tweet_item_pic_div_class">
            <img v-lazy="item.imgSmall" class="tweet_item_img_small_class">
          </div>
          <div class="tweet_item_bottom_div_class">
            <span class="tweet_item_time_span_class">{{ item.pubDate | timeAgo }}</span>
            <div class="tweet_item_item_div_class">
              <img class="tweet_item_item_img_class" src="../../assets/ic_thumb_normal.png">
              <span class="tweet_item_count">赞</span>
            </div>
            <div class="tweet_item_item_div_class">
              <img class="tweet_item_item_img_class" src="../../assets/ic_comment_30.png">
              <span class="tweet_item_count">{{ item.commentCount > 0 ? item.commentCount : '评论' }}</span>
            </div>
            <div class="tweet_item_item_div_class">
              <img class="tweet_item_item_img_class" src="../../assets/ic_forward.png">
              <span class="tweet_item_count">转发</span>
            </div>
          </div>
        </div>
      </div>
      <div class="tweet_item_diver_div_class" v-show="!isLast"></div>
  </div>
</template>

<style scoped>
  .tweet_item_div_class{
    display: flex;
    flex-direction: column;
    background-color: white;
    margin-top: 5px;
  }

  .tweet_item_top_div_class{
    display: flex;
    flex-direction: row;
    padding-left: 10px;
    padding-top: 5px;
    padding-right: 10px;
    padding-bottom: 5px;
    height: auto;
  }

  .tweet_item_img_class{
    width: 50px;
    height: 50px;
  }

  .tweet_item_right_div_class{
    display: flex;
    flex-direction: column;
    flex: 8;
    margin-left: 5px;
    height: auto;
  }

  .tweet_item_name_span_class{
    color: #111111;
    font-size: 15px;
    font-weight: bold;
  }

  .tweet_item_body_span_class{
    color: #333333;
    font-size: 12px;
    margin-top: 5px;
  }

  .tweet_item_bottom_div_class{
    height: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
  }

  .tweet_item_time_span_class{
    color: #9d9d9d;
    font-size: 12px;
    flex: 5;
  }

  .tweet_item_item_div_class{
    display: flex;
    flex-direction: row;
    margin-left: 15px;
    height: 30px;
    align-items: center;
  }

  .tweet_item_item_img_class{
    width: 15px;
    height: 15px;
  }

  .tweet_item_count{
    color: #9d9d9d;
    margin-left: 5px;
  }

  .tweet_item_diver_div_class{
    height: 1px;
    background-color: #c8c7cc;
    margin-left: 10px;
  }

  .tweet_item_pic_div_class{
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
    margin-top: 5px;
    height: auto;
  }

  .tweet_item_img_small_class{
    width: 100px;
    height: 100px;
    margin-left: 5px;
    margin-top: 5px;
  }

</style>

<script>
  export default {
      name: "item_recent_tweet",
      props: {
          item: {
              type: Object,
              required: true
          },
          isLast: {
              type: Boolean,
              default: false
          }
      },
      data() {
          return {

          }
      },
  }
</script>
