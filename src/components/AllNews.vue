<template lang="html">
    <div class="page_loadmore_wrapper" ref="wrapper" >
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
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import { Loadmore,Indicator } from 'mint-ui'
    export default {
        name: "allnews",
        data() {
            return {
                list: [],
                topStatus: '',
                bottomStatus: '',
                allLoaded: false,
                autoFill: false,
            };
        },
        computed: {
            ...mapGetters({
                statuses: 'multiple_timeline',
                option: 'multiple_option'
            })
        },
        watch: {
            option: {
                handler: function (val, oldVal) {
                    if (val && val.page == 1) {
                        this.list = []
                    }
                },
                deep: true
            },
            statuses: function (val, oldVal) {
                if(this.topStatus === 'loading'){
                    this.$refs.loadmore.onTopLoaded()
                }
                if(this.bottomStatus === 'loading'){
                    this.$refs.loadmore.onBottomLoaded()
                }
                if (val) {
                    if (this.option.page == 1) {
                        this.list = val;
                    } else {
                        this.list = [...this.list, ...val]
                    }
                }
            }
        },
        created() {
            this.multipleTimeline(1)
        },
        mounted() {

        },
        methods: {
            ...mapActions([
                'getMultipleTimeline'
            ]),
            multipleTimeline(page) {
                this.getMultipleTimeline(page)
            },
            loadTop() {
                let vue = this
                this.multipleTimeline(1)
            },
            loadBottom() {
                let vue = this
                var page = vue.option.page
                vue.multipleTimeline(page)
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

    .page_loadmore_wrapper {
        overflow: scroll;
    }

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

    .mint-loadmore-top span {
        -webkit-transition: .2s linear;
        transition: .2s linear
    }
    .mint-loadmore-top span {
        display: inline-block;
        vertical-align: middle
    }

    .mint-loadmore-top span.is-rotate {
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg)
    }

    .mint-loadmore-bottom span {
        display: inline-block;
        -webkit-transition: .2s linear;
        transition: .2s linear;
        vertical-align: middle
    }

    .mint-loadmore-bottom span.is-rotate {
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg)
    }

</style>