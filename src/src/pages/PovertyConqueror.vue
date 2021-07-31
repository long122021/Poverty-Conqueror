<template>
  <div class="PC-container-bg" v-loading="loading" bfe-loading-text="loading...">
    <div class="PC-div-bar">
      <bfe-cascader style="width:500px;"
        @change="changeAreaSelect"
        placeholder="Please select or search a area"
        expand-trigger="hover"
        :options="options"
        filterable clearable
        v-model="selectedCodes">
      </bfe-cascader>
      <bfe-button @click="GetSearch" class="button-bg">&nbsp;Search</bfe-button>
      <bfe-button @click="ClearSearch" class="button-bg">&nbsp;Reset</bfe-button>
    </div>
    <div class="PC-div-tag">
      <bfe-button :class="{TagStyle:true, active1: Active1, noactive1: !Active1 }"  @click="ChoiceTip(1,Active1)">
        <span class="PC-icon rk-icon" ></span>&nbsp;&nbsp;High population density 
      </bfe-button>

      <bfe-button :class="{TagStyle:true, active1: Active2, noactive1: !Active2 }"  @click="ChoiceTip(2,Active2)">
        <span class="PC-icon rk-icon" ></span>&nbsp;&nbsp;Low population density 
      </bfe-button>
    </div>
    <div class="PC-div-tag">

      <bfe-button :class="{TagStyle:true, active3: Active3, noactive3: !Active3 }"  @click="ChoiceTip(3,Active3)">
        <span class="PC-icon td-icon" ></span>&nbsp;&nbsp;Poor land 
      </bfe-button>
      <bfe-button :class="{TagStyle:true, active3: Active4, noactive3: !Active4 }"  @click="ChoiceTip(4,Active4)">
        <span class="PC-icon td-icon" ></span>&nbsp;&nbsp;fertile land 
      </bfe-button>
      <bfe-button :class="{TagStyle:true, active5: Active5, noactive5: !Active5 }" @click="ChoiceTip(5,Active5)">
        <span class="PC-icon jg-icon" ></span>&nbsp;&nbsp;Characteristic landscape 
      </bfe-button>
      <bfe-button :class="{TagStyle:true, active6: Active6, noactive6: !Active6 }"  @click="ChoiceTip(6,Active6)">
        <span class="PC-icon nq-icon" ></span>&nbsp;&nbsp;More youth 
      </bfe-button>
    </div>
    <div class="PC-div-tag">
      <bfe-button :class="{TagStyle:true, active7: Active7, noactive7: !Active7 }"  @click="ChoiceTip(7,Active7)">
        <span class="PC-icon jb-icon" ></span>&nbsp;&nbsp;High rate of disease 
      </bfe-button>
      <bfe-button :class="{TagStyle:true, active8: Active8, noactive8: !Active8 }"  @click="ChoiceTip(8,Active8)">
        <span class="PC-icon jy-icon" ></span>&nbsp;&nbsp;Lack of education 
      </bfe-button>
      <bfe-button :class="{TagStyle:true, active9: Active9, noactive9: !Active9 }"  @click="ChoiceTip(9,Active9)">
        <span class="PC-icon jt-icon" ></span>&nbsp;&nbsp;Traffic block
      </bfe-button>
      <bfe-button :class="{TagStyle:true, active9: Active10, noactive9: !Active10 }"  @click="ChoiceTip(10,Active10)">
        <span class="PC-icon jt-icon" ></span>&nbsp;&nbsp;Convenient transportation
      </bfe-button>
    </div>
    <transition name="bfe-zoom-in-center">
      <div v-show="IsShowSearch" class="PC-Search">
        <div class="PC-div-fl">
          <div class="PC-divfloat">
            <p class="p-title">{{SearchData.name}}</p>
            <p class="p-title">{{SearchData.LatiLongitude}}</p>
          </div>
          <div class="divline"></div>
          <div class="PC-title">
            <bfe-select v-model="SearchData.Type" @change="TypeChnage">
              <bfe-option
                v-for="item in TypeList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </bfe-option>
            </bfe-select>
          </div>
          <div style="position: relative;">
            <div class="PC-detail">
              <p class="p-content">{{SearchData.intro}}</p>
            </div>
            <div class="PC-button">
              <bfe-button class="MoreMes"  @click="caseVisible = true" >View Details</bfe-button>
            </div>
          </div>
        </div>
        <div class="PC-div-fm">
          <div ref="radardiv" style="height:400px"></div>
          <div class="clear" style="height:1px"></div>
        </div>
        <div class="PC-div-fr">
          <div class="PC-divfloat">
          </div>
          <div class="divline" style="float:right "></div>
          <div class="solutions-div">
            <div style="height:70px"></div>
            <bfe-button class="solutions-button button40" @click="GetSolutions">
              <span class="span1"></span>&nbsp;&nbsp;Generate solutions &nbsp;&nbsp;<span class="span2"></span>
            </bfe-button>
          </div>
        </div>
        <div class="clear"></div>
      </div>
    </transition>
    <!-- 生成方案 -->
    <dialog-detail v-if="caseVisible" :SearchData="SearchAllData" @onCancel="caseVisible = false" ></dialog-detail>
    <div class="clear"></div>
  </div>
