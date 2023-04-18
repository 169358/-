<script setup></script>

<template>
    <div id="app">
        <!-- 一级路由 -->
        <router-view></router-view>
    </div>
</template>

<style lang="less" scoped>
.test {
    color: @blue;
}

#app {
    background: #f5f5f5;
    user-select: none;
}
</style>
