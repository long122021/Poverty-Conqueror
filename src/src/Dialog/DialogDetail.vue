<template>
  <bfe-dialog title="Deatil Information" :visible="true" size="small"  :show-close="true" :before-close="handleClose">
      <div class="case-item">
        <div class="case-item-title">
          <i></i>{{SearchData.name}}
        </div>
      </div>

    <div class="case-item">
      <div class="case-item-title">
        <i></i>{{SearchData.LatiLongitude}}
      </div>
    </div>

    <div v-for="(item,index) in SearchData.list" :key="index">
      <div class="case-item">
        <div class="case-item-title">
          <i></i>{{item.title}}
        </div>
      </div>
      <p  class="case-item-p">{{item.intro}}</p>
    </div>
  </bfe-dialog>
</template>

<script>
export default {
  name: "DialogDetail",
  props: ['SearchData'],
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

>>>.bfe-dialog__body{
  max-height:700px;
  overflow:auto;
}
</style>
