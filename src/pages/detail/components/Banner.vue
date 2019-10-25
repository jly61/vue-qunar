<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img"
                 src="http://img1.qunarzz.com/sight/p0/201309/24/977fea7b3c5cd758c8d65eac.jpg_600x330_0f80adad.jpg"
                 alt="">
            <div class="banner-info">
                <div class="banner-title">成都大熊猫繁育研究基地(AAAA景区)</div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe647;</span>
                    {{images.length}}
                </div>
            </div>
        </div>
        <common-gallery :images="images" v-if="showGallery" @close="handleGalleryClick"></common-gallery>
    </div>
</template>

<script>
    import CommonGallery from 'common/gallery/Gallery'
    export default {
        name: "Banner",
        data() {
            return {
                images: [
                    'http://img1.qunarzz.com/sight/p0/201309/24/977fea7b3c5cd758c8d65eac.jpg_350x240_ce406ae4.jpg',
                    'http://img1.qunarzz.com/wugc/p216/201207/16/40e62ea907230da393835fbb.jpg_350x240_a2d2012e.jpg'
                ],
                showGallery: false
            }
        },
        components: {
            CommonGallery
        },
        methods: {
            handleBannerClick() {
                this.showGallery = true
            },
            handleGalleryClick() {
                this.showGallery = false
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~style/iconfont.css"
    .banner
        position relative
        overflow hidden
        height 0
        padding-bottom 55%
        .banner-img
            width 100%
        .banner-info
            position absolute
            display flex
            left 0
            right 0
            bottom 0
            line-height .6rem
            color #fff
            background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
            .banner-title
                flex 1
                font-size .32rem
                padding 0 .2rem
            .banner-number
                height .32rem
                line-height .32rem
                margin-top .14rem
                padding 0 .4rem
                border-radius .2rem
                background rgba(0, 0, 0, .6)
                font-size .24rem
                .banner-icon
                    font-size .24rem
                    padding-right .1rem

</style>