</template>

<script>

var myradaroption = {
  title: {text: ""},
  radar: {
    shape: 'circle',
    showSymbol: false,
    name: {
      textStyle: {
        color: 'black',
        fontSize: 20,
        rich: {
          backgroundColor: ['#FFFFFF', '#F6E48C', '#F9DB49']
        }
      }
    },
    splitNumber: 3,
    splitArea: {
      areaStyle: {
        color: ['#FFFFFF', '#F6E48C', '#F9DB49']
      }
    },
    triggerEvent: true,
    indicator: [
      {name: 'Area', max: 100},
      {name: 'Elevation', max: 100},
      {name: 'Terrain', max: 100},
      {name: 'Climate', max: 100},
      {name: 'Humidity', max: 100},
      {name: 'Soil', max: 100},
      {name: 'Economy', max: 100},
      {name: 'Illumination', max: 100}
    ]
  },
  series: [{
    name: '维度',
    type: 'radar',
    symbol: false,
    data: [{
      value: [80, 80, 80, 80, 80, 80, 80, 80]
    }]
  }]
}
// var myradar = {};
import Echarts from 'echarts'
import { ApiAllAreas, ApiAmhara} from '../Api/Api.js';
import DialogDetail from "../Dialog/DialogDetail";
import AppCascader from "../components/AppCascader";
export default {
  data() {
    return {
      loading: false,
      Active1: false,
      Active2: false,
      Active3: false,
      Active4: false,
      Active5: false,
      Active6: false,
      Active7: false,
      Active8: false,
      Active9: false,
      Active10: false,
      myradar: {},
      options: [],
      selectedCodes: [],
      selectedNames: [],
      IsShowSearch: false,
      caseVisible: false,
      TypeList: [
        {value: 'Area', label: 'Area'},
        {value: 'Elevation', label: 'Elevation'},
        {value: 'Terrain', label: 'Terrain'},
        {value: 'Climate', label: 'Climate'},
        {value: 'Humidity', label: 'Humidity'},
        {value: 'Soil', label: 'Soil'},
        {value: 'Economy', label: 'Economy'},
        {value: 'Illumination', label: 'Illumination'}
      ],
      SearchData: {
        name: '',
        LatiLongitude: '',
        Type: '',
        intro: ''
      },
      SearchAllData: []
    };
  },
  mounted() {
    this.InitAreas();
    this.myradar = Echarts.init(this.$refs.radardiv);
    var that = this;
    this.myradar.on('click', function(params) {
      if(params.componentType === 'radar') {
        that.SearchData.Type = params.name;
      }
    });
    
    //窗口改变事件
    window.addEventListener('resize', this.listenResize);
  },
  computed: {
    SelectTipNum() {
      var num = 0;
      num += this.Active1 ? 1 : 0;
      num += this.Active2 ? 1 : 0;
      num += this.Active3 ? 1 : 0;
      num += this.Active4 ? 1 : 0;
      num += this.Active5 ? 1 : 0;
      num += this.Active6 ? 1 : 0;
      num += this.Active7 ? 1 : 0;
      num += this.Active8 ? 1 : 0;
      num += this.Active9 ? 1 : 0;
      num += this.Active10 ? 1 : 0;
      return num;
    }
  },
  components: {
    DialogDetail,
    AppCascader
  },
  methods: {
    //初始化地区数据
    InitAreas() {
      this.loading = true;
      ApiAllAreas().then(res => {
        this.loading = false;
        if(res.data.code === "200" && res.data.message === "SUCCESS") {
          this.options = res.data.data;
        } else {
          var errorTip = res.data.data.trim() === "" ? "failed" : res.data.data.trim();
          this.$message.error(errorTip);
        }
      }).catch((err) => {
        this.loading = false;
        this.$message.error(err.message);
      })
    },
    //地区改变事件--根据code获取name
    changeAreaSelect() {
      this.selectedNames = [];
      if(this.selectedCodes.length > 0 && this.options.length > 0) {
        var temCodes = Object.assign([], this.selectedCodes);
        this.GetTreeListNameByCode(this.options, temCodes, this.selectedNames)
      }
    },
    //从树list获取name
    GetTreeListNameByCode(tl, codes, names) {
      var code = codes[0];
      for(var i = 0; i < tl.length; i++) {
        if(tl[i].value === code) {
          names.push(tl[i].label);
          codes.shift();
          var temptl = tl[i].children;
          if(codes.length > 0 && temptl.length > 0) {
            this.GetTreeListNameByCode(temptl, codes, names)
          }
          break;
        }
      }
    },
    //选择标签
    ChoiceTip(TipNo, NowV) {
      //判断是否允许操作
      if(this.SelectTipNum > 2 && NowV === false) {
        this.$message.info("Choose up to three labels ！");
      } else {
        switch(TipNo) {
        case 1: this.Active1 = !this.Active1; break;
        case 2: this.Active2 = !this.Active2; break;
        case 3: this.Active3 = !this.Active3; break;
        case 4: this.Active4 = !this.Active4; break;
        case 5: this.Active5 = !this.Active5; break;
        case 6: this.Active6 = !this.Active6; break;
        case 7: this.Active7 = !this.Active7; break;
        case 8: this.Active8 = !this.Active8; break;
        case 9: this.Active9 = !this.Active9; break;
        case 10: this.Active10 = !this.Active10; break;
        default:break;
        }
      }
    },
    //类型改变
    TypeChnage() {
      for(var j = 0; j < this.SearchAllData.list.length; j++) {
        if(this.SearchData.Type === this.SearchAllData.list[j].title) {
          this.SearchData.intro = this.SearchAllData.list[j].intro.substring(0, 200) + "...";
          break;
        }
      }
    },
    //点击搜索事件
    GetSearch() {
      if(this.selectedCodes.length < 1) {
        this.$message.info("Please select or search a area");
        return false;
      }
      this.loading = true;
      ApiAmhara().then(res => {
        this.loading = false;
        if(res.data.code === "200" && res.data.message === "SUCCESS") {
          
          this.SearchAllData = res.data.data;
          this.SearchAllData.name = this.selectedNames.join('/');
          this.SearchAllData.LatiLongitude = this.SearchAllData.place;

          this.SearchData.name = this.selectedNames.join('/');
          this.SearchData.LatiLongitude = this.SearchAllData.place;
          this.SearchData.Type = this.SearchAllData.list[0].title;
          this.SearchData.intro = this.SearchAllData.list[0].intro.substring(0, 200) + "...";
          
          this.IsShowSearch = true;

          this.$nextTick(function() {
            this.myradar.setOption(myradaroption);
            this.myradar.resize();
          })
        } else {
          var errorTip = res.data.data.trim() === "" ? "failed" : res.data.data.trim();
          this.$message.error(errorTip);
        }
      }).catch(() => {
        this.loading = false;
        this.$message.error("failed");
      })
    },
    //重置，清空搜索条件
    ClearSearch() {
      this.Active1 = false;
      this.Active2 = false;
      this.Active3 = false;
      this.Active4 = false;
      this.Active5 = false;
      this.Active6 = false;
      this.Active7 = false;
      this.Active8 = false;
      this.Active9 = false;
      this.Active10 = false;
      this.selectedCodes = [];
      this.IsShowSearch = false;
    },
    GetSolutions() {
      this.$router.push("/home/Repository?codes=" + this.selectedCodes);
    },
    listenResize() {
      //初始化界面高度
      this.myradar.resize();
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.listenResize);
  },
  beforeCreate() {},
  created() {}
};
</script>

