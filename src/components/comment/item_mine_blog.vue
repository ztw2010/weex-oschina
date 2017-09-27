<template>
  <div>
    <div class="item_top_div">
      <img v-if="item.type === 4" class="item_img_class" src="../../assets/ic_label_reprint.png">
      <img v-else-if="item.type === 1" class="item_img_class" src="../../assets/ic_label_originate.png">
      <span class="item_top_title_class">{{item.title}}</span>
    </div>
    <div class="item_middle_div_class">
      <div class="place_div_class"></div>
      <div class="item_mi_div_class">{{item.body | filterHtml}}</div>
    </div>
    <div class="item_bottom_div_class">
      <div class="left_div_class">
        <span class="author_span_class">{{item.author}}  {{ item.pubDate | timeAgo }}</span>
      </div>
      <div class="right_div_class">
        <img class="item_img_class" src="../../assets/ic_comment_30.png">
        <span class="author_span_class bottom">{{item.commentCount}}</span>
      </div>
    </div>
    <div class="item_diver_div_class"></div>
  </div>
</template>

<style scoped>
  .item_top_div{
    display: flex;
    flex-direction: row;
    padding: 10px;
    align-items: center;
  }

  .item_img_class{
    width: 15px;
    height: 15px;
  }

  .item_top_title_class{
    flex: 1;
    color: #111111;
    font-size: 15px;
    margin-left: 5px;
  }

  .item_middle_div_class{
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .place_div_class{
    flex: 0.1;
  }

  .item_mi_div_class{
    color: #6a6a6a;
    font-size: 13px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 10px;
    flex: 9;
  }

  .item_bottom_div_class{
    display: flex;
    flex-direction: row;
    padding-left: 10px;
    padding-right: 10px;
    align-items: center;
  }

  .left_div_class{
    display: flex;
    flex-direction: row;
    flex: 1;
    align-items: center;
  }

  .right_div_class{
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
  }

  .author_span_class{
    color: #9d9d9d;
    font-size: 12px;
  }

  .item_diver_div_class{
    height: 1px;
    background-color: #c8c7cc;
    margin-left: 10px;
    margin-top: 10px;
  }

  .bottom{
    margin-left: 5px;
  }
</style>

<script type="text/ecmascript-6">
  export default {
      name: 'item_mine_blog',
      props: {
          item: {
              type: Object,
              required: true
          }
      },
  }
</script>
