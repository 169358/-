<template>
    <div class="home-hot">
        <div class="container">
            <div class="head">
                <homePanel title="人气推荐" sub-title="人气爆款 不容错过" />
            </div>
            <div ref="box" style="position: relative; height: 406px">
                <transition name="fade">
                    <ul v-if="goodsList.value" ref="pannel" class="goods-list">
                        <li v-for="item in goodsList.value" :key="item.id">
                            <RouterLink to="/">
                                <img :src="item.picture" alt="" />
                                <p class="name">{{ item.title }}</p>
                                <p class="desc">{{ item.alt }}</p>
                            </RouterLink>
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
import { findHot } from '../../api/home';
import homeSkeleton from '../home-skeleton/home-skeleton.vue';
import { useLazyData } from '../../hooks/index';
const goodsList = ref([]);
const box = ref(null);
const result = useLazyData(box, findHot);
goodsList.value = result;
</script>

<style lang="less" scoped>
.home-hot {
    background: #fff;
    width: 100%;

    .head {
        padding: 40px 0;
        display: flex;
        align-items: flex-end;
    }

    .goods-list {
        display: flex;
        justify-content: space-between;
        height: 426px;
        li {
            width: 306px;
            height: 406px;
            .hoverShadow();
            img {
                width: 306px;
                height: 306px;
            }
            p {
                font-size: 22px;
                padding-top: 12px;
                text-align: center;
            }
            .desc {
                color: #999;
                font-size: 18px;
            }
        }
    }
}
</style>
