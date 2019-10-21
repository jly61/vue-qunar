<template>
    <div>
        <Swiper :showIndicator='true' class="swiper">
            <Slide class="swiper-slide" v-for="item in imgList" :key="item.id">
                <img class="swiper-img" :src="item.url" :alt="item.alt">
            </Slide>
        </Swiper>
    </div>

</template>

<script>
    import {Swiper, Slide} from 'vue-swiper-component'

    export default {
        name: "HomeSwiper",
        data() {
            return {
                imgList: [
                    {
                        id: 1,
                        url: require('../assets/stylus/images/swiper1.jpg'),
                        alt: '国色天香'
                    },
                    {
                        id: 2,
                        url: require('../assets/stylus/images/swiper2.jpg'),
                        alt: '百年好合'
                    },
                    {
                        id: 3,
                        url: require('../assets/stylus/images/swiper3.jpg'),
                        alt: '演唱会门票'
                    }
                ]
            };
        },
        components: {
            Swiper,
            Slide
        },
        mounted() {
            for (let i = 0; i < this.imgList; i++) {
                console.log(this.imgList[i].url)
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