<template>
  <bfe-dialog :title="PolicyData.DeatilTitle" :visible="true" size="small" :closeOnPressEscape="false" :closeOnClickModal="false" :show-close="true" :before-close="handleClose" v-loading="loading" bfe-loading-text="loading...">
    <div class="case-item">
      <div class="case-item-title">
        <i></i>
        {{PolicyData.title}}
      </div>
    </div>
    <div style="max-height:500px;overflow:auto;">
      <p class="case-item-p"  v-for="(item,index) in PolicyData.content" :key="index">{{item}}</p>
    </div>
  </bfe-dialog>
</template>

<script>
export default {
  name: "DialogPolicyData",
  props: ['PolicyData'],
  data() {
    return {
      loading: false
    };
  },
  methods: {
    handleClose() {
      this.$emit('onCancel');
    }
  },
  mounted() {}
};
</script>

<style scoped>
/* >>>.bfe-dialog.bfe-dialog--tiny{
  background-image: linear-gradient(135deg, #2451FB 0%, #D01063 100%);
} */

</style>
