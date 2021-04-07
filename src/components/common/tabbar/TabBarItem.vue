<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isSel"><slot name="item-img"></slot></div>
    <div v-else><slot name="item-img-sel"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {  //父传子通信
    path: String,
    activeColor: {
      type: String,
      default: '#d81e06'
    }
  },
  data () {
    return {
      // isSel: true,
    }
  },
  computed: {
    isSel() {
      return this.$route.path.indexOf(this.path) !== -1
      //$route当前处于活跃状态的路由
    },
    activeStyle() {
      return this.isSel ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path).catch(err => err)  //加.catch解决双击报冗余导航的错误
    }
  }
  
}
</script>

<style  scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    margin-top: 3px;
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 2px;
  }

  .tab-bar-item img {
    weight: 24px;
    height: 24px;
    vertical-align : bottom; 
  }

</style>
