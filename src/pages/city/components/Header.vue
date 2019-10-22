<template>
    <div class="header">
        城市选择
        <router-link to="/">
            <div class="iconfont back-icon">&#xe611;</div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style lang="stylus" scoped>
    @import "~style/iconfont.css"
    @import "~style/varibles.styl";
    .header
        position relative
        overflow hidden;
        height $headerHeight
        line-height $headerHeight
        font-size .32rem
        color #fff;
        text-align center;
        background $bgColor
        .back-icon
            position absolute
            top 0
            left 0
            width .64rem
            font-size .4rem
            text-align center
            color #fff

</style>