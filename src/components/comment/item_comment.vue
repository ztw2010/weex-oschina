<template>
    <div class="item_div" v-on:click.stop="itemClick(item.commentAuthorId, item.commentAuthor)">
        <div class="item_top_div">
            <md-avatar>
                <img v-lazy="item.commentPortrait" v-on:click.stop="userDetail(item.commentAuthorId)">
            </md-avatar>
            <div class="item_middle_div">
                <span class="user_name_span">{{ item.commentAuthor }}</span>
                <span class="item_pub_time">{{ item.pubDate | timeAgo }}</span>
            </div>
            <div class="item_right_div" v-on:click.stop="praise(item.id)">
                <span class="item_pub_time count">0</span>
                <img src="../../assets/ic_thumb_normal.png" class="praise_img">
            </div>
        </div>
        <div v-show="item.refers.length > 0" v-for="(reply,index) in item.refers">
            <div class="floor_div" :style="{'margin-left' : 30 - index * 5 +'px', 'position' : 'relative', 'top' : '0px'}" >
                <span class="reply_name">{{reply.refertitle}}</span>
                <span class="reply_span">{{reply.referbody}}</span>
            </div>
        </div>
        <div class="comment_div"  v-html="item.content">
        </div>
    </div>

</template>

<script>
    import { Lazyload, MessageBox, Popup } from 'mint-ui'
    export default {
        name: 'item_comment',
        props: {
            item: {
                type: Object,
                required: true
            }
        },

        data () {
            return {

            }
        },

        computed: {

        },

        methods: {
            praise(commentId, evt){
                this.$emit('praise', evt, commentId);
            },
            userDetail(userId, evt){
                this.$emit('userDetail', evt, userId);
            },
            itemClick(commentAuthorId, commentAuthorName, evt){
                this.$emit('itemClick', evt, {commentAuthorId, commentAuthorName});
            }
        }
    }
</script>

<style scoped>

    .item_div{
        width: 100%;
        background-color: white;
        display: flex;
        flex-direction: column;
        padding: 10px;
    }

    .item_top_div {
        width: 100%;
        display: flex;
        flex-direction: row;
        height: 40px;
    }

    .item_middle_div {
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        flex: 3;
    }

    .user_name_span {
        font-size: 10px;
        color: #111111;
    }

    .item_pub_time {
        color: #999999;
    }

    .praise_img {
        width: 15px;
        height: 15px;
    }

    .item_right_div {
        flex: 1;
        width: 50px;
        justify-content: flex-end;
        display: flex;
        flex-direction: row;
    }

    .count{
        margin-right: 10px;
    }

    .comment_div{
        margin-top: 5px;
        color: #000000;
        font-size: 10px;
    }

    .reply_span .reply_name{
        font-size: 10px;
        color: #666;
    }

    .floor_div{
        margin-top: 5px;
        border-left-width: 1px;
        border-left-style: solid;
        border-left-color: silver;
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: silver;
        flex: 3;
        padding-left: 5px;
        padding-bottom: 5px;
        display: flex;
        flex-direction: column;
    }

</style>
