<template lang="html">
    <div class="mine">
        <span>我的页面</span>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    export default {
        name: "mine"
    }
</script>

<style lang="css">
    .mine{
        width: 100%;
        height: 100%;
        background-color: yellow;
    }
</style>