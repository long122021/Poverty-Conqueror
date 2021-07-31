<template>
  <div>
    <bfe-dialog title="Post help information" :visible="true" size="tiny" :closeOnPressEscape="false" :closeOnClickModal="false" :show-close="false" v-loading="loading" bfe-loading-text="loading...">
      <bfe-form :model="dialogForm" @submit.native.prevent label-width="120px">
        <bfe-form-item label="Title">
          <bfe-input v-model="dialogForm.titleName"></bfe-input>
        </bfe-form-item>
        <bfe-form-item label="Posting agency">
          <bfe-input v-model="dialogForm.createUser"></bfe-input>
        </bfe-form-item>
        <bfe-form-item label="Area">
          <bfe-cascader disabled
            :options="AreaOptions"
            v-model="dialogForm.codes">
          </bfe-cascader>
        </bfe-form-item>
        <bfe-form-item label="Type">
          <bfe-select v-model="dialogForm.busId" disabled>
            <bfe-option v-for="item in TypeOptions" :key="item.value" :label="item.label" :value="item.value">
            </bfe-option>
          </bfe-select>
        </bfe-form-item>
        <bfe-form-item label="Date">
          <bfe-date-picker disabled format="yyyy/MM/dd" :editable="false" v-model="dialogForm.pubDate"></bfe-date-picker>
        </bfe-form-item>
        <bfe-form-item label="Introduction">
          <bfe-input v-model="dialogForm.shortTitle"></bfe-input>
        </bfe-form-item>
        <bfe-form-item label="Contents">
          <bfe-input type="textarea" v-model="dialogForm.content" :maxlength="500" style="width:88%;"></bfe-input>
        </bfe-form-item>
      </bfe-form>
      <div slot="footer" class="dialog-footer">
        <bfe-button class="button-bg" @click="$emit('onCancel')">Cancel</bfe-button>
        <bfe-button class="button-bg" @click="AddOrUpdateSubmit">Submit</bfe-button>
      </div>
    </bfe-dialog>
  </div>
</template>

<script>

import { ApiAllAreas, ApiAddOrUpdate} from '../Api/Api.js';
import {CTypeOptions} from '../common/SelectData.js'
var nowDate = new Date();
var year = nowDate.getFullYear();
var month = nowDate.getMonth() + 1;
var day = nowDate.getDate();
nowDate = [year, month, day].join('/');

export default {
  name: "DialogAddOrUpdate",
  props: {
    'codes': {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      loading: false,
      options2: {},
      TypeOptions: CTypeOptions,
      AreaOptions: [],
      dialogForm: {
        messId: '',       //帖子Id	字符串
        createUser: localStorage.getItem('userName'),       //发布人Id	字符串
        titleName: '',    //求助标题	字符串
        busId: '01',        //标签类型id	字符串
        pubDate: nowDate,      //发帖日期	字符串
        codes: this.codes,
        address: '',      //发帖地址	字符串
        pubOrPri: '',     //是否公开	字符串
        shortTitle: '',   //简介	字符串
        content: ''      //内容	字符串
      }
    };
  },
  watch: { },
  methods: {
        //初始化地区数据
    InitAreas() {
      this.loading = true;
      ApiAllAreas().then(res => {
        this.loading = false;
        if(res.data.code === "200" && res.data.message === "SUCCESS") {
          this.AreaOptions = res.data.data;
        } else {
          var errorTip = res.data.data.trim() === "" ? "failed" : res.data.data.trim();
          this.$message.error(errorTip);
        }
      }).catch(() => {
        this.loading = false;
        this.$message.error("failed");
      })
    },
    AddOrUpdateSubmit() {
      this.loading = true;
      ApiAddOrUpdate(this.dialogForm).then(res => {
        this.loading = false;
        if(res.data.code === "200" && res.data.message === "SUCCESS") {
          this.$message.success(res.data.data)
          this.$emit('onSubmit')
        } else {
          var errorTip = res.data.data.trim() === "" ? "failed" : res.data.data.trim();
          this.$message.error(errorTip);
        }
      }).catch(() => {
        this.loading = false;
        this.$message.error("failed");
      })
    }
  },
  mounted() {
    this.InitAreas();
  }
};
</script>

<style scoped>

</style>
