<template>
    <router-link to="/" class="xtx-more">
        <span>
            查看全部
            <i class="iconfont icon-xiangyoujiantou"></i>
        </span>
    </router-link>
</template>

<script setup></script>

<style lang="less" scoped>
.xtx-more {
    margin-bottom: 2px;
    span {
        font-size: 16px;
        vertical-align: middle;
        margin-right: 4px;
        color: #999;
        .iconfont {
            font-size: 12px;
        }
    }
    &:hover span {
        color: @xtxColor;
    }
}
</style>
