<template>
    <Swiper :showIndicator='false' class="swiper" :autoPlay="false">
        <Slide class="swiper-slide" v-for="(page, index) in pages" :key="index">
            <div class="icons">
                <div class="icon" v-for="item in page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl" :alt="item.title">
                    </div>
                    <p class="icon-title">{{item.desc}}</p>
                </div>
            </div>
        </Slide>
    </Swiper>
</template>

<script>
    export default {
        name: "HomeIcons",
        props: {
            iconList: {
                Array
            }
        },
        data() {
            return {

            }
        },
        mounted() {
            this.$nextTick(() => {
                console.log(this.pages);
            })
        },
        computed: {
            //轮播图分页
            pages() {
                const pages = [];
                this.iconList.forEach((item, index) => {
                    const page = Math.floor(index / 8);
                    if (!pages[page]) {
                        pages[page] = [];
                    }
                    pages[page].push(item);
                });
                return pages
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~style/varibles.styl"
    @import "~style/mixins.styl"
    .icons
        display flex
        flex-wrap wrap
        overflow hidden
        width 100%
        height 0
        padding-bottom 50%

        .icon
            position relative
            overflow hidden
            width 25%
            /*height 0*/
            padding-bottom 25%
            .icon-img
                position absolute
                top 0
                right 0
                left 0
                bottom .3rem
                box-sizing border-box
                padding .24rem
                .icon-img-content
                    display block
                    margin 0 auto
                    height 100%
            .icon-title
                position absolute
                right 0
                left 0
                bottom 0
                height .44rem
                line-height .44rem
                text-align center
                color $darkTextColor
                ellipsis()

</style>