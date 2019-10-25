<template>
    <div>
        <detail-banner :sightName="sightName" :bannerImg="bannerImg" :galleryImages="galleryImages"></detail-banner>
        <detail-header :detailTitle="detailTitle"></detail-header>
        <detail-list :list="categoryList"></detail-list>
<!--        撑开页面高度-->
        <div class="content"></div>
    </div>
</template>

<script>
    import axios from 'axios'
    import DetailBanner from './components/Banner'
    import DetailHeader from './components/Header'
    import DetailList from './components/List'
    export default {
        name: "Detail",
        components: {
            DetailBanner,
            DetailHeader,
            DetailList
        },
        data() {
            return {
                detailTitle: '',
                sightName: '',
                bannerImg: '',
                galleryImages: [],
                categoryList: []
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.getDetailInfo();
            })
        },
        methods: {
            getDetailInfo() {
                axios.get('/api/detail.json', {
                    params: {
                        id: this.$route.params.id
                    }
                }).then(this.getDetailInfoSuccess);
            },
            getDetailInfoSuccess(res) {
                if(res.data.status === 0) {
                    const data = res.data.data;
                    this.detailTitle = data.detailTitle;
                    this.sightName = data.sightName;
                    this.bannerImg = data.bannerImg;
                    this.galleryImages = data.galleryImages;
                    this.categoryList = data.categoryList;
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .content
        height 50rem
</style>