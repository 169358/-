// 分类模块
import { topCategory } from '../../api/constants';
import { findAllCategory } from '../../api/category';
export default {
    namespaced: true,
    state: () => {
        return {
            // 分类信息集合
            list: topCategory.map(item => ({ name: item })),
        };
    },
    mutations: {
        setList(state, headCategory) {
            state.list = headCategory;
        },
        show(state, item) {
            const category = state.list.find(category => category.id === item.id); // 找到要显示的分类的索引
            category.open = true;
        },
        hide(state, item) {
            const category = state.list.find(category => category.id === item.id);
            category.open = false;
        },
    },
    actions: {
        async getList({ commit }) {
            const { result } = await findAllCategory();
            result.forEach(item => {
                item.open = false;
            });
            // console.log(result);
            commit('setList', result);
        },
    },
};
