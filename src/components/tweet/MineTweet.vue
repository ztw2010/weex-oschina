<template>
  <div>
    <tweet_mine_list v-bind:list="list" v-bind:isComplete="isComplete" v-on:loadTop="loadTop" v-on:loadBottom="loadBottom"></tweet_mine_list>
  </div>
</template>

<style scoped>
  
</style>

<script type="text/ecmascript-6">
    import { mapActions, mapGetters } from 'vuex'
    import tweet_mine_list from '../comment/tweet_mine_list'
    export default {
        data() {
            return {
                list: [],
                isComplete: true
            }
        },
        components: { tweet_mine_list },
        computed: {
            ...mapGetters({
                statuses: 'mine_tweet_list',
                page: 'mine_tweet_page'
            })
        },
        created () {
            this.getMineTweetList(1)
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
                'getMineTweetList'
            ]),
            loadTop() {
            },
            loadBottom() {
            }
        },
    }
</script>
