<template>
  <div style="background-color: white">
    <mt-header fixed style="background-color: #24cf5f">
      <mt-button v-on:click="goBack()" icon="back" slot="left">用户博客列表</mt-button>
    </mt-header>
    <common_list style="margin-top: 50px" v-bind:list="list" v-bind:isComplete="isComplete" v-on:loadTop="loadTop"
                 v-on:loadBottom="loadBottom" :item-component="$options.components.item_mine_blog">
    </common_list>
  </div>
</template>

<style scoped>
  
</style>

<script type="text/ecmascript-6">
    import { mapActions, mapGetters } from 'vuex'
    import common_list from '../comment/common_list'
    import item_mine_blog from '../comment/item_mine_blog'
    export default {
        data() {
            return {
                list: [],
                isComplete: true
            }
        },
        components: { common_list, item_mine_blog },
        computed: {
            ...mapGetters({
                statuses: 'mine_blog_list',
                page: 'mine_blog_page'
            })
        },
        created () {
            this.getMineBlogList(1)
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
                'getMineBlogList'
            ]),
            loadTop() {
                this.isComplete = false
                this.getMineBlogList(1)
            },
            loadBottom() {
                this.isComplete = false
                this.getMineBlogList(this.page)
            },
            goBack(){
                this.$router.go(-1)
            },
        },
    }
</script>
