<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"/>
    <recommend-view :recommends="recommends"/>
    <feature-view/>
    <tab-control class="tab-control" 
                 :titles="['流行','新款','精选']"
                 @tabClick="tabClick"/>
    <goods-list :goods="showGoods"/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'

import HomeSwiper from './homecomps/HomeSwiper'
import RecommendView from './homecomps/RecommendView'
import FeatureView from './homecomps/FeatureView'

import {getHomeMultidata,getHomeGoods} from 'network/home.js'


export default {
  name: 'Home',
  data () {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0,list: []},
        'new': {page: 0,list: []},
        'sell': {page: 0,list: []}
      },
      currentIndex: 'pop'
    }
  },
  components: {
    NavBar,
    TabControl,
    GoodsList,

    HomeSwiper,
    RecommendView,
    FeatureView
  },

  created() {
    // 1.请求第一次数据
    this.getHomeMultidata(),
    //2.请求第二次数据
    this.getHomeGoods('pop'),
    this.getHomeGoods('new'),
    this.getHomeGoods('sell')
  },
  computed: {
    showGoods() {
      return this.goods[this.currentIndex].list
    }
  },
  methods: {
    //监听事件相关的方法
    tabClick(index) {
      switch(index) {
        case 0:
          this.currentIndex = 'pop'
          break
        case 1:
          this.currentIndex = 'new'
          break
        case 2:
          this.currentIndex = 'sell'
      }
    },
    //网络请求相关的方法
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res)
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type,page).then(res => {
        // console.log(res)
        for(let n of res.data.list) {
          this.goods[type].list.push(n);
        }
      })
      this.goods[type].page += 1;
    }
  }
}
</script>

<style  scoped>
  #home {
    padding-top: 44px;
  }
  .home-nav {
    color: white;
    background-color: rgb(255, 156, 172);
    z-index: 9;

    position: fixed;
    left: 0px;
    right: 0px;
    top: 0px
  }

  .tab-control {
    position: sticky;
    top: 43px;

    z-index: 9;
  }
</style>
