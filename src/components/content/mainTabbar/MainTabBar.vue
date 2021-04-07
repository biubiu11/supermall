<template>
  <div>
    <tab-bar>
      <tab-bar-item path='/home'>
        <img slot="item-img" src="../../../assets/img/tabbar/home.svg" alt="">
        <img slot="item-img-sel" src="../../../assets/img/tabbar/homeSel.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path='/category'>
        <img slot="item-img" src="../../../assets/img/tabbar/category.svg" alt="">
        <img slot="item-img-sel" src="../../../assets/img/tabbar/categorySel.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path='/shopcart'>
        <img slot="item-img" src="../../../assets/img/tabbar/shopcart.svg" alt="">
        <img slot="item-img-sel" src="../../../assets/img/tabbar/shopcartSel.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path='/profile'>
        <img slot="item-img" src="../../../assets/img/tabbar/profile.svg" alt="">
        <img slot="item-img-sel" src="../../../assets/img/tabbar/profileSel.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import tabbar from '../../common/tabbar/TabBar.vue'
import tabbaritem from '../../common/tabbar/TabBarItem.vue'
export default {
  name: 'MainTabBar',
  data () {
    return {
    }
  },
  components: {
    'tab-bar': tabbar,
    'tab-bar-item': tabbaritem
  }
}
</script>

<style  scoped>

</style>
