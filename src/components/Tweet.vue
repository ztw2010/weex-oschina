<template lang="html">
    <div class="tweet">
        <span>动弹页面</span>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    export default {
        name: "tweet"
    }
</script>

<style lang="css">
    .tweet{
        width: 100%;
        height: 100%;
        background-color: #24cf5f;
    }
</style>