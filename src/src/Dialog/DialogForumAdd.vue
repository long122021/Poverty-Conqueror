<template>
  <div>
    <bfe-dialog title="Publish information on helping the poor" :visible="true" size="tiny" :closeOnPressEscape="false" :closeOnClickModal="false" :show-close="false" v-loading="loading" bfe-loading-text="loading...">
      <bfe-form :model="dialogForm" @submit.native.prevent label-width="120px">
        <bfe-form-item label="Title">
          <bfe-input v-model="dialogForm.titleName"></bfe-input>
        </bfe-form-item>
        <bfe-form-item label="Posting agency">
          <bfe-input v-model="dialogForm.createUser"></bfe-input>
        </bfe-form-item>
        <bfe-form-item label="Area">
          <bfe-cascader 
            expand-trigger="hover"
            :options="AreaOptions"
            filterable clearable
            v-model="dialogForm.codes">
          </bfe-cascader>
        </bfe-form-item>
        <bfe-form-item label="Type">
          <bfe-select v-model="dialogForm.busId"clearable>
            <bfe-option v-for="item in TypeOptions" :key="item.value" :label="item.label" :value="item.value">
            </bfe-option>
          </bfe-select>
        </bfe-form-item>
        <bfe-form-item label="Date">
          <bfe-date-picker format="yyyy/MM/dd" :editable="false" :picker-options="pickerOptions" v-model="dialogForm.pubDate"></bfe-date-picker>
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

import { ApiAddOrUpdate} from '../Api/Api.js';
export default {
  name: "DialogAddOrUpdate",
  props: ['AreaOptions', 'TypeOptions'],
  data() {
    return {
      loading: false,
      options2: {},
      dialogForm: {
        messId: '',       //帖子Id	字符串
        createUser: '',       //发布人Id	字符串
        titleName: '',    //求助标题	字符串
        busId: '',        //标签类型id	字符串
        pubDate: '',      //发帖日期	字符串
        codes: [],
        code: '',         //区域Id	字符串
        address: '',      //发帖地址	字符串
        pubOrPri: '',     //是否公开	字符串
        shortTitle: '',   //简介	字符串
        content: ''      //内容	字符串
      },
      pickerOptions: {
        disabledDate(time) {
          var dateTime = new Date();
          dateTime = dateTime.setDate(dateTime.getDate() - 1);
          dateTime = new Date(dateTime);
          return time.getTime() < dateTime;
        }
      }
    };
  },
  watch: {
    "dialogForm.codes": function(newVal) {
      if(newVal.length > 0) {
        this.dialogForm.code = newVal[newVal.length - 1]
      }
    }
  },
  methods: {
    AddOrUpdateSubmit() {
      if(this.dialogForm.pubDate !== '' && this.dialogForm.pubDate instanceof Date) {
        var year = this.dialogForm.pubDate.getFullYear();
        var month = this.dialogForm.pubDate.getMonth() + 1;
        var day = this.dialogForm.pubDate.getDate();
        this.dialogForm.pubDate = [year, month, day].join('/');
      }
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
  mounted() {}
};
</script>

<style scoped>

</style>
