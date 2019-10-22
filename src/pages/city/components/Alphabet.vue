<template>
    <ul class="list">
        <li class="item" v-for="(city, key) of cities" :key="key">{{key}}</li>
    </ul>
</template>

<script>
    export default {
        name: "Alphabet",
        props: {
            cities: Object
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~style/varibles.styl"
    .list
        display flex
        flex-direction column
        justify-content center
        position absolute
        width .4rem
        top 1.58rem
        right 0
        bottom 0
        .item
            line-height .4rem
            text-align center
            color $bgColor
</style>