<template>
    <div>
        <div class="recommend-title">热销推荐</div>
        <ul>
            <li class="item" v-for="item in recommendList" :key="item.id">
                <img class="item-img" :src="item.imgUrl" alt="大熊猫">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "HomeRecommend",
        data() {
            return {
                recommendList: [
                    {
                        id: '0001',
                        imgUrl: 'http://img1.qunarzz.com/sight/p0/201309/24/977fea7b3c5cd758c8d65eac.jpg_200x200_697c3b3f.jpg',
                        title: '成都大熊猫繁育研究基地',
                        desc: '看！熊猫宝宝在向你招手呢'
                    },
                    {
                        id: '0002',
                        imgUrl: 'http://img1.qunarzz.com/sight/p0/1509/c9/212294bb9356312f91492b31ab1bab3a.water.jpg_200x200_5d5bc10d.jpg',
                        title: '成都欢乐谷',
                        desc: '超级旋转过山车刺激到让你怀疑人生'
                    },
                    {
                        id: '0003',
                        imgUrl: 'http://img1.qunarzz.com/sight/p0/1612/1d/1d9a740c1f9e0efaa3.img.jpg_200x200_63285bd9.jpg',
                        title: '成都海昌极地海洋公园',
                        desc: '蠢萌企鹅陪你嗨翻这个秋'
                    },
                    {
                        id: '0004',
                        imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/b0/b0132e78efa00572.water.jpg_200x200_3f499a59.jpg',
                        title: '青城山',
                        desc: '青城山下白素贞，洞中千年修此身'
                    },
                    {
                        id: '0005',
                        imgUrl: 'http://img1.qunarzz.com/sight/p0/1512/3a/3ab83c0358208e8d90.img.jpg_200x200_14e2fbfd.jpg',
                        title: '花水湾四季温泉谷',
                        desc: '养生复合水，医疗热矿水'
                    },
                    {
                        id: '0001',
                        imgUrl: 'http://img1.qunarzz.com/sight/p0/201309/24/977fea7b3c5cd758c8d65eac.jpg_200x200_697c3b3f.jpg',
                        title: '成都大熊猫繁育研究基地',
                        desc: '看！熊猫宝宝在向你招手呢 看！熊猫宝宝在向你招手呢看！熊猫宝宝在向你招手呢看！熊猫宝宝在向你招手呢'
                    },
                    {
                        id: '0002',
                        imgUrl: 'http://img1.qunarzz.com/sight/p0/1509/c9/212294bb9356312f91492b31ab1bab3a.water.jpg_200x200_5d5bc10d.jpg',
                        title: '成都欢乐谷',
                        desc: '超级旋转过山车刺激到让你怀疑人生'
                    },
                    {
                        id: '0003',
                        imgUrl: 'http://img1.qunarzz.com/sight/p0/1612/1d/1d9a740c1f9e0efaa3.img.jpg_200x200_63285bd9.jpg',
                        title: '成都海昌极地海洋公园',
                        desc: '蠢萌企鹅陪你嗨翻这个秋'
                    },
                    {
                        id: '0004',
                        imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/b0/b0132e78efa00572.water.jpg_200x200_3f499a59.jpg',
                        title: '青城山',
                        desc: '青城山下白素贞，洞中千年修此身'
                    },
                    {
                        id: '0005',
                        imgUrl: 'http://img1.qunarzz.com/sight/p0/1512/3a/3ab83c0358208e8d90.img.jpg_200x200_14e2fbfd.jpg',
                        title: '花水湾四季温泉谷',
                        desc: '养生复合水，医疗热矿水'
                    }
                ]
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~style/mixins.styl"
    .recommend-title
        margin-top .2rem
        text-indent .2rem
        line-height .8rem
        background #eee
        ellipsis()
    .item
        overflow hidden
        display: flex
        height 2rem
        padding .2rem
        border-bottom 1px solid #eaeaea;
        .item-img
            width 2rem
            height 2rem
        .item-info
            flex 1
            padding .1rem
            padding-left .4rem
            min-width 0
            .item-title
                line-height .54rem
                font-size .32rem
                ellipsis()
            .item-desc
                line-height .34rem
                color #ccc
                width 80%
                ellipsis()
            .item-button
                background #ff9300
                margin-top .4rem
                line-height .44rem
                padding 0 .4rem
                border-radius .06rem
                color: #fff

</style>