<template lang="html">

    <news_list v-bind:list="list" v-bind:isComplete="isComplete" v-on:loadTop="loadTop" v-on:loadBottom="loadBottom"></news_list>

</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import news_list from './comment/news_list'
    export default {
        name: "allnews",
        components: { news_list },
        data() {
            return {
                list: [],
                isComplete: true
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
                vue.isComplete = false
                this.multipleTimeline(1)
            },
            loadBottom() {
                let vue = this
                vue.isComplete = false
                var page = vue.option.page
                vue.multipleTimeline(page)
            }
        }
    }
</script>

<style lang="css">


</style>