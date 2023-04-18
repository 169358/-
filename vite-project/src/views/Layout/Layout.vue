<script setup>
//  导航栏组件
import appTopNav from '../../components/app-topnav/app-topnav.vue';
// 头部组件
import appHeader from '../../components/app-header/app-header.vue';
// 底部组件
import appFooter from '../../components/app-footer/app-footer.vue';
</script>
<template>
    <!-- 导航栏组件 -->
    <appTopNav></appTopNav>
    <!-- 头部组件 -->
    <appHeader></appHeader>
    <main>
        <!-- 二级路由 -->
        <router-view></router-view>
    </main>
    <appFooter></appFooter>
</template>
<style lang="less" scoped></style>