<style scoped>  

.PC-detail{    
  position: relative;
  z-index: 2;
  background-color: #FFF;
  border-radius: 20px;
  padding: 10px;
  border: 2px solid #ccd1da;
}
.PC-button{
  position: relative;
  bottom: 20px;
  height: 62px;
  z-index: 1;
  border-bottom-left-radius:20px;
  border-bottom-right-radius:20px;
  overflow: hidden;
  border: 2px solid #ccd1da;
}
.MoreMes{
  width: 100%;
  height: 80px;
  border:0;
  color: #F8CE06 !important;
  background-color: #E6EAEC;
  font-size: 30px;
}
.MoreMes:hover{
  width: 100%;
  border: 0px;
  color:white !important;
  background-color: #F8CE06
}
.PC-title{
  width: 300px;
  height: 60px;
}
.PC-div-bar>>>.bfe-input {
  width: 500px !important;
}
.PC-div-bar>>>.bfe-input__inner{
  height: 45px;
  border-radius: 2em;
  background-color: #eaf3f7;
}
.PC-div-bar>>>.bfe-cascader__label{
  line-height: 45px;
}
.PC-div-bar button{
  height: 40px;
  font-size: 18px;
}
.PC-title>>>.bfe-input {
  width: 300px !important;
}
.PC-title>>>.bfe-input__inner{
  height: 60px;
  border: 0;  
  font-family: Helvetica;
  font-size: 30px;
  color: #181B30;
  text-align: left;
  font-weight: 600;
}
</style>
