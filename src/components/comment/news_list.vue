<template lang="html">
    <mt-loadmore ref="loadmore" style="height: 100%" :top-method="loadTop" @top-status-change="handleTopChange"
        :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" :autoFill="autoFill">
        <div class="list" v-for="(x, index) in list">
            <pixel-content :x="x"></pixel-content>
            <div v-bind:class="index !== list.length - 1 ? 'split' : ''"></div>
        </div>
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
</template>

<script>
    import { Loadmore,Indicator } from 'mint-ui'
    export default {
        name: "news_list",
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

<style lang="css">

    .list {
        background-color: #fff;
        border-radius: 2px;
        padding: 1px;
    }

    .split{
        width: 100%;
        height: 1px;
        background-color: silver;
        margin-left: 10px;
    }

</style>