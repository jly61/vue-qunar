<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
        <home-commend></home-commend>
        <home-weekend></home-weekend>
    </div>
</template>

<script>
    import HomeHeader from '../components/HomeHeader'
    import HomeSwiper from '../components/HomeSwiper'
    import HomeIcons from '../components/HomeIcons'
    import HomeCommend from '../components/HomeRecommend'
    import HomeWeekend from '../components/HomeWeekend'
    export default {
        name: "Home",
        components: {
            HomeHeader,
            HomeSwiper,
            HomeIcons,
            HomeCommend,
            HomeWeekend
        }
    }
</script>

<style scoped>

</style>