<template>
    <div>
        <home-header :city="city"></home-header>
        <home-swiper :swiperList="swiperList"></home-swiper>
        <home-icons :iconList="iconList"></home-icons>
        <home-commend :recommendList="recommendList"></home-commend>
        <home-weekend :weekendList="weekendList"></home-weekend>
    </div>
</template>

<script>
    import axios from 'axios'
    import HomeHeader from '../components/HomeHeader'
    import HomeSwiper from '../components/HomeSwiper'
    import HomeIcons from '../components/HomeIcons'
    import HomeCommend from '../components/HomeRecommend'
    import HomeWeekend from '../components/HomeWeekend'

    export default {
        name: "Home",
        data() {
            return {
                city: '',
                swiperList: [],
                iconList: [],
                recommendList: [],
                weekendList: []
            }
        },
        components: {
            HomeHeader,
            HomeSwiper,
            HomeIcons,
            HomeCommend,
            HomeWeekend
        },
        mounted() {
            this.$nextTick(() => {
                this.getHomeInfo()
            })
        },
        methods: {
            getHomeInfo() {
                axios.get('/api/index.json').then(this.getHomeInfoSucc)
            },
            getHomeInfoSucc(res) {
                if(res.data.status === 0) {
                    const data = res.data.data;
                    this.city = data.city;
                    this.swiperList = data.swiperList;
                    this.iconList = data.iconList;
                    this.recommendList = data.recommendList;
                    this.weekendList = data.weekendList;
                    console.log(this.swiperList);
                }
            }
        }
    }
</script>

<style scoped>

</style>