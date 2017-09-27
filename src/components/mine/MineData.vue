<template>
  <div>
    <mt-header fixed style="background-color: #24cf5f">
      <mt-button v-on:click="goBack()" icon="back" slot="left">我的资料</mt-button>
    </mt-header>
    <div class="bottom_div_class">
      <mt-cell title="头像">
        <md-avatar style="flex: 1;margin: 0px">
          <img class="item_tweet_mine_portrait_img_class" :src="mineInfo.portrait">
        </md-avatar>
      </mt-cell>
      <div class="item_tweet_mine_split_div_class"></div>
      <mt-cell title="昵称" :value="mineInfo.name"></mt-cell>
      <div class="item_tweet_mine_split_div_class"></div>
      <mt-cell title="加入时间" :value="new Date(mineInfo.joinTime) | dateFromat('yyyy/MM/dd')"></mt-cell>
      <div class="item_tweet_mine_split_div_class"></div>
      <mt-cell title="所在地区" :value="mineInfo.city"></mt-cell>
      <div class="item_tweet_mine_split_div_class"></div>
      <mt-cell title="开放平台" :value="platforms"></mt-cell>
      <div class="item_tweet_mine_split_div_class"></div>
      <mt-cell title="专长领域" :value="expertise"></mt-cell>
      <div class="item_tweet_mine_split_div_class"></div>
    </div>
  </div>
</template>

<style scoped>
  .bottom_div_class{
    background-color: white;
    display: flex;
    flex-direction: column;
    margin-top: 60px;
    padding: 10px;
  }

  .item_tweet_mine_split_div_class {
    background-color: #c8c7cc;
    height: 1px;
    margin-left: 10px;
  }

</style>

<script type="text/ecmascript-6">
    import { mapActions, mapGetters } from 'vuex'
    import { Cell  } from 'mint-ui'
    export default {
        data() {
            return {
            }
        },
        computed: {
            ...mapGetters({
                mineInfo: 'mine_info'
            }),
            platforms: function(){
                if(this.mineInfo.platforms){
                    let platformsArray = this.mineInfo.platforms
                    return platformsArray.join(',')
                }
            },
            expertise: function(){
                if(this.mineInfo.expertise){
                    let expertiseArray = this.mineInfo.expertise
                    return expertiseArray.join(',')
                }
            }
        },
        methods: {
            goBack(){
                this.$router.go(-1)
            },
        }
    }
</script>
