// 提供复用逻辑的函数
import { useIntersectionObserver } from '@vueuse/core';
import { ref } from 'vue';

export const useLazyData = (target, apiFn) => {
    // console.log(target, apiFn);
    const result = ref(null);
    const { stop } = useIntersectionObserver(
        target, // 监听的目标元素
        ([{ isIntersecting }]) => {
            // 是否进入可视区
            if (isIntersecting) {
                stop(); // 停止监听
                // 调用API函数获取数据
                apiFn().then(data => {
                    result.value = data.result;
                });
            }
        },
        {
            threshold: 0.4,
        }
    );
    return result;
};
