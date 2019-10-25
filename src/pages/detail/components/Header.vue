<template>
    <div class="header">
        <router-link to="/" class="header-abs" v-show="showAbs">
            <div class="iconfont back-icon">&#xe611;</div>
        </router-link>
        <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
            <router-link tag="div" to="/" class="header-left" >
                <div class="iconfont back-icon">&#xe611;</div>
            </router-link>
            成都大熊猫繁育研究基地
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                showAbs: true,
                opacityStyle: {
                    opacity: 0
                }
            }
        },
        activated() {
            window.addEventListener('scroll', this.handleScroll);
        },
        deactivated() {
            window.removeEventListener('scroll', this.handleScroll);
        },
        methods: {
            handleScroll() {
                const top = document.documentElement.scrollTop;
                if(top > 60) {
                    let opacity = top / 140;
                    opacity = opacity > 1 ? 1 : opacity;
                    this.opacityStyle = {
                        opacity
                    };
                    this.showAbs = false
                } else {
                    this.showAbs = true
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~style/iconfont.css"
    @import "~style/varibles.styl"
    .header-abs
        position absolute
        left .2rem
        top .2rem
        width 0.8rem
        height .8rem
        line-height .8rem
        border-radius .4rem
        text-align center
        background rgba(0, 0, 0, .6)
        .back-icon
            font-size .4rem
            color #fff
    .header-fixed
        position fixed
        top 0
        left 0
        right 0
        height $headerHeight
        line-height $headerHeight
        background $bgColor
        color: #fff
        text-align center
        font-size .32rem
        .header-left
            position absolute
            width .64rem
            float left
            text-align center
            .back-icon
                text-align center
                font-size .4rem
</style>