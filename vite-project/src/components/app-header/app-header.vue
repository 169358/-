<template>
    <div class="app-header">
        <div class="container df">
            <div class="logo"></div>
            <!-- 头部导航组件 -->
            <appHeaderNav></appHeaderNav>
            <!-- <appHeaderSticky></appHeaderSticky> -->
            <div class="search df">
                <n-input class="myInput" type="text" placeholder="搜索一下吧!" clearable>
                    <template #prefix>
                        <i class="iconfont icon-sousuoxiao"></i>
                    </template>
                </n-input>
            </div>
            <div class="cart">
                <n-badge value="1" :max="15">
                    <i class="iconfont icon-gouwuchekong"></i>
                </n-badge>
            </div>
        </div>
    </div>
</template>

<script setup>
import appHeaderNav from '../app-header-nav/app-header-nav.vue';
import appHeaderSticky from '../app-header-sticky/app-header-sticky.vue';
</script>

<style lang="less" scoped>
.app-header {
    background: #fff;
    .logo {
        width: 200px;
        height: 132px;
        background: url('../../assets/img/logo.0940ebb5.png') no-repeat center 18px / contain;
    }

    .search {
        width: 200px;
        .myInput {
            width: 200px !important;
            border: none !important;
        }
    }
    .cart {
        margin-left: 15px;
        .icon-gouwuchekong {
            font-size: 25px;
            color: #333;
        }
    }
}
</style>
