<template>
  <div style="background-color: white">
    <common_list style="margin-top: 0px" v-bind:list="list" v-bind:isComplete="isComplete" v-on:loadTop="loadTop"
                 v-on:loadBottom="loadBottom" :item-component="$options.components.item_mine_tweet">
    </common_list>
  </div>
</template>

<style scoped>
  
</style>

<script type="text/ecmascript-6">
    import { mapActions, mapGetters } from 'vuex'
    import common_list from '../comment/common_list'
    import item_mine_tweet from '../comment/item_mine_tweet'
    export default {
        data() {
            return {
                list: [],
                isComplete: true
            }
        },
        components: { common_list, item_mine_tweet },
        computed: {
            ...mapGetters({
                statuses: 'mine_tweet_list',
                page: 'mine_tweet_page'
            })
        },
        created () {
            this.getTweetMineTweetList(1)
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
                'getTweetMineTweetList'
            ]),
            loadTop() {
                this.isComplete = false
                this.getTweetMineTweetList(1)
            },
            loadBottom() {
                this.isComplete = false
                this.getTweetMineTweetList(this.page)
            }
        },
    }
</script>
