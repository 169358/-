<template>
    <div class="page-home">
        <div class="container">
            <!-- 侧边 -->
            <homeCategory></homeCategory>
            <!-- 轮播图 -->
            <homeBanner></homeBanner>
            <!-- 新鲜 -->
        </div>
        <!-- 新鲜好物 -->
        <homeNew></homeNew>
        <!-- 人气推荐 -->
        <homeHot />
        <!-- 热门品牌 -->
        <homeBrand />
        <!-- 家用产品 -->
        <homeProduct />
    </div>
</template>

<script setup>
import homeCategory from '../../components/home-category/home-category.vue';
import homeBanner from '../../components/library/home-banner/home-banner.vue';
import homeNew from '../../components/home-new/home-new.vue';
import homeHot from '../../components/home-hot/home-hot.vue';
import homeBrand from '../../components/home-brand/home-brand.vue';
import homeProduct from '../../components/home-product/home-product.vue';
</script>

<style lang="less" scoped></style>
