/* eslint-disable no-undef */
import DataAndMethod from './pages/DataAndMethod'
import Porps from './pages/Porps'
// import VifAndVfor from './pages/VifAndVfor'
import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
    { path: '/', component: DataAndMethod },
    { path: '/props', component: Porps },
    // { path: '/vifandvfor', component: VifAndVfor },

]

export const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})
