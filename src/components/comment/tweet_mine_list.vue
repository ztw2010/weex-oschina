<template>
  <div>
    <mt-loadmore ref="loadmore" style="height: 100%;margin-top: 50px" :top-method="loadTop" @top-status-change="handleTopChange"
                 :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" :autoFill="autoFill">
      <item_tweet_mine_list v-for="(item, index) in list" :key="item.objectId" :item="item" :isLast="index === list.length - 1" v-on:itemClick="gotoDetail">
      </item_tweet_mine_list>
      <div slot="top" class="mint-loadmore-top">
        <span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">↓</span>
        <span v-show="topStatus === 'loading'">
           <mt-spinner type="snake"></mt-spinner>
        </span>
      </div>
      <div slot="bottom" class="mint-loadmore-bottom">
        <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
        <span v-show="bottomStatus === 'loading'">
          <mt-spinner type="snake"></mt-spinner>
        </span>
      </div>
    </mt-loadmore>
  </div>
</template>

<style scoped>
  
</style>

<script type="text/ecmascript-6">
    import { Loadmore,Indicator } from 'mint-ui'
    import item_tweet_mine_list from '../comment/item_tweet_mine_list'
    export default {
        name: "tweet_mine_list",
        components: { item_tweet_mine_list },
        data() {
            return {
                topStatus: '',
                bottomStatus: '',
                allLoaded: false,
                autoFill: false,
            };
        },
        props: {
            list: {
                type: Array,
                required: true
            },
            isComplete: {
                type: Boolean,
                required: true
            }
        },
        methods: {
            loadTop(evt) {
            },
            loadBottom(evt) {
            },
            handleTopChange(status) {
                this.topStatus = status
            },
            handleBottomChange(status) {
                this.bottomStatus = status;
            },
            gotoDetail(){

            }
        }
    }
</script>
