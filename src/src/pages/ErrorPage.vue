<template>
  <div class="error-page">
    <img :src="errorBg" alt="" style="width: 650px;height: 528px;">
    <div class="text">{{errMsg}} ~</div>
  </div>
</template>

<script>
export default {
  name: "ErrorPage",
  props: {
    errMsg: String
  },
  data() {
    return {
      errorBg: require('../assets/imgs/error-page.jpg')
    };
  },
  watch: {},
  methods: {},
  created() {},
  mounted() {},
  beforeDestroy() {}
};
</script>

<style scoped>
.error-page {
  width: 100%;
  height: calc(100vh - 80px);
  padding-top: 10%;
  box-sizing: border-box;
  text-align: center;
  min-width: 650px;
}
.error-page > .text {
  margin-top: -190px;
}
</style>
