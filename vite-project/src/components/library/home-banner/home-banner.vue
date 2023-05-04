<template>
    <div class="home-banner" @mouseenter="MouseFun('移入')" @mouseleave="MouseFun('移出')">
        <img
            :class="['imgCss', ShowImg == index ? 'ShowCss' : '']"
            v-for="(item, index) in imgList"
            :key="index"
            :src="item.imgUrl"
            alt=""
        />

        <!-- 左箭头 -->
        <div class="leftBtn" @click="throttle(PrevFun)">
            <i class="iconfont icon-xiangzuojiantou"></i>
        </div>
        <!-- 右箭头 -->
        <div class="rightBtn" @click="throttle(NextFun)">
            <i class="iconfont icon-xiangyoujiantou"></i>
        </div>
        <!-- 指示灯 -->
        <div class="instBox">
            <div
                v-for="(item, index) in imgList.length"
                :key="index"
                @click="ShowImg = index"
                :class="['inst', ShowImg == index ? 'instActv' : '']"
            ></div>
        </div>
    </div>
</template>

<script setup>
import { findBanner } from '../../../api/home';
const imgList = ref([]);
onMounted(() => {
    findBanner().then(res => {
        // console.log(res.result);
        imgList.value = res.result;
    });
    time();
});
// 当前显示的图片
let ShowImg = ref(0);
let flag = ref(true);
var start;
const time = () => {
    start = setInterval(() => {
        NextFun();
    }, 3000);
};
// 下一张
const NextFun = () => {
    if (ShowImg.value !== imgList.value.length - 1) {
        ShowImg.value++;
    } else {
        ShowImg.value = 0;
    }
};
// 上一张
const PrevFun = () => {
    if (ShowImg.value !== 0) {
        ShowImg.value--;
    } else {
        ShowImg.value = imgList.value.length - 1;
    }
};
// 点击切换图片
const throttle = fun => {
    if (flag) {
        flag = false;
        fun();
        setTimeout(() => {
            flag = true;
        }, 500);
    }
};
const MouseFun = type => {
    type == '移入' ? clearTimeout(start) : time();
};
</script>

<style lang="less" scoped>
.home-banner {
    overflow: hidden;
    width: 1240px;
    height: 500px;
    position: absolute;
    top: 0;
    left: 0;
    .imgCss {
        position: absolute;
        left: 0px;
        top: 0px;
        opacity: 0;
        transition: 0.8s; /* 淡入淡出过渡时间 */
    }
    .ShowCss {
        opacity: 1;
    }
    .leftBtn,
    .rightBtn {
        position: absolute;
        top: 50%;
        opacity: 0;
        transition: opacity 0.5s;
        width: 50px;
        height: 50px;
        line-height: 50px;
        border-radius: 50%;
        text-align: center;
        background: rgba(0, 0, 0, 0.2);
        .iconfont {
            font-size: 18px;
            color: #fff;
        }
    }
    .leftBtn {
        left: 22%;
    }
    .rightBtn {
        right: 2%;
    }
    &:hover .leftBtn,
    &:hover .rightBtn {
        opacity: 1;
    }
    .instBox {
        position: absolute;
        left: 50%;
        bottom: 10px;
        display: flex;
    }
    /* 小圆点 */
    .inst {
        width: 12px;
        height: 12px;
        margin-right: 8px;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 50%;
        cursor: pointer;
    }
    .inst:last-child {
        margin-right: 0px;
    }
    .instActv {
        background: #fff;
    }
}
</style>
