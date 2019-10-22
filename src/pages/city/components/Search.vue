<template>
    <div class="search">
        <label>
            <input type="text" class="search-input" placeholder="请输入城市名或拼音">
        </label>
    </div>
</template>

<script>
    export default {
        name: "Search"
    }
</script>

<style lang="stylus" scoped>
    @import "~style/varibles.styl";
    .search
        background $bgColor
        height .72rem
        padding 0 .2rem
        .search-input
            box-sizing border-box
            width 100%
            height .62rem
            line-height .62rem
            text-align center
            border-radius .06rem
            color #616161
            padding 0 0.1rem

</style>