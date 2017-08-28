<template lang="html">
    <div class="discovery">
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
        name: "softupdate",
        data() {
            return {
                list: []
            };
        },
        computed: {
            ...mapGetters({
                statuses: 'multiple_softupdatenews_statuses',
                option: 'multiple_softupdatenews_option'
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
            this.softUpdateNews(1)
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
                'getSoftUpdateNews'
            ]),
            softUpdateNews(page) {
                this.getSoftUpdateNews(page)
            },
            loadMore() {
                let vue = this
                vue.option.refresh = true
                var page = vue.option.page + 1
                vue.softUpdateNews(page)
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
    .discovery{
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