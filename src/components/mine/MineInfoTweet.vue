<template>
    <div style="background-color: white">
        <mt-header fixed style="background-color: #24cf5f">
            <mt-button v-on:click="goBack()" icon="back" slot="left">动弹列表</mt-button>
        </mt-header>
        <common_list style="margin-top: 40px" v-bind:list="list" v-bind:isComplete="isComplete" v-on:loadTop="loadTop"
                     v-on:loadBottom="loadBottom" :item-component="$options.components.item_mine_info_mine_tweet">
        </common_list>
    </div>
</template>

<style scoped>

</style>

<script type="text/ecmascript-6">
    import {Header} from 'mint-ui'
    import {mapActions, mapGetters} from 'vuex'
    import common_list from '../comment/common_list'
    import item_mine_info_mine_tweet from '../comment/item_mine_info_mine_tweet'
    export default {
        data() {
            return {
                list: [],
                isComplete: true
            }
        },
        components: {common_list, item_mine_info_mine_tweet},
        computed: {
            ...mapGetters({
                statuses: 'mine_info_mine_tweet_list',
                page: 'mine_info_mine_tweet_page'
            })
        },
        created () {
            this.getMineInfoMineTweetList(1)
        },
        watch: {
            page: {
                handler: function (val, oldVal) {
                    if (val && val.page == 1) {
                        this.list = []
                    }
                },
                deep: true
            },
            statuses: function (val, oldVal) {
                this.isComplete = true
                if (val) {
                    if (this.page == 1 || this.page == 2) {
                        this.list = val;
                    } else {
                        this.list = [...this.list, ...val]
                    }
                }
            }
        },
        methods: {
            ...mapActions([
                'getMineInfoMineTweetList'
            ]),
            loadTop() {
                this.isComplete = false
                this.getMineInfoMineTweetList(1)
            },
            loadBottom() {
                this.isComplete = false
                this.getMineInfoMineTweetList(this.page)
            },
            goBack(){
                this.$router.go(-1)
            },
        },
    }
</script>
