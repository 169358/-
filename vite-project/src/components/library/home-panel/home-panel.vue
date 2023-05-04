<template>
    <h3>
        {{ props.title }}
        <small>{{ props.subTitle }}</small>
    </h3>
</template>

<script setup>
const props = defineProps({
    title: String,
    subTitle: String,
});
</script>

<style lang="less" scoped>
h3 {
    flex: 1;
    font-size: 32px;
    font-weight: 400;
    margin-left: 6px;
    height: 35px;
    line-height: 35px;
    small {
        font-size: 16px;
        color: #999;
        margin-left: 20px;
    }
}
</style>
