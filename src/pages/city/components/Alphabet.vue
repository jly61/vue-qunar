<template>
    <ul class="list">
        <li class="item" v-for="item in letters" :key="item" :ref="item" @click="handleLetterClick"
            @touchstart.prevent="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">{{item}}
        </li>
    </ul>
</template>

<script>
    export default {
        name: "Alphabet",
        props: {
            cities: Object
        },
        data() {
            return {
                touchStatus: false,
                timer: null
            }
        },
        computed: {
            letters() {
                const letters = [];
                for (let i in this.cities) {
                    if (this.cities.hasOwnProperty(i)) {
                        letters.push(i)
                    }
                }
                return letters
            }
        },
        updated() {
            this.startY = this.$refs['A'][0].offsetTop;
        },
        methods: {
            handleLetterClick(e) {
                this.$emit('change', e.target.innerText);
            },
            handleTouchStart() {
                this.touchStatus = true
            },
            handleTouchMove(e) {
                if (this.timer) {
                    clearTimeout(this.timer)
                }
                this.timer = setTimeout(() => {
                    if (this.touchStatus) {
                        const touchY = e.touches[0].clientY - 79;
                        const index = Math.floor((touchY - this.startY) / 20);
                        if (index >= 0 && index < this.letters.length) {
                            this.$emit('change', this.letters[index]);
                        }
                    }
                }, 16)

            },
            handleTouchEnd() {
                this.touchStatus = false
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~style/varibles.styl"
    .list
        display flex
        flex-direction column
        justify-content center
        position absolute
        width .4rem
        top 1.58rem
        right 0
        bottom 0

        .item
            line-height .4rem
            text-align center
            color $bgColor
</style>