<template>
    <div class="home-product">
        <div class="container" v-for="(item, index) in goodsList" :key="index">
            <div class="head df">
                <h3>{{ item.name }}</h3>
                <div class="right df">
                    <div class="product-list">
                        <router-link
                            to="/"
                            v-for="(child, index) in item.children.slice(0, 4)"
                            :key="child.id"
                        >
                            {{ child.name }}
                        </router-link>
                    </div>
                </div>
                <xtxMore></xtxMore>
            </div>
            <div class="box">
                <RouterLink class="cover" to="/">
                    <img :src="item.picture" alt="" />
                    <strong class="label">
                        <span>{{ item.name }}馆</span>
                        <span class="ellipsis">{{ item.saleInfo }}</span>
                    </strong>
                </RouterLink>
                <ul class="goods-list">
                    <li v-for="i in item.goods" :key="i">
                        <HomeGoods :data="i" />
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { findGoods } from '../../../api/home.js';
// import xtxMore from '../library/xtx-more/xtx-more.vue';
const goodsList = ref([]);
findGoods().then(res => {
    // console.log(res.result);
    goodsList.value = res.result;
});
</script>

<style lang="less" scoped>
.home-product {
    background: #fff;
    .head {
        padding: 40px 0;
        align-items: flex-end;
        h3 {
            font-size: 32px;
            font-weight: 400;
            flex: 1;
            margin-left: 10px;
        }
        .right {
            align-items: center;
            margin-bottom: 2px;
            width: 432px;

            .product-list {
                a {
                    padding: 2px 12px;
                    font-size: 16px;
                    border-radius: 4px;
                    &:hover {
                        background: @xtxColor;
                        color: #fff;
                    }
                }
            }
        }
    }
    .box {
        display: flex;
        .cover {
            width: 240px;
            height: 610px;
            margin-right: 10px;
            position: relative;
            img {
                width: 100%;
                height: 100%;
            }
            .label {
                width: 188px;
                height: 66px;
                display: flex;
                font-size: 18px;
                color: #fff;
                line-height: 66px;
                font-weight: normal;
                position: absolute;
                left: 0;
                top: 50%;
                transform: translate3d(0, -50%, 0);
                span {
                    text-align: center;
                    &:first-child {
                        width: 76px;
                        background: rgba(0, 0, 0, 0.9);
                    }
                    &:last-child {
                        flex: 1;
                        background: rgba(0, 0, 0, 0.7);
                    }
                }
            }
        }
        .goods-list {
            width: 990px;
            display: flex;
            flex-wrap: wrap;
            li {
                width: 240px;
                height: 300px;
                margin-right: 10px;
                margin-bottom: 10px;
                &:nth-last-child(-n + 4) {
                    margin-bottom: 0;
                }
                &:nth-child(4n) {
                    margin-right: 0;
                }
            }
        }
    }
}
</style>
