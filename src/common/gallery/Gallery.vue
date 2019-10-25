<template>
    <div class="container" @click="handleGalleryClick">
        <div class="wrapper">
            <Swiper :autoPlay="false" :showIndicator="false" @transtionend="getNum">
                <Slide class="swiper-slide" v-for="img in images">
                    <img class="swiper-img"
                         :src="img"
                         alt="">
                </Slide>
            </Swiper>
        </div>
        <div class="page">{{currentIndex}}/{{images.length}}</div>
    </div>
</template>

<script>
    export default {
        name: "Gallery",
        props: {
            images: {
                type: Array
            }
        },
        data() {
            return {
                currentIndex: 0,
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.getNum();
            })
        },
        methods: {
            //当前图片index
            getNum(data) {
                this.currentIndex = data + 1 || 1
            },
            //点击关闭画廊
            handleGalleryClick() {
                this.$emit('close')
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .container
        display flex
        position fixed
        top 0
        left 0
        right 0
        bottom 0
        flex-direction column
        justify-content center
        background #000
        z-index 2
        .wrapper
            overflow hidden
            height 0
            width 100%
            padding-bottom 68.5%
            .swiper-img
                width 100%
        .page
            position absolute
            height .32rem
            line-height .32rem
            text-align center
            color #fff
            left 0
            right 0
            bottom .6rem



</style>