<template>
  <div class="recommends">
    <div v-for="item in recommends" class="recommends-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendView',
  data () {
    return {
    }
  },
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style  scoped>
  .recommends {
    display: flex;
    weight: 100%;
    text-align: center;
    font-size: 12px;
    padding: 10px 0px;
    border-bottom: 8px solid #eee;
  }

  .recommends-item {
    flex: 1;
  }

  img {
    weight: 70px;
    height: 70px;
    margin-bottom: 10px;
  }

  a {
    text-decoration: none;
    color: black;
  }
</style>
