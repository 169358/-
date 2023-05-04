<template>
    <div class="home-more">
        <div class="container">
            <div class="head">
                <homePanel title="新鲜好物" sub-title="新鲜出炉 品质靠谱"></homePanel>
                <xtxMore></xtxMore>
            </div>
            <div ref="box" style="position: relative; height: 406px">
                <transition name="fade">
                    <ul v-if="goodsList.value" class="goods-list df">
                        <li v-for="(item, index) in goodsList.value" :key="index">
                            <router-link to="/">
                                <img :src="item.picture" alt="" />
                                <p class="name ellipsis">{{ item.name }}</p>
                                <p class="price">{{ item.price }}</p>
                            </router-link>
                        </li>
                    </ul>
                    <homeSkeleton v-else />
                </transition>
            </div>
        </div>
    </div>
</template>

<script setup>
import homePanel from '../library/home-panel/home-panel.vue';
import xtxMore from '../library/xtx-more/xtx-more.vue';
import homeSkeleton from '../home-skeleton/home-skeleton.vue';
import { findNew } from '../../api/home';
import { useLazyData } from '../../hooks/index.js';
var goodsList = ref([]);
const box = ref(null);
const result = useLazyData(box, findNew);
goodsList.value = result;
</script>

<style lang="less" scoped>
.home-more {
    background-color: #fff;
    // height: 300px;
    width: 100%;
    .head {
        padding: 40px 0;
        display: flex;
        align-items: flex-end;
    }
    .goods-list {
        justify-content: space-between;
        li {
            width: 306px;
            height: 406px;
            text-align: center;
            background: #f0f9f4;
            transition: all 0.5s;
            a {
                box-sizing: border-box;
                img {
                    width: 306px;
                    height: 306px;
                }
                p {
                    width: 306px;
                    font-size: 22px;
                    padding: 12px 30px 0 30px;
                }
                .price {
                    color: #cf4444;
                }
            }
            .hoverShadow();
        }
    }
}
</style>
