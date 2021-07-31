<template>
  <div v-loading="loading" bfe-loading-text="loading...">
    <bfe-form  :inline="true" ref="form" class="formtext demo-form-inline" label-width="100px" style="padding: 30px 50px 0;">
      <bfe-form-item label="Type：">
        <bfe-select v-model="formData.busId" clearable>
          <bfe-option v-for="item in TypeOptions" :key="item.value" :label="item.label" :value="item.value">
          </bfe-option>
        </bfe-select>
      </bfe-form-item>
      <bfe-form-item label="Area：">
        <bfe-cascader
          expand-trigger="hover"
          :options="AreaOptions"
          filterable clearable
          v-model="formData.codes">
        </bfe-cascader>
      </bfe-form-item>
      <bfe-form-item label="Title">
        <bfe-input v-model="formData.titleName" ></bfe-input>
      </bfe-form-item>
      <bfe-form-item>
        <bfe-button style="background-color: #F9DB49;" @click="onSubmit">Search</bfe-button>
      </bfe-form-item>

      <button class="forum-button" @click="PostMessage">
        <span class="Rep-button-span1"></span>&nbsp;&nbsp;Post Message&nbsp;&nbsp;<span class="Rep-button-span2"></span>
      </button>

      <bfe-table ref="sortTable" @row-click="operation('')" :data="tableData" highlight-current-row border tooltip-effect="dark" style="width: 100%">
        <bfe-table-column label="Index" width="100">
          <template slot-scope="scope">{{(currentPage - 1) * pagesize + 1 + scope.$index}}</template>
        </bfe-table-column> 
        <bfe-table-column prop="pubDate" label="Date" width="120" sortable>
        </bfe-table-column>
        <bfe-table-column prop="titleName" label="Title" show-overflow-tooltip>
        </bfe-table-column>
        <bfe-table-column prop="createUser" label="Posting agency" width="200" show-overflow-tooltip>
        </bfe-table-column>
        <bfe-table-column label="Type" width="140" >
          <template slot-scope="scope">
            <bfe-select v-model="scope.row.busId" disabled class="nospan">
              <bfe-option v-for="item in TypeOptions" :key="item.value" :label="item.label" :value="item.value">
              </bfe-option>
            </bfe-select>
          </template>
        </bfe-table-column>
        <bfe-table-column label="Area"  width="280">
          <template slot-scope="scope" v-if = "scope.row.codes.length > 0">
            <bfe-cascader disabled class="nospan" v-cloak
              expand-trigger="hover"
              :options="AreaOptions"
              v-model="scope.row.codes">
            </bfe-cascader>
          </template>
        </bfe-table-column>
        <bfe-table-column prop="shortTitle" label="Introduction" show-overflow-tooltip>
          <!-- <template slot-scope="scope">{{ scope.row.date + scope.row.name + scope.row.address}}</template> -->
        </bfe-table-column>
        <div slot="empty" style="margin:20px;">
          <img src="../assets/imgs/icon-nodata.svg"/>
          <div style="color:rgb(130, 94, 98)">Empty data</div>
        </div>
      </bfe-table>
      <bfe-pagination class="text-right"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="pagesizes"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
    </bfe-pagination>

    </bfe-form> 
    
    <dialog-forum-add :AreaOptions="AreaOptions" :TypeOptions="TypeOptions"  v-if="dialogShow" @onSubmit="onAddSubmit" @onCancel="onCancel" ></dialog-forum-add >

  </div>
</template>

<script>

import { ApiAllAreas, ApilistHelps} from '../Api/Api.js';
import {CTypeOptions} from '../common/SelectData.js'
import DialogForumAdd from "../Dialog/DialogForumAdd";
export default {
  data() {
    return {
      loading: false,
      dialogShow: false,
      AreaOptions: [],
      TypeOptions: CTypeOptions,
      formData: {
        codes: [],
        code: '',         //区域Id	字符串
        busId: '',
        titleName: '',
        pageNum: 0,
        pageSize: 0
      },
      tableData: [],
      multipleSelection: [],
      currentPage: 1,
      pagesizes: [10, 20, 50, 100],
      pagesize: 10,
      total: 0
    };
  },
  mounted() {
    this.InitData();
  },
  watch: {
    "formData.codes": function(newVal) {
      if(newVal.length > 0) {
        this.formData.code = newVal[newVal.length - 1]
      }
    }
  },
  components: {
    DialogForumAdd
  },
  methods: {
    InitData() {
      this.loading = true;
      ApiAllAreas().then(res => {
        if(res.data.code === "200" && res.data.message === "SUCCESS") {
          this.AreaOptions = res.data.data;
        } else {
          var errorTip = res.data.data.trim() === "" ? "failed" : res.data.data.trim();
          this.$message.error(errorTip);
        }
      }).catch(() => {
        this.$message.error("failed");
      });
      this.onSubmit();
    },
    onSubmit() {
      this.tableData = [];
      this.loading = true;
      this.formData.pageNum = this.currentPage;
      this.formData.pageSize = this.pagesize;
      ApilistHelps(this.formData).then(res => {
        this.loading = false;
        if(res.data.code === "200" && res.data.message === "SUCCESS") {
          this.tableData = res.data.data;
          this.total = res.data.totalNum;
          
        } else {
          var errorTip = res.data.data.trim() === "" ? "failed" : res.data.data.trim();
          this.$message.error(errorTip);
        }
      }).catch(() => {
        this.loading = false;
        this.$message.error("failed");
      })
    },
    
    PostMessage() {
      this.dialogShow = true;
    },
    onAddSubmit() {
      this.dialogShow = false;
      this.onSubmit();
    },
    onCancel() {
      this.dialogShow = false;
    },
    operation(ope) {
      if(ope) {
        this.$message.error("您无权执行【" + ope + "】操作！")
      } else {
        this.$message.error("您无权操作！")
      }
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.onSubmit();
    },
    handleSizeChange(val) {
      this.onSubmit();
      this.pagesize = val;
    }
  }
};
</script>

<style scoped>

.formtext .bfe-form-item>>>.bfe-input {
  width: 250px !important;
}
>>>.bfe-cascader__label {
  line-height: 30px !important
}
.text-right>>>.bfe-pager li.active {
  color: black;
  background-color: #F9DB49;
  border: 0;
  /* border: 1px solid #f5222d; */
}
[v-cloak] {
  display: none;
}
</style>
