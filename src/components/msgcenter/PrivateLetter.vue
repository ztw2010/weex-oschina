<template>
    <div>
        <common_list class="common_list_class" v-bind:list="list" v-bind:isComplete="isComplete" v-on:loadTop="loadTop"
                     v-on:loadBottom="loadBottom" :item-component="$options.components.item_private_letter">
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
    import item_private_letter from '../comment/item_private_letter'
    import {mapActions, mapGetters} from 'vuex'
    export default {
        name: "privateletter",
        components: {common_list, item_private_letter},
        data() {
            return {
                list: [],
                isComplete: true
            };
        },
        computed: {
            ...mapGetters({
                statuses: 'private_letter_list',
                page: 'private_letter_page'
            })
        },
        created () {
            this.getPrivateLetterList(1)
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
                'getPrivateLetterList'
            ]),
            loadTop() {
                let vue = this
                vue.isComplete = false
                this.getPrivateLetterList(1)
            },
            loadBottom() {
                this.isComplete = false
                this.getPrivateLetterList(this.page)
            }
        }
    }
</script>
