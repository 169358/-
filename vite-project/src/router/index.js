import { createRouter, createWebHashHistory } from 'vue-router';
const Layout = () => import('@/views/Layout/Layout.vue');
const Home = () => import('@/views/home/index.vue');
const Category = () => import('@/views/category/category.vue');
const CategorySub = () => import('@/views/category/sub/sub.vue');

const routes = [
    {
        path: '/',
        component: Layout,
        children: [
            { path: '/', component: Home },
            { path: '/category/:id', component: Category },
            { path: '/category/sub/:id', component: CategorySub },
        ],
    },
];

// 创建路由实例
const router = createRouter({
    // 使用hash方式实现路由
    history: createWebHashHistory(),
    // 配置路由规则，写法和之前一样
    routes,
});

export default router;
