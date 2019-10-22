<template>
    <div>
        <Swiper :showIndicator='true' class="swiper" v-if="showSwiper">
            <Slide class="swiper-slide" v-for="item in swiperList" :key="item.id">
                <img class="swiper-img" :src="item.url" :alt="item.alt">
            </Slide>
        </Swiper>
    </div>

</template>

<script>
    export default {
        name: "HomeSwiper",
        props: {
            swiperList: {
                Array
            }
        },
        data() {
            return {

            };
        },
        mounted() {

        },
        computed: {
            showSwiper() {
                return this.swiperList.length
            }
        }
    }
</script>

<style lang="stylus" scoped>
    html
        touch-action: none
    //样式穿透
    .swiper >>> .wh_indicator_item
        background rgba(0,0,0,0.5)
    .swiper >>> .wh_show_bgcolor
        background #fff!important
    .swiper
        background #eee
        .swiper-img
            width 100%

</style>