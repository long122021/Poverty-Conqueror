<template>
  <bfe-dialog :title="DetailData.DeatilTitle" width="30%" :visible="true" size="big" :show-close="true" :before-close="handleClose" >
    <template  v-if="selectIndex===0">
      <div class="case-item">
        <div class="case-item-title">
          <i></i>
          Recommended breeding industry
        </div>
      </div>
      <bfe-table :data="DetailData.list" highlight-current-row border tooltip-effect="dark" style="width: 100%">
          <bfe-table-column prop="name" label="Name"sortable>
          </bfe-table-column>
          <bfe-table-column prop="nickName" label="Chinese Name" show-overflow-tooltip>
          </bfe-table-column>
          <bfe-table-column prop="temperature" label="Temperature" show-overflow-tooltip>
          </bfe-table-column>
          <bfe-table-column prop="airHumidity" label="AirHumidity" show-overflow-tooltip>
          </bfe-table-column>
          <bfe-table-column prop="product" label="product" show-overflow-tooltip>
          </bfe-table-column>
          <div slot="empty" style="margin:20px;">
              <div style="color:rgb(130, 94, 98)">Empty data</div>
          </div>
      </bfe-table>
      <div style="height:50px;"></div>
    </template>

    <template  v-if="selectIndex===1">
      <div class="case-item">
        <div class="case-item-title">
          <i></i>
          Recommended crops
        </div>
      </div>
      <bfe-table v-show="selectIndex===1" ref="sortTable" :data="DetailData.list" highlight-current-row border tooltip-effect="dark" style="width: 100%">
          <bfe-table-column prop="name" label="Name"sortable>
          </bfe-table-column>
          <bfe-table-column prop="nickName" label="Chinese Name" show-overflow-tooltip>
          </bfe-table-column>
          <bfe-table-column prop="temperature" label="Temperature" show-overflow-tooltip>
          </bfe-table-column>
          <bfe-table-column prop="annualRainfall" label="AnnualRainfall" show-overflow-tooltip>
          </bfe-table-column>
          <bfe-table-column prop="lightDuration" label="LightDuration" show-overflow-tooltip>
          </bfe-table-column>
          <bfe-table-column prop="soilPh" label="SoilPh" show-overflow-tooltip>
          </bfe-table-column>
          <bfe-table-column prop="soilMoisture" label="SoilMoisture" show-overflow-tooltip>
          </bfe-table-column>
          <bfe-table-column prop="airRelativeHumidity" label="AirRelativeHumidity" show-overflow-tooltip>
          </bfe-table-column>
          <bfe-table-column prop="product" label="product" show-overflow-tooltip>
          </bfe-table-column>
          <div slot="empty" style="margin:20px;">
              <div style="color:rgb(130, 94, 98)">Empty data</div>
          </div>
      </bfe-table>
      <div style="height:50px;"></div>
    </template>

    <div>
      <p class="case-item-p" >{{DetailData.reason}}</p>
    </div>

  </bfe-dialog>
</template>

<script>
export default {
  name: "DialogPolicyData",
  props: ['DetailData', 'selectIndex'],
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
  mounted() {

  }
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
