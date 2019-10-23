<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-bottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">成都</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-bottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" v-for="hotCity in hotCities" :key="hotCity.id">
                        <div class="button">{{hotCity.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area" v-for="(alphabet, key) in cities" :key="key" :ref="key">
                <div class="title border-bottom">{{key}}</div>
                <div class="item-list" v-for="city in alphabet" :key="city.id">
                    <div class="item border-bottom">{{city.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'

    export default {
        name: "List",
        props: {
            hotCities: Array,
            cities: Object,
            letter: String
        },
        mounted() {
            this.$nextTick(() => {
                this.scroll = new BScroll(this.$refs.wrapper)
            })
        },
        watch: {
            //监听字母，滚动到指定字母处
            letter() {
                const element = this.$refs[this.letter][0];
                this.scroll.scrollToElement(element);
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~style/border.css"
    @import "~style/varibles.styl"
    .border-bottom
        &:before
            border-color #ccc

    .list
        overflow hidden
        position absolute
        top 1.58rem
        left 0
        right 0
        bottom 0

        .title
            line-height .44rem
            background #eee
            padding-left .2rem
            color #666
            font-size .26rem

        .button-list
            overflow hidden
            padding .1rem .6rem .1rem .1rem

            .button-wrapper
                float: left;
                width 33.33%

                .button
                    margin 0.1rem
                    padding .1rem 0
                    text-align center
                    border .02rem solid #ccc
                    border-radius .06rem

        .item-list
            .item
                height .76rem
                line-height .76rem
                padding-left .2rem
</style>