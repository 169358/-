<template>
    <div class="home-brand">
        <div class="container">
            <div class="head">
                <homePanel title="热门品牌" sub-title="国际经典 品质保证" />
            </div>
            <div class="btn">
                <i
                    @click="toggle(-1)"
                    :class="{ disabled: index === 0 }"
                    class="left iconfont icon-xiangzuojiantou"
                ></i>
                <i
                    @click="toggle(1)"
                    :class="{ disabled: index === 1 }"
                    class="right iconfont icon-xiangyoujiantou"
                ></i>
            </div>
            <div class="box" ref="target">
                <transition name="fade">
                    <ul
                        v-if="brands.value"
                        class="list"
                        :style="{ transform: `translateX(${-index * 1240}px)` }"
                    >
                        <li v-for="item in brands.value" :key="item.id">
                            <RouterLink to="/">
                                <img :src="item.picture" alt="" />
                            </RouterLink>
                        </li>
                    </ul>
                    <div class="skeleton" v-else>
                        <xtxSkeleton
                            v-for="i in 5"
                            :key="i"
                            animated
                            bg="#e4e4e4"
                            width="240px"
                            height="305px"
                            class="item"
                        ></xtxSkeleton>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script setup>
import homePanel from '../library/home-panel/home-panel.vue';
import { findBrand } from '../../api/home';
import { useLazyData } from '../../hooks/index';
import xtxSkeleton from '../library/xtx-skeleton/xtx-skeleton.vue';
const brands = ref([]);
const target = ref(null);
const result = useLazyData(target, findBrand);
brands.value = result;
// findBrand(10).then(data => {
//     console.log(data);
//     brands.value = data.result;
// });

const index = ref(0);
const toggle = step => {
    console.log(step);
    const newIndex = index.value + step;
    if (newIndex < 0 || newIndex > 1) return;
    index.value = newIndex;
};
</script>

<style lang="less" scoped>
.home-brand {
    // height: 300px;
    .head {
        padding: 40px 0;
        display: flex;
        align-items: flex-end;
    }
    .btn {
        position: absolute;
        top: 45px;
        right: 20px;
        .left,
        .right {
            width: 20px;
            height: 20px;
            background-color: @xtxColor;
            color: #fff;
            font-size: 11px;
            display: inline-block;
            text-align: center;
            margin-left: 5px;
            line-height: 20px;
            &.disabled {
                background: #ccc;
                cursor: not-allowed;
            }
        }
    }
    .box {
        display: flex;
        width: 100%;
        height: 345px;
        overflow: hidden;
        padding-bottom: 40px;
        .list {
            width: 200%;
            display: flex;
            transition: all 1s;
            li {
                margin-right: 10px;
                width: 240px;
                &:nth-child(5n) {
                    margin-right: 0;
                }
                img {
                    width: 240px;
                    height: 305px;
                }
            }
        }
    }
}
.skeleton {
    width: 100%;
    display: flex;
    .item {
        margin-right: 10px;
        &:nth-child(5n) {
            margin-right: 0;
        }
    }
}
</style>
