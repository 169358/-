<template>
    <ul class="app-header-nav df">
        <li class="home"><RouterLink to="/">首页</RouterLink></li>
        <li
            v-for="(item, index) in list"
            :key="item.id"
            @mouseenter="show(item)"
            @mouseleave="hide(item)"
        >
            <router-link :to="`/category/${item.id}`" @click="hide(item)">
                {{ item.name }}
                <div class="layer">
                    <ul>
                        <li v-for="sub in item.children" :key="sub.id">
                            <router-link :to="`/category/sub/${sub.id}`" @click="hide(item)">
                                <img :src="sub.picture" alt="" />
                                <p>{{ sub.name }}</p>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </router-link>
        </li>
    </ul>
</template>

<script setup>
import { useStore } from 'vuex';
const store = useStore();
// 取出分类仓库的值,
const list = computed(() => {
    return store.state.category.list;
});
const show = item => {
    store.commit('category/show', item);
};
const hide = item => {
    store.commit('category/hide', item);
};
</script>

<style lang="less" scoped>
.app-header-nav {
    width: 800px;
    justify-content: space-around;
    padding-left: 35px;
    position: relative;
    z-index: 10;
    a {
        color: #333;
        line-height: 35px;
        font-size: 16px;
    }
    li {
        border-bottom: 1px solid transparent;
        &:hover {
            > a {
                color: @xtxColor;
                border-bottom: 1px solid @xtxColor;
            }
            .layer {
                height: 132px;
                opacity: 1;
            }
        }
    }
}
.layer {
    width: 1240px;
    background-color: #fff;
    position: absolute;
    left: -200px;
    top: 56px;
    height: 0;
    overflow: hidden;
    opacity: 0;
    box-shadow: 0 0 5px #ccc;
    transition: all 0.2s 0.1s;

    ul {
        display: flex;
        flex-wrap: wrap;
        padding: 0 70px;
        align-items: center;
        height: 132px;
        li {
            width: 110px;
            text-align: center;
            img {
                width: 60px;
                height: 60px;
            }
            p {
                padding-top: 10px;
            }
        }
        li:hover {
            > a {
                border: none;
            }
            > p {
                color: @xtxColor;
            }
        }
    }
}
</style>
