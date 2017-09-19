<template>
    <div>
        <common_list class="common_list_class" v-bind:list="list" v-bind:isComplete="isComplete" v-on:loadTop="loadTop"
                     v-on:loadBottom="loadBottom" :item-component="$options.components.item_at_me">
        </common_list>
    </div>
</template>

<style scoped>
    .common_list_class {
        margin-top: 70px;
    }
</style>

<script type="text/ecmascript-6">
    import common_list from '../comment/common_list'
    import item_at_me from '../comment/item_at_me'
    import {mapActions, mapGetters} from 'vuex'
    export default {
        name: "atme",
        components: {common_list, item_at_me},
        data() {
            return {
                list: [],
                isComplete: true
            };
        },
        computed: {
            ...mapGetters({
                statuses: 'at_me_list',
                page: 'at_me_page'
            })
        },
        created () {
            this.getAtMeList(1)
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
                'getAtMeList'
            ]),
            loadTop() {
                let vue = this
                vue.isComplete = false
                this.getAtMeList(1)
            },
            loadBottom() {
                this.isComplete = false
                this.getAtMeList(this.page)
            }
        }
    }
</script>
