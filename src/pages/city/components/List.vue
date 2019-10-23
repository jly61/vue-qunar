<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-bottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{this.currentCity}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-bottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" v-for="hotCity in hotCities" :key="hotCity.id">
                        <div class="button" @click="handleCityClick(hotCity.name)">{{hotCity.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area" v-for="(alphabet, key) in cities" :key="key" :ref="key">
                <div class="title border-bottom">{{key}}</div>
                <div class="item-list" v-for="city in alphabet" :key="city.id">
                    <div class="item border-bottom" @click="handleCityClick(city.name)">{{city.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import {mapState, mapActions} from 'vuex'

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
        computed: {
            ...mapState({
                currentCity: 'city'
            })
        },
        watch: {
            //监听字母，滚动到指定字母处
            letter() {
                if(this.letter) {
                    const element = this.$refs[this.letter][0];
                    this.scroll.scrollToElement(element);
                }
            }
        },
        methods: {
            //同步修改
            // handleCityClick(city) {
            //     this.$store.commit('changeCity', city)
            // }
            //异步修改
            handleCityClick(city) {
                this.actionChangeCity(city);
                this.$router.push({
                    path: '/'
                })
            },
            ...mapActions(['actionChangeCity'])
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