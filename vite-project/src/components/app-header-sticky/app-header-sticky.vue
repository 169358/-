<template>
    <div class="app-header-sticky" :class="{ show: y >= 78 }">
        <div class="container" v-show="y >= 78">
            <RouterLink class="logo" to="/" />
            <AppHeaderNav></AppHeaderNav>
            <div class="right">
                <RouterLink to="/">品牌</RouterLink>
                <RouterLink to="/">专题</RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import AppHeaderNav from '../app-header-nav/app-header-nav.vue';
import { useWindowScroll } from '@vueuse/core';
const { y } = useWindowScroll();
</script>

<style lang="less" scoped>
.app-header-sticky {
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 20;
    background-color: #fff;
    border-bottom: 1px solid #e4e4e4;
    .container {
        display: flex;
        align-items: center;
    }
    .logo {
        width: 200px;
        height: 80px;
        background: url(../../assets/img/logo.0940ebb5.png) no-repeat right 2px;
        background-size: 160px auto;
    }
    .right {
        width: 220px;
        display: flex;
        text-align: center;
        padding-left: 40px;
        border-left: 2px solid @xtxColor;
        a {
            width: 38px;
            margin-right: 40px;
            font-size: 16px;
            line-height: 1;
            color: #333;
            &:hover {
                color: @xtxColor;
            }
        }
    }
}
</style>
