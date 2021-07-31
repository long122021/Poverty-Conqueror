<template>
  <div style="height: 100%">
    <bocnet-header v-bind:activeIndex="activeIndex"></bocnet-header>
    <div ref="content" style="overflow:auto">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import BocnetHeader from "@/common/BocnetHeader";
export default {
  data() {
    return {
      CustomService: '',
      activeIndex: ''
    };
  },
  components: {
    BocnetHeader: BocnetHeader
  },
  methods: {
    listenResize() {
      //初始化界面高度
      this.$refs.content.style.height = (window.innerHeight - 60) + "px";
    }
  },
  updated() {
    this.activeIndex = this.$route.path;
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.listenResize);
  },
  mounted() {
    this.activeIndex = this.$route.path;
    this.listenResize();
    //窗口改变事件
    window.addEventListener('resize', this.listenResize);
  }

};
</script>

<style scoped>

</style>
