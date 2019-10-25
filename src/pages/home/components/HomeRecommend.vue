<template>
    <div>
        <div class="recommend-title">热销推荐</div>
        <ul>
            <router-link tag="li" :to="'/detail/'+item.id" class="item" v-for="item in recommendList" :key="item.id">
                <img class="item-img" :src="item.imgUrl" alt="大熊猫">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "HomeRecommend",
        props: {
            recommendList: {
                Array
            }
        },
        data() {
            return {

            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~style/mixins.styl"
    .recommend-title
        margin-top .2rem
        text-indent .2rem
        line-height .8rem
        background #eee
        ellipsis()
    .item
        overflow hidden
        display: flex
        height 2rem
        padding .2rem
        border-bottom 1px solid #eaeaea;
        .item-img
            width 2rem
            height 2rem
        .item-info
            flex 1
            padding .1rem
            padding-left .4rem
            min-width 0
            .item-title
                line-height .54rem
                font-size .32rem
                ellipsis()
            .item-desc
                line-height .34rem
                color #ccc
                width 80%
                ellipsis()
            .item-button
                background #ff9300
                margin-top .4rem
                line-height .44rem
                padding 0 .4rem
                border-radius .06rem
                color: #fff

</style>