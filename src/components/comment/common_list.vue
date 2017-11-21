<template>
  <div>
    <mt-loadmore ref="loadmore" style="height: 100%" :top-method="loadTop" @top-status-change="handleTopChange"
                 :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" :autoFill="autoFill">
      <div slot="top" class="mint-loadmore-top">
        <span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">↓</span>
        <span v-show="topStatus === 'loading'">
                <mt-spinner type="snake"></mt-spinner>
            </span>
      </div>
        <div class="list" v-for="(item, index) in list">
            <component :is="itemComponent" :item="item"></component>
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
    export default {
        name: 'common_list',
        props: {
            list: {
                type: Array,
                required: true
            },
            isComplete: {
                type: Boolean,
                required: true
            },
            itemComponent: {
                required: true
            }
        },
        data() {
            return {
                topStatus: '',
                bottomStatus: '',
                allLoaded: false,
                autoFill: false,
            }
        },
        watch: {
            isComplete: function (val, oldVal){
                if(val){
                    if(this.topStatus === 'loading'){
                        this.$refs.loadmore.onTopLoaded()
                    }
                    if(this.bottomStatus === 'loading'){
                        this.$refs.loadmore.onBottomLoaded()
                    }
                }
            }
        },
        methods: {
            loadTop(evt) {
                this.$emit('loadTop', evt);
            },
            loadBottom(evt) {
                this.$emit('loadBottom', evt);
            },
            handleTopChange(status) {
                this.topStatus = status
            },
            handleBottomChange(status) {
                this.bottomStatus = status;
            },
        }
    }
</script>
