<template lang="html">
    <news_list v-bind:list="list" v-bind:isComplete="isComplete" v-on:loadTop="loadTop" v-on:loadBottom="loadBottom"></news_list>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import news_list from './comment/news_list'
    export default {
        name: "multinews",
        components: { news_list },
        data() {
            return {
                list: [],
                isComplete: true
            };
        },
        computed: {
            ...mapGetters({
                statuses: 'multiple_multiplenews_statuses',
                option: 'multiple_multiplenews_option'
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
                this.isComplete = true
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
            this.multipleNews(1)
        },
        mounted() {

        },
        methods: {
            ...mapActions([
                'getMultipleMultipleNews'
            ]),
            multipleNews(page) {
                this.getMultipleMultipleNews(page)
            },
            loadTop() {
                let vue = this
                vue.isComplete = false
                this.getMultipleMultipleNews(1)
            },
            loadBottom() {
                let vue = this
                vue.isComplete = false
                var page = vue.option.page
                vue.getMultipleMultipleNews(page)
            }
        }
    }
</script>

<style lang="css">


</style>