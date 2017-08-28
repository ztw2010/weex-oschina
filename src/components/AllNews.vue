<template lang="html">
    <div class="allnews">
        <div class="list"  v-for="(x, index) in list">
            <pixel-content :x="x"></pixel-content>
            <div v-bind:class="index !== list.length - 1 ? 'split' : ''"></div>
        </div>
        <div class="refresh-footer" v-if="option.refresh">
            <pixel-spinner :size="'45px'" :color="'#007AFF'"></pixel-spinner>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    export default {
        name: "allnews",
        data() {
            return {
                list: []
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
        activated() {
            window.addEventListener('scroll', this.scrollBar)
        },
        deactivated() {
            window.removeEventListener('scroll', this.scrollBar)
        },
        methods: {
            ...mapActions([
                'getMultipleTimeline'
            ]),
            multipleTimeline(page) {
                this.getMultipleTimeline(page)
            },
            loadMore() {
                let vue = this
                vue.option.refresh = true
                var page = vue.option.page + 1
                vue.multipleTimeline(page)
            },
            scrollBar() {
                var vue = this
                var a = document.documentElement.scrollTop == 0 ? document.body.clientHeight : document.documentElement.clientHeight;
                var b = document.documentElement.scrollTop == 0 ? document.body.scrollTop : document.documentElement.scrollTop;
                var c = document.documentElement.scrollTop == 0 ? document.body.scrollHeight : document.documentElement.scrollHeight;
                if (a + b == c && !this.showImage) {
                    this.loadMore()
                }
            }
        }
    }
</script>

<style lang="css">

    .allnews{
        width: 100%;
        height: 100%;
    }

    .list {
        background-color: #fff;
        border-radius: 2px;
        padding: 1px;
    }

    .refresh-footer {
        margin-bottom: 8px;
        margin-top: 8px;
        text-align: center;
    }

    .split{
        width: 100%;
        height: 1px;
        background-color: silver;
        margin-left: 10px;
    }

</style>