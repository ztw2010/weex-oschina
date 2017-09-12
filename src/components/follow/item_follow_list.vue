<template>
  <div class="item_follow_div_class" v-on:click="gotoDetail">
    <div class="item_follow_top_div_class">
      <md-avatar>
        <img :src="item.portrait">
      </md-avatar>
      <div class="item_follow_right_div_class">
        <div class="item_follow_right_top_div_class">
          <span class="item_follow_uname_span_class">{{item.name}}</span>
          <img class="item_follow_gender_img_class" v-if="item.gender === 1" src="../../assets/userinfo_icon_male.png">
          <img class="item_follow_gender_img_class" v-if="item.gender === 2" src="../../assets/userinfo_icon_female.png">
        </div>
        <span class="item_follow_expertise_span_class">{{item.expertise}}</span>
      </div>
    </div>
    <div class="item_follow_split_div_class"></div>
  </div>
</template>

<style scoped>
  .item_follow_div_class{
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    height: 70px;
  }

  .item_follow_div_class:active{
    background-color: #ebebeb;
  }

  .item_follow_top_div_class{
    display: flex;
    flex-direction: row;
    height: 69px;
  }

  .item_follow_split_div_class{
    background-color: #c8c7cc;
    margin-left: 10px;
    height: 1px;
  }

  .item_follow_right_div_class{
    flex: 8;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    align-items: flex-start;
    justify-content: center;
  }

  .item_follow_uname_span_class{
    font-size: 13px;
    color: #0a8f08;
  }

  .item_follow_right_top_div_class{
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .item_follow_expertise_span_class{
    font-size: 11px;
    color: #9d9d9d;
  }

  .item_follow_gender_img_class{
    margin-left: 10px;
    width: 15px;
    height: 15px;
  }
</style>

<script type="text/ecmascript-6">
  export default {
      name: "item_follow_list",
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
          return {}
      },
      methods: {
          gotoDetail(){
              this.$emit('itemClick', {'userId' : this.item.userid})
          }
      }
  }
</script>
