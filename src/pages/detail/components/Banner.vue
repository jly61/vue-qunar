<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img"
                 :src="bannerImg"
                 alt="">
            <div class="banner-info">
                <div class="banner-title">{{sightName}}</div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe647;</span>
                    {{galleryImages.length}}
                </div>
            </div>
        </div>
        <common-gallery :images="galleryImages" v-if="showGallery" @close="handleGalleryClick"></common-gallery>
    </div>
</template>

<script>
    import CommonGallery from 'common/gallery/Gallery'
    export default {
        name: "Banner",
        props: {
            sightName: String,
            bannerImg: String,
            galleryImages: Array
        },
        data() {
            return {
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