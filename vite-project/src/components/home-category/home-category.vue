<template>
    <div class="home-category" @mouseleave="categoryId = null">
        <ul class="menu">
            <li v-for="item in Menulist" :key="item.id" @mouseenter="getCategoryId(item.id)">
                <RouterLink :to="`/category/${item.id}`">
                    {{ item.name }}
                    <div class="layer">
                        <h4>
                            {{ categoryId == 'brand' ? '品牌' : '分类' }}
                            推荐
                            <small>根据您的购买或浏览记录推荐</small>
                        </h4>
                        <ul class="df" v-if="categoryId != 'brand'">
                            <li v-for="i in item.goods" :key="i">
                                <RouterLink to="/">
                                    <img :src="i.picture" alt="" />
                                    <div class="info">
                                        <p class="name ellipsis-2">
                                            {{ i.name }}
                                        </p>
                                        <p class="desc ellipsis">{{ i.desc }}</p>
                                        <p class="price">
                                            <i>¥</i>
                                            {{ i.price }}
                                        </p>
                                    </div>
                                </RouterLink>
                            </li>
                        </ul>
                        <ul class="df" v-if="categoryId == 'brand' && item.brands">
                            <li class="brand" v-for="k in item.brands.slice(0, 9)" :key="k.id">
                                <RouterLink to="/">
                                    <img :src="k.picture" alt="" />

                                    <div class="info">
                                        <p class="place">
                                            <i class="iconfont icon-dingwei"></i>
                                            {{ k.place }}
                                        </p>
                                        <p class="name ellipsis">{{ k.name }}</p>
                                        <p class="desc ellipsis-2">{{ k.desc }}</p>
                                    </div>
                                </RouterLink>
                            </li>
                        </ul>
                    </div>
                </RouterLink>
                <template v-if="item.children">
                    <RouterLink
                        v-for="sub in item.children"
                        :key="sub.id"
                        :to="`/category/sub/${sub.id}`"
                    >
                        {{ sub.name }}
                    </RouterLink>
                </template>
                <span v-else class="df">
                    <n-skeleton
                        :animated="true"
                        :width="60"
                        :height="18"
                        style="margin-right: 5px"
                        size="small"
                    />
                    <n-skeleton :animated="true" :width="50" :height="18" size="small" />
                </span>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { findAllCategory } from '../../api/home.js';
const store = useStore();
const brand = reactive({
    id: 'brand',
    name: '品牌',
    children: [{ id: 'brand-chilren', name: '品牌推荐' }],
    brands: [],
});
const Menulist = computed(() => {
    const list = store.state.category.list.map(item => {
        return {
            id: item.id,
            name: item.name,
            children: item.children && item.children.slice(0, 2),
            goods: item.goods,
        };
    });
    list.push(brand);
    return list;
});
// 品牌推荐
findAllCategory().then(res => {
    brand.brands = res.result;
});
let categoryId = ref(1);
const getCategoryId = id => {
    categoryId.value = id;
};
</script>

<style lang="less" scoped>
.home-category {
    width: 250px;
    height: 500px;
    background: rgba(0, 0, 0, 0.8);
    position: relative;
    top: 0;
    left: 0;
    z-index: 1;
    .menu {
        li {
            padding-left: 40px;
            height: 50px;
            line-height: 50px;
            a {
                color: #fff;
                margin-right: 5px;
            }
            &:hover {
                background: @xtxColor;
            }
            .layer {
                width: 990px;
                height: 500px;
                background: rgba(255, 255, 255, 0.8);
                position: absolute;
                left: 250px;
                top: 0;
                display: none;
                padding: 0 15px;
                h4 {
                    font-size: 20px;
                    font-weight: normal;
                    line-height: 80px;
                    color: #333;
                    small {
                        font-size: 16px;
                        color: #666;
                    }
                }
                ul {
                    display: flex;
                    flex-wrap: wrap;
                    padding: 0;
                    li {
                        padding: 0;
                        width: 310px;
                        height: 120px;
                        margin-right: 15px;
                        margin-bottom: 15px;
                        border: 1px solid #eee;
                        border-radius: 4px;
                        background: #fff;
                        &:nth-child(3n) {
                            margin-right: 0;
                        }
                        a {
                            display: flex;
                            width: 100%;
                            height: 100%;
                            align-items: center;
                            padding: 10px;
                            margin-right: 0px;

                            &:hover {
                                background: #e3f9f4;
                            }
                            img {
                                width: 95px;
                                height: 95px;
                            }
                            .info {
                                padding-left: 10px;
                                line-height: 24px;
                                width: 190px;
                                box-sizing: border-box;
                                .name {
                                    font-size: 16px;
                                    color: #666;
                                }
                                .desc {
                                    color: #999;
                                }
                                .price {
                                    font-size: 22px;
                                    color: @priceColor;
                                    i {
                                        font-size: 16px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            &:hover {
                .layer {
                    display: block;
                }
            }
        }
    }
    li.brand {
        height: 180px;
        a {
            align-items: flex-start;
            img {
                width: 120px;
                height: 160px;
            }
            .info {
                p {
                    margin-top: 8px;
                }
                .place {
                    color: #999;
                }
            }
        }
    }
}
</style>
