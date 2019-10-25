<template>
    <div>
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <detail-list :list="list"></detail-list>
<!--        撑开页面高度-->
        <div class="content"></div>
    </div>
</template>

<script>
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
                list: [
                    {
                        title: '成人票',
                        children: [
                            {
                                title: '熊猫基地',
                                children: [
                                    {
                                        title: '手机智能讲解',
                                    },
                                    {
                                        title: '人工讲解',
                                    }
                                ]
                            },
                            {
                                title: '熊猫基地+都江堰'
                            },
                            {
                                title: '熊猫基地+都江堰+青城山'
                            },

                        ]
                    },
                    {
                        title: '学生票'
                    },
                    {
                        title: '儿童票'
                    },
                    {
                        title: '特惠票'
                    },
                ]
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .content
        height 50rem
</style>