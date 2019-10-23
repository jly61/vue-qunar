<template>
    <div>
        <div class="search">
            <label>
                <input type="text" v-model="keyword" class="search-input" placeholder="请输入城市名或拼音">
            </label>
        </div>
        <div class="search-content" ref="search" v-if="keyword">
            <ul>
                <li class="search-item border-bottom" v-for="item in list" :key="item.id"
                    @click="handleCityClick(item.name)"
                >{{item.name}}
                </li>
                <li class="search-item border-bottom" v-if="isShow">没有找到匹配数据</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import {mapActions} from 'vuex'

    export default {
        name: "Search",
        props: {
            cities: Object
        },
        data() {
            return {
                keyword: '',
                timer: null,
                list: []
            }
        },
        computed: {
            isShow() {
                return !this.list.length
            }
        },
        watch: {
            keyword() {
                if (this.timer) {
                    clearTimeout(this.timer)
                }
                if (this.keyword === '') {
                    this.list = [];
                    return;
                }
                this.timer = setTimeout(() => {
                    const searchResult = [];
                    for (let i in this.cities) {
                        if (this.cities.hasOwnProperty(i)) {
                            this.cities[i].forEach(item => {
                                if (item.spell.indexOf(this.keyword) > -1 || item.name.indexOf(this.keyword) > -1) {
                                    searchResult.push(item);
                                }
                            })
                        }
                    }
                    this.list = searchResult;
                }, 100)
            }
        },
        mounted() {
            this.$nextTick(() => {
                if (this.$refs.search) {
                    this.scroll = new BScroll(this.$refs.search)
                }
            })
        },
        methods: {
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
    @import "~style/varibles.styl";
    @import "`style/border.css"
    .search
        background $bgColor
        height .72rem
        padding 0 .2rem

        .search-input
            box-sizing border-box
            width 100%
            height .62rem
            line-height .62rem
            text-align center
            border-radius .06rem
            color #616161
            padding 0 0.1rem

    .search-content
        overflow hidden
        position absolute
        top 1.58rem
        left 0
        right 0
        bottom 0
        z-index 2
        background #eee

        .search-item
            line-height .62rem
            padding-left .2em
            color #666
            background #fff

</style>