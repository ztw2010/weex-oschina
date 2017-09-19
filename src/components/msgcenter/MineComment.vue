<template>
    <div style="background-color: white">
        <common_list style="margin-top: 70px" v-bind:list="list" v-bind:isComplete="isComplete" v-on:loadTop="loadTop"
                     v-on:loadBottom="loadBottom" :item-component="$options.components.item_at_me">
        </common_list>
    </div>
</template>

<style scoped>

</style>

<script type="text/ecmascript-6">
    import {Header} from 'mint-ui'
    import {mapActions, mapGetters} from 'vuex'
    import common_list from '../comment/common_list'
    import item_at_me from '../comment/item_at_me'
    export default {
        data() {
            return {
                list: [],
                isComplete: true
            }
        },
        components: {common_list, item_at_me},
        computed: {
            ...mapGetters({
                statuses: 'mine_comment_list',
                page: 'mine_comment_page'
            })
        },
        created () {
            this.getMineCommentList(1)
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
                'getMineCommentList'
            ]),
            loadTop() {
                this.isComplete = false
                this.getMineCommentList(1)
            },
            loadBottom() {
                this.isComplete = false
                this.getMineCommentList(this.page)
            },
            goBack(){
                this.$router.go(-1)
            },
        },
    }
</script>
