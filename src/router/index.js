import Vue from 'vue'
import Router from 'vue-router'

// 1.安装插件
Vue.use(Router)
const Home = () => import('views/home/Home.vue')
const Category = () => import('views/category/Category.vue')
const Cart = () => import('views/cart/Cart.vue')
const Profile = () => import('views/profile/Profile.vue')
const routes = [
  {
    //路由的默认路径
    path: '',
    redirect: '/home'//重定向
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  }
]

// 2.创建router
const router = new Router({
  routes,
  mode: 'history'
})

export default router