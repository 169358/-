<template>
    <nav class="app-topNav">
        <div class="container">
            <ul class="df">
                <li v-for="(item, index) in navList" :key="index" @click="ClickNavList(index)">
                    <i v-if="item.icon" class="iconfont" :class="item.icon"></i>
                    {{ item.name }}
                </li>
            </ul>
        </div>
    </nav>
</template>

<script setup>
// 导航列表数据源
const navList = [
    {
        name: '请先登录',
    },
    {
        name: '免费注册',
    },
    {
        name: '我的订单',
    },
    {
        name: '会员中心',
    },
    {
        name: '帮助中心',
    },
    {
        name: '关于我们',
    },
    {
        icon: 'icon-shouji',
        name: '手机版',
    },
];
// 点击导航栏跳转
function ClickNavList(index) {
    console.log(index);
}
</script>

<style lang="less" scoped>
.app-topNav {
    width: 100%;
    height: 53px;
    background: #333;
    ul {
        height: 100%;
        justify-content: flex-end;
        align-items: center;
        font-size: 14px;
        li {
            padding: 0 5px;
            transition: all 0.1s;
            color: #cdcdcd;
            display: block;
            cursor: pointer;
            .iconfont {
                line-height: 20px;
            }
        }
        li::after {
            content: '丨';
            margin-left: 5px;
            color: #666;
        }
        li:last-child::after {
            content: '';
        }
        li:hover {
            color: @xtxColor;
        }
    }
}
</style>
