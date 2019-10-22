<template>
    <Swiper :showIndicator='false' class="swiper" :autoPlay="false">
        <Slide class="swiper-slide" v-for="(page, index) in pages" :key="index">
            <div class="icons">
                <div class="icon" v-for="item in page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.url" :alt="item.title">
                    </div>
                    <p class="icon-title">{{item.title}}</p>
                </div>
            </div>
        </Slide>
    </Swiper>
</template>

<script>
    export default {
        name: "HomeIcons",
        data() {
            return {
                iconList: [
                    {
                        id: '1',
                        url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                        title: '景点门票'
                    },
                    {
                        id: '2',
                        url: 'https://img1.qunarzz.com/piao/fusion/1810/50/26ffa31b56646402.png',
                        title: '成都海昌'
                    },
                    {
                        id: '3',
                        url: 'http://img1.qunarzz.com/piao/fusion/1803/97/02f5043b51b2102.png',
                        title: '情迷九寨'
                    },
                    {
                        id: '4',
                        url: 'http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png',
                        title: '川剧变脸'
                    },
                    {
                        id: '5',
                        url: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
                        title: '一日游'
                    },
                    {
                        id: '6',
                        url: 'http://img1.qunarzz.com/piao/fusion/1805/57/1e29afd06f881102.png',
                        title: '稻城亚丁'
                    },
                    {
                        id: '7',
                        url: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/338c5b924c5809e8c7b14f60a953c3e2.png',
                        title: '成都欢乐谷'
                    },
                    {
                        id: '8',
                        url: 'http://img1.qunarzz.com/piao/fusion/1803/54/35899492b1302802.png',
                        title: '熊猫基地'
                    },
                    {
                        id: '9',
                        url: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/02bbb71bd1f629c2348d0c97ef82c129.png',
                        title: '青城山'
                    },
                    {
                        id: '10',
                        url: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/f04285731d7121da1b9028e2bf431695.png',
                        title: '都江堰'
                    }
                ]
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