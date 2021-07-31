webpackJsonp([1],{

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(40))(145);

/***/ }),

/***/ 118:
/***/ (function(module, exports) {



/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_routes_js__ = __webpack_require__(581);





__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["default"]);

var router = new __WEBPACK_IMPORTED_MODULE_1_vue_router__["default"]({
  base: "./",
  routes: __WEBPACK_IMPORTED_MODULE_2__data_routes_js__["a" /* default */]
});
router.beforeEach(function (to, from, next) {
  if (to.meta.needLogin) {
    if (localStorage.getItem('PovertyToken')) {
      next();
    } else {
      next('/');
    }
  } else {
    next();
  }
});


/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Dialog_DialogRegister__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Dialog_DialogLogin__ = __webpack_require__(587);




/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      imgList: [{ src: __webpack_require__(590) }, { src: __webpack_require__(591) }, { src: __webpack_require__(592) }, { src: __webpack_require__(593) }],
      IsShowRegister: false,
      IsShowLogin: false,
      userId: '',
      pwd: ''
    };
  },

  components: {
    DialogRegister: __WEBPACK_IMPORTED_MODULE_0__Dialog_DialogRegister__["a" /* default */],
    DialogLogin: __WEBPACK_IMPORTED_MODULE_1__Dialog_DialogLogin__["a" /* default */]
  },
  methods: {
    onRegisterSubmit: function onRegisterSubmit() {
      this.IsShowRegister = false;
    },
    onRegisterCancel: function onRegisterCancel() {
      this.IsShowRegister = false;
    },
    Login: function Login() {
      if (localStorage.getItem('PovertyToken')) {
        this.$router.push("/home/PovertyConqueror");
        return;
      }
      this.IsShowLogin = true;
    },
    onLoginCancel: function onLoginCancel() {
      this.IsShowLogin = false;
    }
  },
  computed: {},
  mounted: function mounted() {},
  beforeCreate: function beforeCreate() {},
  created: function created() {}
});

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Api_Api_js__ = __webpack_require__(39);



/* harmony default export */ __webpack_exports__["a"] = ({
  name: "DialogRegister",
  data: function data() {
    return {
      loading: false,
      dialogForm: {
        userName: "",
        email: "",
        passWord: ""
      },
      rules: {
        userName: [{ required: true, message: 'Please enter Username', trigger: 'blur' }, { min: 1, max: 50, message: '1 to 50 characters in length', trigger: 'blur' }],
        email: [{ required: true, message: 'Please enter Email', trigger: 'blur' }, { type: 'email', message: 'Please enter the correct email address', trigger: ['blur', 'change'] }],
        passWord: [{ required: true, message: 'Please enter Password', trigger: 'blur' }]
      }
    };
  },

  methods: {
    onRegisterSubmit: function onRegisterSubmit() {
      var _this = this;

      this.$refs.dialogForm.validate(function (valid) {
        if (valid) {
          _this.loading = true;

          Object(__WEBPACK_IMPORTED_MODULE_0__Api_Api_js__["e" /* ApiRegister */])(_this.dialogForm).then(function (res) {
            _this.loading = false;
            if (res.data.code === "200" && res.data.message === "SUCCESS") {
              _this.$message.success('Register Success');
              _this.$emit('onSubmit');
            } else {
              var errorTip = res.data.data.trim() === "" ? "Register failed" : res.data.data.trim();
              _this.$message.error(errorTip);
            }
          }).catch(function () {
            _this.loading = false;
            _this.$message.error("Register failed");
          });
        }
      });
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(40))(347);

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Api_Api_js__ = __webpack_require__(39);



/* harmony default export */ __webpack_exports__["a"] = ({
  name: "DialogLogin",
  data: function data() {
    return {
      loading: false,
      dialogForm: { userName: '', passWord: '' },
      rules: {
        userName: [{ required: true, message: 'Please enter Username', trigger: 'blur' }, { min: 1, max: 50, message: '1 to 50 characters in length', trigger: 'blur' }],
        passWord: [{ required: true, message: 'Please enter Password', trigger: 'blur' }]
      }
    };
  },

  methods: {
    onLoginSubmit: function onLoginSubmit() {
      var _this = this;

      this.$refs.dialogForm.validate(function (valid) {
        if (valid) {
          _this.loading = true;

          Object(__WEBPACK_IMPORTED_MODULE_0__Api_Api_js__["d" /* ApiLogin */])(_this.dialogForm).then(function (res) {
            _this.loading = false;
            if (res.data.code === "200" && res.data.message === "SUCCESS") {
              localStorage.removeItem('userName');
              localStorage.removeItem('PovertyToken');
              localStorage.setItem('userName', res.data.data.userName);
              localStorage.setItem('PovertyToken', new Date());
              _this.$router.push("/home/PovertyConqueror");
            } else {
              var errorTip = res.data.data.trim() === "" ? "Login failed" : res.data.data.trim();
              _this.$message.error(errorTip);
            }
          }).catch(function () {
            _this.loading = false;
            _this.$message.error("Login failed");
          });
        }
      });
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_echarts__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_echarts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_echarts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Api_Api_js__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Dialog_DialogDetail__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_AppCascader__ = __webpack_require__(600);



var myradaroption = {
  title: { text: "" },
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
    indicator: [{ name: 'Area', max: 100 }, { name: 'Elevation', max: 100 }, { name: 'Terrain', max: 100 }, { name: 'Climate', max: 40 }, { name: 'Humidity', max: 100 }, { name: 'Soil', max: 14 }, { name: 'Economy', max: 100 }, { name: 'Illumination', max: 24 }]
  },
  series: [{
    name: '维度',
    type: 'radar',
    symbol: false,
    data: [{
      value: [100, 100, 100, 22, 57.13, 4.5, 30, 12.12]
    }]
  }]
};





/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
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
      TypeList: [{ value: 'Area', label: 'Area' }, { value: 'Elevation', label: 'Elevation' }, { value: 'Terrain', label: 'Terrain' }, { value: 'Climate', label: 'Climate' }, { value: 'Humidity', label: 'Humidity' }, { value: 'Soil', label: 'Soil' }, { value: 'Economy', label: 'Economy' }, { value: 'Illumination', label: 'Illumination' }],
      SearchData: {
        name: '',
        LatiLongitude: '',
        Type: '',
        intro: ''
      },
      SearchAllData: []
    };
  },
  mounted: function mounted() {
    this.InitAreas();
    this.myradar = __WEBPACK_IMPORTED_MODULE_1_echarts___default.a.init(this.$refs.radardiv);
    var that = this;
    this.myradar.on('click', function (params) {
      if (params.componentType === 'radar') {
        that.SearchData.Type = params.name;
      }
    });

    window.addEventListener('resize', this.listenResize);
  },

  computed: {
    SelectTipNum: function SelectTipNum() {
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
    DialogDetail: __WEBPACK_IMPORTED_MODULE_3__Dialog_DialogDetail__["a" /* default */],
    AppCascader: __WEBPACK_IMPORTED_MODULE_4__components_AppCascader__["a" /* default */]
  },
  methods: {
    InitAreas: function InitAreas() {
      var _this = this;

      this.loading = true;
      Object(__WEBPACK_IMPORTED_MODULE_2__Api_Api_js__["b" /* ApiAllAreas */])().then(function (res) {
        _this.loading = false;
        if (res.data.code === "200" && res.data.message === "SUCCESS") {
          _this.options = res.data.data;
        } else {
          var errorTip = res.data.data.trim() === "" ? "failed" : res.data.data.trim();
          _this.$message.error(errorTip);
        }
      }).catch(function () {
        _this.loading = false;
        _this.$message.error("failed");
      });
    },
    changeAreaSelect: function changeAreaSelect() {
      this.selectedNames = [];
      if (this.selectedCodes.length > 0 && this.options.length > 0) {
        var temCodes = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()([], this.selectedCodes);
        this.GetTreeListNameByCode(this.options, temCodes, this.selectedNames);
      }
    },
    GetTreeListNameByCode: function GetTreeListNameByCode(tl, codes, names) {
      var code = codes[0];
      for (var i = 0; i < tl.length; i++) {
        if (tl[i].value === code) {
          names.push(tl[i].label);
          codes.shift();
          var temptl = tl[i].children;
          if (codes.length > 0 && temptl.length > 0) {
            this.GetTreeListNameByCode(temptl, codes, names);
          }
          break;
        }
      }
    },
    ChoiceTip: function ChoiceTip(TipNo, NowV) {
      if (this.SelectTipNum > 2 && NowV === false) {
        this.$message.info("Choose up to three labels ！");
      } else {
        switch (TipNo) {
          case 1:
            this.Active1 = !this.Active1;break;
          case 2:
            this.Active2 = !this.Active2;break;
          case 3:
            this.Active3 = !this.Active3;break;
          case 4:
            this.Active4 = !this.Active4;break;
          case 5:
            this.Active5 = !this.Active5;break;
          case 6:
            this.Active6 = !this.Active6;break;
          case 7:
            this.Active7 = !this.Active7;break;
          case 8:
            this.Active8 = !this.Active8;break;
          case 9:
            this.Active9 = !this.Active9;break;
          case 10:
            this.Active10 = !this.Active10;break;
          default:
            break;
        }
      }
    },
    TypeChnage: function TypeChnage() {
      for (var j = 0; j < this.SearchAllData.list.length; j++) {
        if (this.SearchData.Type === this.SearchAllData.list[j].title) {
          this.SearchData.intro = this.SearchAllData.list[j].intro.substring(0, 200) + "...";
          break;
        }
      }
    },
    GetSearch: function GetSearch() {
      var _this2 = this;

      if (this.selectedCodes.length < 1) {
        this.$message.info("Please select or search a area");
        return false;
      }
      this.IsShowSearch = false;
      this.loading = true;
      Object(__WEBPACK_IMPORTED_MODULE_2__Api_Api_js__["c" /* ApiAmhara */])().then(function (res) {
        _this2.loading = false;
        if (res.data.code === "200" && res.data.message === "SUCCESS") {
          _this2.IsShowSearch = true;

          _this2.SearchAllData = res.data.data;
          _this2.SearchAllData.name = _this2.selectedNames.join('/');
          _this2.SearchAllData.LatiLongitude = _this2.SearchAllData.place;

          _this2.SearchData.name = _this2.selectedNames.join('/');
          _this2.SearchData.LatiLongitude = _this2.SearchAllData.place;
          _this2.SearchData.Type = _this2.SearchAllData.list[0].title;
          _this2.SearchData.intro = _this2.SearchAllData.list[0].intro.substring(0, 200) + "...";

          _this2.$nextTick(function () {
            this.myradar.clear();
            this.myradar.setOption(myradaroption);
            this.myradar.resize();
          });
        } else {
          var errorTip = res.data.data.trim() === "" ? "failed" : res.data.data.trim();
          _this2.$message.error(errorTip);
        }
      }).catch(function () {
        _this2.loading = false;
        _this2.$message.error("failed");
      });
    },
    ClearSearch: function ClearSearch() {
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
    GetSolutions: function GetSolutions() {
      this.$router.push("/home/Repository?codes=" + this.selectedCodes);
    },
    listenResize: function listenResize() {
      this.myradar.resize();
    }
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this.listenResize);
  },
  beforeCreate: function beforeCreate() {},
  created: function created() {}
});

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/* harmony default export */ __webpack_exports__["a"] = ({
  name: "DialogDetail",
  props: ['SearchData'],
  data: function data() {
    return {
      loading: false
    };
  },

  methods: {
    handleClose: function handleClose() {
      this.$emit('onCancel');
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/* harmony default export */ __webpack_exports__["a"] = ({
  name: "cascader",
  props: ["selectedOptions", "options"],
  data: function data() {
    return {
      props: {
        value: 'label',
        children: 'children'
      }
    };
  },

  methods: {
    handleItemChange: function handleItemChange() {}
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Dialog_DialogForumAddSoulutions__ = __webpack_require__(215);



/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      loading: false,
      showRepository: false,
      menuactive1: '',
      menuactiveName1: '',
      menuactive2: '',
      menuactiveName2: '',
      dialogShow: false
    };
  },

  components: {
    DialogForumAddSoulutions: __WEBPACK_IMPORTED_MODULE_0__Dialog_DialogForumAddSoulutions__["a" /* default */]
  },
  methods: {
    PostMessage: function PostMessage() {
      this.dialogShow = true;
    },
    onAddSubmit: function onAddSubmit() {
      this.dialogShow = false;
    },
    onCancel: function onCancel() {
      this.dialogShow = false;
    }
  }
});

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DialogForumAddSoulutions_vue__ = __webpack_require__(216);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_207e2ce4_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DialogForumAddSoulutions_vue__ = __webpack_require__(607);
function injectStyle (ssrContext) {
  __webpack_require__(606)
}
var normalizeComponent = __webpack_require__(11)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-207e2ce4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DialogForumAddSoulutions_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_207e2ce4_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DialogForumAddSoulutions_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Api_Api_js__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_SelectData_js__ = __webpack_require__(217);




var nowDate = new Date();
var year = nowDate.getFullYear();
var month = nowDate.getMonth() + 1;
var day = nowDate.getDate();
nowDate = [year, month, day].join('/');

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "DialogAddOrUpdate",
  props: {
    'codes': {
      type: Array,
      default: []
    }
  },
  data: function data() {
    return {
      loading: false,
      options2: {},
      TypeOptions: __WEBPACK_IMPORTED_MODULE_1__common_SelectData_js__["a" /* CTypeOptions */],
      AreaOptions: [],
      dialogForm: {
        messId: '',
        createUser: localStorage.getItem('userName'),
        titleName: '',
        busId: '01',
        pubDate: nowDate,
        codes: this.codes,
        address: '',
        pubOrPri: '',
        shortTitle: '',
        content: '' }
    };
  },

  watch: {},
  methods: {
    InitAreas: function InitAreas() {
      var _this = this;

      this.loading = true;
      Object(__WEBPACK_IMPORTED_MODULE_0__Api_Api_js__["b" /* ApiAllAreas */])().then(function (res) {
        _this.loading = false;
        if (res.data.code === "200" && res.data.message === "SUCCESS") {
          _this.AreaOptions = res.data.data;
        } else {
          var errorTip = res.data.data.trim() === "" ? "failed" : res.data.data.trim();
          _this.$message.error(errorTip);
        }
      }).catch(function () {
        _this.loading = false;
        _this.$message.error("failed");
      });
    },
    AddOrUpdateSubmit: function AddOrUpdateSubmit() {
      var _this2 = this;

      this.loading = true;
      Object(__WEBPACK_IMPORTED_MODULE_0__Api_Api_js__["a" /* ApiAddOrUpdate */])(this.dialogForm).then(function (res) {
        _this2.loading = false;
        if (res.data.code === "200" && res.data.message === "SUCCESS") {
          _this2.$message.success(res.data.data);
          _this2.$emit('onSubmit');
        } else {
          var errorTip = res.data.data.trim() === "" ? "failed" : res.data.data.trim();
          _this2.$message.error(errorTip);
        }
      }).catch(function () {
        _this2.loading = false;
        _this2.$message.error("failed");
      });
    }
  },
  mounted: function mounted() {
    this.InitAreas();
  }
});

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CTypeOptions; });
var CTypeOptions = [{ value: '01', name: '求助信息', label: 'Help information' }, { value: '02', name: '借贷融资', label: 'Loan financing' }, { value: '03', name: '慈善捐资', label: 'Charitable donation' }, { value: '04', name: '技术支持', label: 'Technical Support' }, { value: '05', name: '保险护航', label: 'Insurance escort ' }];

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Dialog_DialogForumAddSoulutions__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Dialog_DialogPolicy__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Dialog_DialogIndustry__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_carouselData_js__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Api_Api_js__ = __webpack_require__(39);







/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      loading: false,
      DialogPolicyShow1: false,
      DialogPolicyShow2: false,
      DialogPolicyShow3: false,
      SoulutionShow: false,
      carouselData1: {},
      carouselData2: __WEBPACK_IMPORTED_MODULE_3__common_carouselData_js__["a" /* ststicCarouselData2 */],
      carouselData3: __WEBPACK_IMPORTED_MODULE_3__common_carouselData_js__["b" /* ststicCarouselData3 */],
      Active1: 0,
      carouselDataAct1: {},
      carouselDataAct2: {},
      carouselDataAct3: {},
      codes: []
    };
  },
  mounted: function mounted() {
    if (this.$route.query.codes !== "" && this.$route.query.codes !== null && this.$route.query.codes !== undefined) {
      this.codes = this.$route.query.codes.split(',');
    } else {
      this.codes = [];
    }

    this.InitData();
  },

  components: {
    DialogForumAddSoulutions: __WEBPACK_IMPORTED_MODULE_0__Dialog_DialogForumAddSoulutions__["a" /* default */],
    DialogPolicy: __WEBPACK_IMPORTED_MODULE_1__Dialog_DialogPolicy__["a" /* default */],
    DialogIndustry: __WEBPACK_IMPORTED_MODULE_2__Dialog_DialogIndustry__["a" /* default */]
  },
  methods: {
    InitData: function InitData() {
      var _this = this;

      this.loading = true;
      Object(__WEBPACK_IMPORTED_MODULE_4__Api_Api_js__["g" /* ApilistInfos */])().then(function (res) {
        _this.loading = false;
        if (res.data.code === "200" && res.data.message === "SUCCESS") {
          _this.carouselData1 = res.data.data;
          _this.carouselData1.breeds.DeatilTitle = "Breeding industry";
          _this.carouselData1.crops.DeatilTitle = "Farming industry";
          _this.carouselData1.textiles.DeatilTitle = "Textile industry";
          _this.carouselData1.breeds.title = "Breeding industry：Breeds";
          _this.carouselData1.crops.title = "Farming industry：Crops";
          _this.carouselData1.textiles.title = "Textile industry：Textiles";
        } else {
          var errorTip = res.data.data.trim() === "" ? "failed" : res.data.data.trim();
          _this.$message.error(errorTip);
        }
      }).catch(function () {
        _this.loading = false;
        _this.$message.error("failed");
      });
    },
    PostMessage: function PostMessage() {
      this.SoulutionShow = true;
    },
    carouselChange1: function carouselChange1(Selectindex) {
      this.carouselDataAct1 = {};
      this.Active1 = Selectindex;
      switch (Selectindex) {
        case 0:
          this.carouselDataAct1 = this.carouselData1.breeds;break;
        case 1:
          this.carouselDataAct1 = this.carouselData1.crops;break;
        case 2:
          this.carouselDataAct1 = this.carouselData1.textiles;break;
        default:
          break;
      }
    },
    carouselChange2: function carouselChange2(Selectindex) {
      this.carouselDataAct2 = this.carouselData2[Selectindex];
    },
    carouselChange3: function carouselChange3(Selectindex) {
      this.carouselDataAct3 = this.carouselData3[Selectindex];
    }
  }
});

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/* harmony default export */ __webpack_exports__["a"] = ({
  name: "DialogPolicyData",
  props: ['PolicyData'],
  data: function data() {
    return {
      loading: false
    };
  },

  methods: {
    handleClose: function handleClose() {
      this.$emit('onCancel');
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/* harmony default export */ __webpack_exports__["a"] = ({
  name: "DialogPolicyData",
  props: ['DetailData', 'selectIndex'],
  data: function data() {
    return {
      loading: false
    };
  },

  methods: {
    handleClose: function handleClose() {
      this.$emit('onCancel');
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Api_Api_js__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_SelectData_js__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Dialog_DialogForumAdd__ = __webpack_require__(621);





/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      loading: false,
      dialogShow: false,
      AreaOptions: [],
      TypeOptions: __WEBPACK_IMPORTED_MODULE_1__common_SelectData_js__["a" /* CTypeOptions */],
      formData: {
        codes: [],
        code: '',
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
  mounted: function mounted() {
    this.InitData();
  },

  watch: {
    "formData.codes": function formDataCodes(newVal) {
      if (newVal.length > 0) {
        this.formData.code = newVal[newVal.length - 1];
      }
    }
  },
  components: {
    DialogForumAdd: __WEBPACK_IMPORTED_MODULE_2__Dialog_DialogForumAdd__["a" /* default */]
  },
  methods: {
    InitData: function InitData() {
      var _this = this;

      this.loading = true;
      Object(__WEBPACK_IMPORTED_MODULE_0__Api_Api_js__["b" /* ApiAllAreas */])().then(function (res) {
        if (res.data.code === "200" && res.data.message === "SUCCESS") {
          _this.AreaOptions = res.data.data;
        } else {
          var errorTip = res.data.data.trim() === "" ? "failed" : res.data.data.trim();
          _this.$message.error(errorTip);
        }
      }).catch(function () {
        _this.$message.error("failed");
      });
      this.onSubmit();
    },
    onSubmit: function onSubmit() {
      var _this2 = this;

      this.tableData = [];
      this.loading = true;
      this.formData.pageNum = this.currentPage;
      this.formData.pageSize = this.pagesize;
      Object(__WEBPACK_IMPORTED_MODULE_0__Api_Api_js__["f" /* ApilistHelps */])(this.formData).then(function (res) {
        _this2.loading = false;
        if (res.data.code === "200" && res.data.message === "SUCCESS") {
          _this2.tableData = res.data.data;
          _this2.total = res.data.totalNum;
        } else {
          var errorTip = res.data.data.trim() === "" ? "failed" : res.data.data.trim();
          _this2.$message.error(errorTip);
        }
      }).catch(function () {
        _this2.loading = false;
        _this2.$message.error("failed");
      });
    },
    PostMessage: function PostMessage() {
      this.dialogShow = true;
    },
    onAddSubmit: function onAddSubmit() {
      this.dialogShow = false;
      this.onSubmit();
    },
    onCancel: function onCancel() {
      this.dialogShow = false;
    },
    operation: function operation(ope) {
      if (ope) {
        this.$message.error("您无权执行【" + ope + "】操作！");
      } else {
        this.$message.error("您无权操作！");
      }
    },
    handleCurrentChange: function handleCurrentChange(val) {
      this.currentPage = val;
      this.onSubmit();
    },
    handleSizeChange: function handleSizeChange(val) {
      this.onSubmit();
      this.pagesize = val;
    }
  }
});

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Api_Api_js__ = __webpack_require__(39);



/* harmony default export */ __webpack_exports__["a"] = ({
  name: "DialogAddOrUpdate",
  props: ['AreaOptions', 'TypeOptions'],
  data: function data() {
    return {
      loading: false,
      options2: {},
      dialogForm: {
        messId: '',
        createUser: '',
        titleName: '',
        busId: '',
        pubDate: '',
        codes: [],
        code: '',
        address: '',
        pubOrPri: '',
        shortTitle: '',
        content: '' },
      pickerOptions: {
        disabledDate: function disabledDate(time) {
          var dateTime = new Date();
          dateTime = dateTime.setDate(dateTime.getDate() - 1);
          dateTime = new Date(dateTime);
          return time.getTime() < dateTime;
        }
      }
    };
  },

  watch: {
    "dialogForm.codes": function dialogFormCodes(newVal) {
      if (newVal.length > 0) {
        this.dialogForm.code = newVal[newVal.length - 1];
      }
    }
  },
  methods: {
    AddOrUpdateSubmit: function AddOrUpdateSubmit() {
      var _this = this;

      if (this.dialogForm.pubDate !== '' && this.dialogForm.pubDate instanceof Date) {
        var year = this.dialogForm.pubDate.getFullYear();
        var month = this.dialogForm.pubDate.getMonth() + 1;
        var day = this.dialogForm.pubDate.getDate();
        this.dialogForm.pubDate = [year, month, day].join('/');
      }
      this.loading = true;
      Object(__WEBPACK_IMPORTED_MODULE_0__Api_Api_js__["a" /* ApiAddOrUpdate */])(this.dialogForm).then(function (res) {
        _this.loading = false;
        if (res.data.code === "200" && res.data.message === "SUCCESS") {
          _this.$message.success(res.data.data);
          _this.$emit('onSubmit');
        } else {
          var errorTip = res.data.data.trim() === "" ? "failed" : res.data.data.trim();
          _this.$message.error(errorTip);
        }
      }).catch(function () {
        _this.loading = false;
        _this.$message.error("failed");
      });
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_BocnetHeader__ = __webpack_require__(628);



/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      CustomService: '',
      activeIndex: ''
    };
  },

  components: {
    BocnetHeader: __WEBPACK_IMPORTED_MODULE_0__common_BocnetHeader__["a" /* default */]
  },
  methods: {
    listenResize: function listenResize() {
      this.$refs.content.style.height = window.innerHeight - 60 + "px";
    }
  },
  updated: function updated() {
    this.activeIndex = this.$route.path;
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this.listenResize);
  },
  mounted: function mounted() {
    this.activeIndex = this.$route.path;
    this.listenResize();

    window.addEventListener('resize', this.listenResize);
  }
});

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Dialog_DialogSearch__ = __webpack_require__(630);



/* harmony default export */ __webpack_exports__["a"] = ({
  name: "BocnetHeader",
  props: {
    activeIndex: ''
  },
  data: function data() {
    return {
      searchText: '',
      IsShowSearch: false
    };
  },

  methods: {
    showUserInfo: function showUserInfo() {
      this.$message.info("This feature is not turned on!");
    },
    onSubmit: function onSubmit() {
      this.IsShowSearch = false;
      this.$message.info("Search content not found!");
    },
    onCancel: function onCancel() {
      this.IsShowSearch = false;
    },
    Exist: function Exist() {
      localStorage.removeItem('PovertyToken');
      this.$router.push("/");
    }
  },
  components: {
    DialogSearch: __WEBPACK_IMPORTED_MODULE_0__Dialog_DialogSearch__["a" /* default */]
  }
});

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/* harmony default export */ __webpack_exports__["a"] = ({
  name: "DialogSearch",
  data: function data() {
    return {
      loading: false,
      dialogForm: { SearchText: '' },
      rules: {
        SearchText: [{ required: true, message: 'Please enter search content', trigger: 'blur' }]
      }
    };
  },

  methods: {
    onSearchSubmit: function onSearchSubmit() {
      var _this = this;

      this.$refs.dialogForm.validate(function (valid) {
        if (valid) {
          _this.$emit('onSubmit');
        }
      });
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/* harmony default export */ __webpack_exports__["a"] = ({
  name: "ErrorPage",
  props: {
    errMsg: String
  },
  data: function data() {
    return {
      errorBg: __webpack_require__(637)
    };
  },

  watch: {},
  methods: {},
  created: function created() {},
  mounted: function mounted() {},
  beforeDestroy: function beforeDestroy() {}
});

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(111);
module.exports = __webpack_require__(228);


/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_polyfill__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_polyfill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_polyfill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_bfe_ui_lib_theme_index_css__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_bfe_ui_lib_theme_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_bfe_ui_lib_theme_index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_common_css__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_common_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__assets_common_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_bfe_ui__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_bfe_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_bfe_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_bfe_charts__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_bfe_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_bfe_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__router__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils__ = __webpack_require__(639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_axios__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_vue_jsonp__ = __webpack_require__(640);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_vue_jsonp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_vue_jsonp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_bfe_ui_lib_locale_lang_en_js__ = __webpack_require__(641);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_bfe_ui_lib_locale_lang_en_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_bfe_ui_lib_locale_lang_en_js__);


















__WEBPACK_IMPORTED_MODULE_1_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_7_bfe_charts___default.a);

__WEBPACK_IMPORTED_MODULE_1_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_11_vue_jsonp___default.a);

__WEBPACK_IMPORTED_MODULE_1_vue__["default"].prototype.$http = __WEBPACK_IMPORTED_MODULE_10_axios___default.a;
__WEBPACK_IMPORTED_MODULE_1_vue__["default"].prototype.$utils = __WEBPACK_IMPORTED_MODULE_9__utils__["a" /* default */];

var Bus = new __WEBPACK_IMPORTED_MODULE_1_vue__["default"]();
__WEBPACK_IMPORTED_MODULE_1_vue__["default"].prototype.$bus = Bus;


__WEBPACK_IMPORTED_MODULE_1_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_6_bfe_ui___default.a, { locale: __WEBPACK_IMPORTED_MODULE_12_bfe_ui_lib_locale_lang_en_js___default.a });

__WEBPACK_IMPORTED_MODULE_1_vue__["default"].prototype.$message = function (msg) {
  return __WEBPACK_IMPORTED_MODULE_6_bfe_ui___default.a.Message(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, msg, {
    duration: 5000
  }));
};
__WEBPACK_IMPORTED_MODULE_1_vue__["default"].prototype.$message.error = function (msg) {
  return __WEBPACK_IMPORTED_MODULE_6_bfe_ui___default.a.Message.error({
    message: msg,
    duration: 5000
  });
};
__WEBPACK_IMPORTED_MODULE_1_vue__["default"].prototype.$message.errorAuto = function (msg) {
  return __WEBPACK_IMPORTED_MODULE_6_bfe_ui___default.a.Message.error({
    message: msg,
    duration: 0,
    showClose: true,
    customClass: "err-msg-scroll",
    type: 'error'
  });
};
__WEBPACK_IMPORTED_MODULE_1_vue__["default"].prototype.$message.warning = function (msg) {
  return __WEBPACK_IMPORTED_MODULE_6_bfe_ui___default.a.Message.warning({
    message: msg,
    duration: 5000
  });
};
__WEBPACK_IMPORTED_MODULE_1_vue__["default"].prototype.$message.info = function (msg) {
  return __WEBPACK_IMPORTED_MODULE_6_bfe_ui___default.a.Message.info({
    message: msg,
    duration: 5000
  });
};
__WEBPACK_IMPORTED_MODULE_1_vue__["default"].prototype.$message.success = function (msg) {
  return __WEBPACK_IMPORTED_MODULE_6_bfe_ui___default.a.Message.success({
    message: msg,
    duration: 5000
  });
};

new __WEBPACK_IMPORTED_MODULE_1_vue__["default"](__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_8__router__["a" /* default */]
}, __WEBPACK_IMPORTED_MODULE_3__App__["default"]));

/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(40))(140);

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7920cedc_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__(261);
function injectStyle (ssrContext) {
  __webpack_require__(259)
}
var normalizeComponent = __webpack_require__(11)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7920cedc"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7920cedc_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 259:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('router-view')}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 262:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 263:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(40))(367);

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ApiLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ApiRegister; });
/* unused harmony export ApiChangePass */
/* unused harmony export Apilogout */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ApiAllAreas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ApiAmhara; });
/* unused harmony export ApiAllTypes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ApilistHelps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiAddOrUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ApilistInfos; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router__ = __webpack_require__(206);



function CheckLoginState() {
  if (!localStorage.getItem('PovertyToken')) {
    __WEBPACK_IMPORTED_MODULE_1__router__["a" /* default */].push("/");
    return false;
  }
  return true;
}

function ApiPost(url, formData) {
  formData.sessionId = localStorage.getItem('PovertyToken');
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(url, formData, { timeout: 15000, headers: { 'Content-Type': 'application/json' } });
}

var ApiLogin = function ApiLogin() {
  var formData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return ApiPost("/Api/login", formData);
};

var ApiRegister = function ApiRegister() {
  var formData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return ApiPost("/Api/regist", formData);
};

var ApiChangePass = function ApiChangePass() {
  var formData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (CheckLoginState()) {
    return ApiPost("/Api/changePass", formData);
  }
};

var Apilogout = function Apilogout() {
  var formData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (CheckLoginState()) {
    return ApiPost("/Api/logout", formData);
  }
};

var ApiAllAreas = function ApiAllAreas() {
  var formData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (CheckLoginState()) {
    return ApiPost("/Api/allAreas", formData);
  }
};

var ApiAmhara = function ApiAmhara() {
  var formData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (CheckLoginState()) {
    return ApiPost("/Api/allAreas/amhara", formData);
  }
};

var ApiAllTypes = function ApiAllTypes() {
  var formData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (CheckLoginState()) {
    return ApiPost("/Api/allTypes", formData);
  }
};

var ApilistHelps = function ApilistHelps() {
  var formData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (CheckLoginState()) {
    return ApiPost("/Api/listHelps", formData);
  }
};

var ApiAddOrUpdate = function ApiAddOrUpdate() {
  var formData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (CheckLoginState()) {
    return ApiPost("/Api/addOrUpdate", formData);
  }
};

var ApilistInfos = function ApilistInfos() {
  var formData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (CheckLoginState()) {
    return ApiPost("/Api/listInfos", formData);
  }
};

/***/ }),

/***/ 40:
/***/ (function(module, exports) {

module.exports = vendor_library;

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(40))(45);

/***/ }),

/***/ 580:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(40))(142);

/***/ }),

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_Login__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_PovertyConqueror__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_Repository__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_Repository02__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_Forum__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home__ = __webpack_require__(626);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_ErrorPage__ = __webpack_require__(635);







var routes = [{
  path: '/',
  component: __WEBPACK_IMPORTED_MODULE_0__pages_Login__["a" /* default */],
  meta: { needLogin: false }
}, {
  path: '/Login',
  component: __WEBPACK_IMPORTED_MODULE_0__pages_Login__["a" /* default */],
  meta: { needLogin: false }
}, {
  path: '/home',
  component: __WEBPACK_IMPORTED_MODULE_5__pages_home__["a" /* default */],
  meta: { needLogin: true },
  children: [{
    path: '/home/',
    redirect: '/home/PovertyConqueror'
  }, {
    path: '/home/PovertyConqueror',
    component: __WEBPACK_IMPORTED_MODULE_1__pages_PovertyConqueror__["a" /* default */],
    meta: { needLogin: true }
  }, {
    path: '/home/Repository',
    component: __WEBPACK_IMPORTED_MODULE_3__pages_Repository02__["a" /* default */],
    meta: { needLogin: true }
  }, {
    path: '/home/Repository02',
    component: __WEBPACK_IMPORTED_MODULE_2__pages_Repository__["a" /* default */],
    meta: { needLogin: true }
  }, {
    path: '/home/Forum',
    component: __WEBPACK_IMPORTED_MODULE_4__pages_Forum__["a" /* default */],
    meta: { needLogin: true }
  }, {
    path: '/home/*',
    component: __WEBPACK_IMPORTED_MODULE_6__pages_ErrorPage__["a" /* default */],
    meta: { needLogin: false }
  }]
}, {
  path: '*',
  component: __WEBPACK_IMPORTED_MODULE_6__pages_ErrorPage__["a" /* default */],
  meta: { needLogin: false }
}];

/* harmony default export */ __webpack_exports__["a"] = (routes);

/***/ }),

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Login_vue__ = __webpack_require__(207);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_738542dc_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Login_vue__ = __webpack_require__(594);
function injectStyle (ssrContext) {
  __webpack_require__(583)
}
var normalizeComponent = __webpack_require__(11)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-738542dc"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Login_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_738542dc_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Login_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 583:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 584:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DialogRegister_vue__ = __webpack_require__(208);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ac162ba2_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DialogRegister_vue__ = __webpack_require__(586);
function injectStyle (ssrContext) {
  __webpack_require__(585)
}
var normalizeComponent = __webpack_require__(11)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-ac162ba2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DialogRegister_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ac162ba2_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DialogRegister_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 585:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('bfe-dialog',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],attrs:{"title":"Register","visible":true,"size":"tiny","closeOnPressEscape":false,"closeOnClickModal":false,"show-close":false,"bfe-loading-text":"loading..."}},[_c('bfe-form',{ref:"dialogForm",attrs:{"model":_vm.dialogForm,"rules":_vm.rules,"label-width":"80px"},nativeOn:{"submit":function($event){$event.preventDefault();}}},[_c('bfe-form-item',{attrs:{"label":"Username","prop":"userName"}},[_c('bfe-input',{attrs:{"placeholder":"Please enter Username","maxlength":7},model:{value:(_vm.dialogForm.userName),callback:function ($$v) {_vm.$set(_vm.dialogForm, "userName", $$v)},expression:"dialogForm.userName"}})],1),_vm._v(" "),_c('bfe-form-item',{attrs:{"label":"Email","prop":"email"}},[_c('bfe-input',{attrs:{"placeholder":"Please enter Email"},model:{value:(_vm.dialogForm.email),callback:function ($$v) {_vm.$set(_vm.dialogForm, "email", $$v)},expression:"dialogForm.email"}})],1),_vm._v(" "),_c('bfe-form-item',{attrs:{"label":"Password","prop":"passWord"}},[_c('bfe-input',{attrs:{"type":"password","placeholder":"Please enter Password"},model:{value:(_vm.dialogForm.passWord),callback:function ($$v) {_vm.$set(_vm.dialogForm, "passWord", $$v)},expression:"dialogForm.passWord"}})],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('bfe-button',{staticClass:"button-bg",on:{"click":function($event){return _vm.$emit('onCancel')}}},[_vm._v("Cancel")]),_vm._v(" "),_c('bfe-button',{staticClass:"button-bg",on:{"click":_vm.onRegisterSubmit}},[_vm._v("Register")])],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 587:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DialogLogin_vue__ = __webpack_require__(210);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_23c2ac99_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DialogLogin_vue__ = __webpack_require__(589);
function injectStyle (ssrContext) {
  __webpack_require__(588)
}
var normalizeComponent = __webpack_require__(11)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-23c2ac99"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DialogLogin_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_23c2ac99_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DialogLogin_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 588:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 589:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('bfe-dialog',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],attrs:{"title":"Log in","visible":true,"size":"tiny","closeOnPressEscape":false,"closeOnClickModal":false,"show-close":false,"bfe-loading-text":"loading..."}},[_c('bfe-form',{ref:"dialogForm",attrs:{"model":_vm.dialogForm,"rules":_vm.rules,"label-width":"80px"},nativeOn:{"submit":function($event){$event.preventDefault();}}},[_c('bfe-form-item',{attrs:{"label":"Username","prop":"userName"}},[_c('bfe-input',{attrs:{"placeholder":"Please enter Username"},model:{value:(_vm.dialogForm.userName),callback:function ($$v) {_vm.$set(_vm.dialogForm, "userName", $$v)},expression:"dialogForm.userName"}})],1),_vm._v(" "),_c('bfe-form-item',{attrs:{"label":"Password","prop":"passWord"}},[_c('bfe-input',{attrs:{"type":"passWord","placeholder":"Please enter Password"},model:{value:(_vm.dialogForm.passWord),callback:function ($$v) {_vm.$set(_vm.dialogForm, "passWord", $$v)},expression:"dialogForm.passWord"}})],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('bfe-button',{staticClass:"button-bg",on:{"click":function($event){return _vm.$emit('onCancel')}}},[_vm._v("Cancel")]),_vm._v(" "),_c('bfe-button',{staticClass:"button-bg",on:{"click":_vm.onLoginSubmit}},[_vm._v("Log in")])],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 590:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/home01.3e51797.jpg";

/***/ }),

/***/ 591:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/home02.119b04f.jpg";

/***/ }),

/***/ 592:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/home03.814da25.jpg";

/***/ }),

/***/ 593:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/home04.a76c169.jpg";

/***/ }),

/***/ 594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"height":"100%"}},[_c('div',{staticClass:"login-text"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"login-text-content"},[_c('div',{staticClass:"login-text-empty"}),_vm._v(" "),_c('p',{staticClass:"login-text-big"},[_vm._v("Poverty Conqueror")]),_vm._v(" "),_c('p',{staticClass:"login-text-small"},[_vm._v("Provide scientific poverty alleviation programs and various supports for impoverished areas.")]),_vm._v(" "),_c('div',{staticClass:"login-but-group",staticStyle:{"position":"relative","top":"25%"}},[_c('bfe-button',{staticClass:"login-register-button",on:{"click":function($event){_vm.IsShowRegister = true}}},[_vm._v("register")]),_vm._v(" "),_c('bfe-button',{staticClass:"login-button",on:{"click":_vm.Login}},[_vm._v("Log in")])],1)])]),_vm._v(" "),_c('bfe-carousel',{staticStyle:{"height":"100%","z-index":"1","opacity":"0.4"},attrs:{"interval":3000}},_vm._l((_vm.imgList),function(item,index){return _c('bfe-carousel-item',{key:index},[_c('img',{attrs:{"src":item.src}})])}),1),_vm._v(" "),(_vm.IsShowRegister)?_c('dialog-register',{on:{"onSubmit":_vm.onRegisterSubmit,"onCancel":_vm.onRegisterCancel}}):_vm._e(),_vm._v(" "),(_vm.IsShowLogin)?_c('dialog-login',{on:{"onCancel":_vm.onLoginCancel}}):_vm._e()],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"login-text-title"},[_c('p',{staticClass:"login-text-small"},[_vm._v("Poverty Conqueror")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PovertyConqueror_vue__ = __webpack_require__(211);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_67ef60f1_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PovertyConqueror_vue__ = __webpack_require__(603);
function injectStyle (ssrContext) {
  __webpack_require__(596)
}
var normalizeComponent = __webpack_require__(11)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-67ef60f1"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PovertyConqueror_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_67ef60f1_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PovertyConqueror_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 596:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DialogDetail_vue__ = __webpack_require__(212);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2ec0f54f_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DialogDetail_vue__ = __webpack_require__(599);
function injectStyle (ssrContext) {
  __webpack_require__(598)
}
var normalizeComponent = __webpack_require__(11)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2ec0f54f"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DialogDetail_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2ec0f54f_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DialogDetail_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 598:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('bfe-dialog',{attrs:{"title":"Deatil Information","visible":true,"size":"small","show-close":true,"before-close":_vm.handleClose}},[_c('div',{staticClass:"case-item"},[_c('div',{staticClass:"case-item-title"},[_c('i'),_vm._v(_vm._s(_vm.SearchData.name)+"\n      ")])]),_vm._v(" "),_c('div',{staticClass:"case-item"},[_c('div',{staticClass:"case-item-title"},[_c('i'),_vm._v(_vm._s(_vm.SearchData.LatiLongitude)+"\n    ")])]),_vm._v(" "),_vm._l((_vm.SearchData.list),function(item,index){return _c('div',{key:index},[_c('div',{staticClass:"case-item"},[_c('div',{staticClass:"case-item-title"},[_c('i'),_vm._v(_vm._s(item.title)+"\n      ")])]),_vm._v(" "),_c('p',{staticClass:"case-item-p"},[_vm._v(_vm._s(item.intro))])])})],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AppCascader_vue__ = __webpack_require__(213);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0fdd9170_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AppCascader_vue__ = __webpack_require__(602);
function injectStyle (ssrContext) {
  __webpack_require__(601)
}
var normalizeComponent = __webpack_require__(11)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0fdd9170"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AppCascader_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0fdd9170_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AppCascader_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 601:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 602:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('bfe-cascader',{attrs:{"options":_vm.options,"expand-trigger":"hover","props":_vm.props,"placeholder":"请选择或搜索地区"},on:{"active-item-change":_vm.handleItemChange},model:{value:(_vm.selectedOptions),callback:function ($$v) {_vm.selectedOptions=$$v},expression:"selectedOptions"}})}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 603:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],staticClass:"PC-container-bg",attrs:{"bfe-loading-text":"loading..."}},[_c('div',{staticClass:"PC-div-bar"},[_c('bfe-cascader',{staticStyle:{"width":"500px"},attrs:{"placeholder":"Please select or search a area","expand-trigger":"hover","options":_vm.options,"filterable":"","clearable":""},on:{"change":_vm.changeAreaSelect},model:{value:(_vm.selectedCodes),callback:function ($$v) {_vm.selectedCodes=$$v},expression:"selectedCodes"}}),_vm._v(" "),_c('bfe-button',{staticClass:"button-bg",on:{"click":_vm.GetSearch}},[_vm._v(" Search")]),_vm._v(" "),_c('bfe-button',{staticClass:"button-bg",on:{"click":_vm.ClearSearch}},[_vm._v(" Reset")])],1),_vm._v(" "),_c('div',{staticClass:"PC-div-tag"},[_c('bfe-button',{class:{TagStyle:true, active1: _vm.Active1, noactive1: !_vm.Active1 },on:{"click":function($event){return _vm.ChoiceTip(1,_vm.Active1)}}},[_c('span',{staticClass:"PC-icon rk-icon"}),_vm._v("  High population density \n    ")]),_vm._v(" "),_c('bfe-button',{class:{TagStyle:true, active1: _vm.Active2, noactive1: !_vm.Active2 },on:{"click":function($event){return _vm.ChoiceTip(2,_vm.Active2)}}},[_c('span',{staticClass:"PC-icon rk-icon"}),_vm._v("  Low population density \n    ")])],1),_vm._v(" "),_c('div',{staticClass:"PC-div-tag"},[_c('bfe-button',{class:{TagStyle:true, active3: _vm.Active3, noactive3: !_vm.Active3 },on:{"click":function($event){return _vm.ChoiceTip(3,_vm.Active3)}}},[_c('span',{staticClass:"PC-icon td-icon"}),_vm._v("  Poor land \n    ")]),_vm._v(" "),_c('bfe-button',{class:{TagStyle:true, active3: _vm.Active4, noactive3: !_vm.Active4 },on:{"click":function($event){return _vm.ChoiceTip(4,_vm.Active4)}}},[_c('span',{staticClass:"PC-icon td-icon"}),_vm._v("  fertile land \n    ")]),_vm._v(" "),_c('bfe-button',{class:{TagStyle:true, active5: _vm.Active5, noactive5: !_vm.Active5 },on:{"click":function($event){return _vm.ChoiceTip(5,_vm.Active5)}}},[_c('span',{staticClass:"PC-icon jg-icon"}),_vm._v("  Characteristic landscape \n    ")]),_vm._v(" "),_c('bfe-button',{class:{TagStyle:true, active6: _vm.Active6, noactive6: !_vm.Active6 },on:{"click":function($event){return _vm.ChoiceTip(6,_vm.Active6)}}},[_c('span',{staticClass:"PC-icon nq-icon"}),_vm._v("  More youth \n    ")])],1),_vm._v(" "),_c('div',{staticClass:"PC-div-tag"},[_c('bfe-button',{class:{TagStyle:true, active7: _vm.Active7, noactive7: !_vm.Active7 },on:{"click":function($event){return _vm.ChoiceTip(7,_vm.Active7)}}},[_c('span',{staticClass:"PC-icon jb-icon"}),_vm._v("  High rate of disease \n    ")]),_vm._v(" "),_c('bfe-button',{class:{TagStyle:true, active8: _vm.Active8, noactive8: !_vm.Active8 },on:{"click":function($event){return _vm.ChoiceTip(8,_vm.Active8)}}},[_c('span',{staticClass:"PC-icon jy-icon"}),_vm._v("  Lack of education \n    ")]),_vm._v(" "),_c('bfe-button',{class:{TagStyle:true, active9: _vm.Active9, noactive9: !_vm.Active9 },on:{"click":function($event){return _vm.ChoiceTip(9,_vm.Active9)}}},[_c('span',{staticClass:"PC-icon jt-icon"}),_vm._v("  Traffic block\n    ")]),_vm._v(" "),_c('bfe-button',{class:{TagStyle:true, active9: _vm.Active10, noactive9: !_vm.Active10 },on:{"click":function($event){return _vm.ChoiceTip(10,_vm.Active10)}}},[_c('span',{staticClass:"PC-icon jt-icon"}),_vm._v("  Convenient transportation\n    ")])],1),_vm._v(" "),_c('transition',{attrs:{"name":"bfe-zoom-in-center"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.IsShowSearch),expression:"IsShowSearch"}],staticClass:"PC-Search"},[_c('div',{staticClass:"PC-div-fl"},[_c('div',{staticClass:"PC-divfloat"},[_c('p',{staticClass:"p-title"},[_vm._v(_vm._s(_vm.SearchData.name))]),_vm._v(" "),_c('p',{staticClass:"p-title"},[_vm._v(_vm._s(_vm.SearchData.LatiLongitude))])]),_vm._v(" "),_c('div',{staticClass:"divline"}),_vm._v(" "),_c('div',{staticClass:"PC-title"},[_c('bfe-select',{on:{"change":_vm.TypeChnage},model:{value:(_vm.SearchData.Type),callback:function ($$v) {_vm.$set(_vm.SearchData, "Type", $$v)},expression:"SearchData.Type"}},_vm._l((_vm.TypeList),function(item){return _c('bfe-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}),1)],1),_vm._v(" "),_c('div',{staticStyle:{"position":"relative"}},[_c('div',{staticClass:"PC-detail"},[_c('p',{staticClass:"p-content"},[_vm._v(_vm._s(_vm.SearchData.intro))])]),_vm._v(" "),_c('div',{staticClass:"PC-button"},[_c('bfe-button',{staticClass:"MoreMes",on:{"click":function($event){_vm.caseVisible = true}}},[_vm._v("View Details")])],1)])]),_vm._v(" "),_c('div',{staticClass:"PC-div-fm"},[_c('div',{ref:"radardiv",staticStyle:{"height":"400px"}}),_vm._v(" "),_c('div',{staticClass:"clear",staticStyle:{"height":"1px"}})]),_vm._v(" "),_c('div',{staticClass:"PC-div-fr"},[_c('div',{staticClass:"PC-divfloat"}),_vm._v(" "),_c('div',{staticClass:"divline",staticStyle:{"float":"right"}}),_vm._v(" "),_c('div',{staticClass:"clear",staticStyle:{"height":"70px"}}),_vm._v(" "),_c('button',{staticClass:"Rep-button",on:{"click":_vm.GetSolutions}},[_c('span',{staticClass:"Rep-button-span1"}),_vm._v("\n            Generate solutions  \n          "),_c('span',{staticClass:"Rep-button-span2"})])]),_vm._v(" "),_c('div',{staticClass:"clear"})])]),_vm._v(" "),(_vm.caseVisible)?_c('dialog-detail',{attrs:{"SearchData":_vm.SearchAllData},on:{"onCancel":function($event){_vm.caseVisible = false}}}):_vm._e(),_vm._v(" "),_c('div',{staticClass:"clear"})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 604:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Repository_vue__ = __webpack_require__(214);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_eb5f02f8_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Repository_vue__ = __webpack_require__(608);
function injectStyle (ssrContext) {
  __webpack_require__(605)
}
var normalizeComponent = __webpack_require__(11)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-eb5f02f8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Repository_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_eb5f02f8_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Repository_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 605:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 606:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 607:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('bfe-dialog',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],attrs:{"title":"Post help information","visible":true,"size":"tiny","closeOnPressEscape":false,"closeOnClickModal":false,"show-close":false,"bfe-loading-text":"loading..."}},[_c('bfe-form',{attrs:{"model":_vm.dialogForm,"label-width":"120px"},nativeOn:{"submit":function($event){$event.preventDefault();}}},[_c('bfe-form-item',{attrs:{"label":"Title"}},[_c('bfe-input',{model:{value:(_vm.dialogForm.titleName),callback:function ($$v) {_vm.$set(_vm.dialogForm, "titleName", $$v)},expression:"dialogForm.titleName"}})],1),_vm._v(" "),_c('bfe-form-item',{attrs:{"label":"Posting agency"}},[_c('bfe-input',{model:{value:(_vm.dialogForm.createUser),callback:function ($$v) {_vm.$set(_vm.dialogForm, "createUser", $$v)},expression:"dialogForm.createUser"}})],1),_vm._v(" "),_c('bfe-form-item',{attrs:{"label":"Area"}},[_c('bfe-cascader',{attrs:{"disabled":"","options":_vm.AreaOptions},model:{value:(_vm.dialogForm.codes),callback:function ($$v) {_vm.$set(_vm.dialogForm, "codes", $$v)},expression:"dialogForm.codes"}})],1),_vm._v(" "),_c('bfe-form-item',{attrs:{"label":"Type"}},[_c('bfe-select',{attrs:{"disabled":""},model:{value:(_vm.dialogForm.busId),callback:function ($$v) {_vm.$set(_vm.dialogForm, "busId", $$v)},expression:"dialogForm.busId"}},_vm._l((_vm.TypeOptions),function(item){return _c('bfe-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}),1)],1),_vm._v(" "),_c('bfe-form-item',{attrs:{"label":"Date"}},[_c('bfe-date-picker',{attrs:{"disabled":"","format":"yyyy/MM/dd","editable":false},model:{value:(_vm.dialogForm.pubDate),callback:function ($$v) {_vm.$set(_vm.dialogForm, "pubDate", $$v)},expression:"dialogForm.pubDate"}})],1),_vm._v(" "),_c('bfe-form-item',{attrs:{"label":"Introduction"}},[_c('bfe-input',{model:{value:(_vm.dialogForm.shortTitle),callback:function ($$v) {_vm.$set(_vm.dialogForm, "shortTitle", $$v)},expression:"dialogForm.shortTitle"}})],1),_vm._v(" "),_c('bfe-form-item',{attrs:{"label":"Contents"}},[_c('bfe-input',{staticStyle:{"width":"88%"},attrs:{"type":"textarea","maxlength":500},model:{value:(_vm.dialogForm.content),callback:function ($$v) {_vm.$set(_vm.dialogForm, "content", $$v)},expression:"dialogForm.content"}})],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('bfe-button',{staticClass:"button-bg",on:{"click":function($event){return _vm.$emit('onCancel')}}},[_vm._v("Cancel")]),_vm._v(" "),_c('bfe-button',{staticClass:"button-bg",on:{"click":_vm.AddOrUpdateSubmit}},[_vm._v("Submit")])],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 608:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],attrs:{"bfe-loading-text":"loading..."}},[_c('div',{staticClass:"divline margintop20"}),_vm._v(" "),_c('div',{staticStyle:{"padding":"10px 30px"}},[_c('div',{staticStyle:{"float":"left","width":"30%"}},[_c('div',{staticClass:"divmenu-vertical"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"divmenuitem-vertical"},[_c('bfe-menu',{staticClass:"bfe-menu-vertical-demo",attrs:{"default-active":_vm.menuactive1,"text-color":"#000","active-text-color":"#F9DB49"}},[_c('bfe-menu-item',{attrs:{"index":"1"},on:{"click":function($event){_vm.showRepository=true;_vm.menuactiveName1='Animal husbandry'}}},[_c('div',{staticClass:"Rep-case-item",attrs:{"title":"Animal husbandry"}},[_c('i'),_vm._v("Animal husbandry\n              ")])]),_vm._v(" "),_c('bfe-menu-item',{attrs:{"index":"2"},on:{"click":function($event){_vm.showRepository=true;_vm.menuactiveName1='Farming industry'}}},[_c('div',{staticClass:"Rep-case-item",attrs:{"title":"Farming industry"}},[_c('i'),_vm._v("Farming industry\n              ")])]),_vm._v(" "),_c('bfe-menu-item',{attrs:{"index":"3"},on:{"click":function($event){_vm.showRepository=true;_vm.menuactiveName1='Breeding industry'}}},[_c('div',{staticClass:"Rep-case-item",attrs:{"title":"Breeding industry"}},[_c('i'),_vm._v("Breeding industry\n              ")])])],1)],1)]),_vm._v(" "),_c('div',{staticClass:"divmenu-vertical",staticStyle:{"margin-top":"22px"}},[_vm._m(1),_vm._v(" "),_c('div',{staticClass:"divmenuitem-vertical"},[_c('bfe-menu',{staticClass:"bfe-menu-vertical-demo",staticStyle:{"height":"230px"},attrs:{"default-active":_vm.menuactive2,"text-color":"#000","active-text-color":"#F9DB49"}},[_c('bfe-menu-item',{attrs:{"index":"1"},on:{"click":function($event){_vm.showRepository=true;_vm.menuactiveName2='The case of eighteen holes village'}}},[_c('div',{staticClass:"Rep-case-item",attrs:{"title":"The case of eighteen holes village"}},[_c('i'),_vm._v("The case of eighteen holes village\n              ")])]),_vm._v(" "),_c('bfe-menu-item',{attrs:{"index":"2"},on:{"click":function($event){_vm.showRepository=true;_vm.menuactiveName2='The case of xiaogang village'}}},[_c('div',{staticClass:"Rep-case-item",attrs:{"title":"The case of xiaogang village"}},[_c('i'),_vm._v("The case of xiaogang village\n              ")])]),_vm._v(" "),_c('bfe-menu-item',{attrs:{"index":"3"},on:{"click":function($event){_vm.showRepository=true;_vm.menuactiveName2='The case of Luodian village'}}},[_c('div',{staticClass:"Rep-case-item",attrs:{"title":"The case of Luodian village"}},[_c('i'),_vm._v("The case of Luodian village\n              ")])])],1)],1)])]),_vm._v(" "),_c('div',{staticStyle:{"float":"left","width":"70%","padding-left":"80px"}},[_c('div',{staticClass:"divmenu",staticStyle:{"height":"490px","width":"95%"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.showRepository),expression:"!showRepository"}]},[_c('p',{staticClass:"ptext"},[_vm._v("To choose")])]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showRepository),expression:"showRepository"}]},[_c('p',{staticClass:"ptitle"},[_vm._v(" ")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.menuactiveName1!=''),expression:"menuactiveName1!=''"}]},[_c('p',{staticClass:"ptitle"},[_vm._v(_vm._s(_vm.menuactiveName1))]),_vm._v(" "),_c('p',{staticClass:"ptext"},[_vm._v("We will provide scientific programs to assist agriculture in poor areas And all the support")]),_vm._v(" "),_c('p',{staticClass:"ptext"},[_vm._v("provide scientific programs to assist agriculture")]),_vm._v(" "),_c('p',{staticClass:"ptext"},[_vm._v("in poor areas And all the support")]),_vm._v(" "),_c('p',{staticClass:"ptext"},[_vm._v("We will provide scientific programs to assist agriculture in poor areas")])]),_vm._v(" "),_c('p',{staticClass:"ptitle"},[_vm._v(" ")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.menuactiveName2!=''),expression:"menuactiveName2!=''"}]},[_c('p',{staticClass:"ptitle"},[_vm._v(_vm._s(_vm.menuactiveName2))]),_vm._v(" "),_c('p',{staticClass:"ptext"},[_vm._v("We will provide scientific programs to assist agriculture in poor areas And all the support")]),_vm._v(" "),_c('p',{staticClass:"ptext"},[_vm._v("provide scientific programs to assist agriculture")]),_vm._v(" "),_c('p',{staticClass:"ptext"},[_vm._v("in poor areas And all the support")]),_vm._v(" "),_c('p',{staticClass:"ptext"},[_vm._v("We will provide scientific programs to assist agriculture in poor areas")])])])])]),_vm._v(" "),_c('div',{staticStyle:{"clear":"both"}})]),_vm._v(" "),_c('div',{staticClass:"divline margintop20"}),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('div',{staticStyle:{"height":"100px","line-height":"100px","text-align":"center"}},[_c('bfe-button',{staticClass:"solutions-button button40",on:{"click":_vm.PostMessage}},[_c('span',{staticClass:"span1"}),_vm._v("  Post Message   "),_c('span',{staticClass:"span2"})])],1),_vm._v(" "),(_vm.dialogShow)?_c('dialog-forum-add-soulutions',{attrs:{"AreaOptions":_vm.AreaOptions},on:{"onSubmit":_vm.onAddSubmit,"onCancel":_vm.onCancel}}):_vm._e()],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"divmenuleft"},[_c('div',{staticClass:"divmenutitle-vertical"},[_vm._v("Industry Recommended")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"divmenuleft"},[_c('div',{staticClass:"divmenutitle-vertical"},[_vm._v("Policy Recommendations")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"clear"},[_c('div',{staticStyle:{"float":"left","width":"33%","padding":"10px 30px"}},[_c('div',{staticClass:"divmenu"},[_c('div',{staticClass:"divmenutitle"},[_vm._v("Financial Solutions Recommend")]),_vm._v(" "),_c('div',{staticClass:"divmenuitem"},[_c('p',{staticClass:"ptitle-Recommend"},[_vm._v("Bank of china")]),_vm._v(" "),_c('p',{staticClass:"ptext"},[_vm._v("We will provide scientific programs to assist agriculture in poor areas And all the support")])])])]),_vm._v(" "),_c('div',{staticStyle:{"float":"left","width":"33%","padding":"10px 30px"}},[_c('div',{staticClass:"divmenu"},[_c('div',{staticClass:"divmenutitle"},[_vm._v("Charity Recommend")]),_vm._v(" "),_c('div',{staticClass:"divmenuitem"},[_c('p',{staticClass:"ptitle-Recommend"},[_vm._v("China Charity Federatio")]),_vm._v(" "),_c('p',{staticClass:"ptext"},[_vm._v("We will provide scientific programs to assist agriculture in poor areas And all the support")])])])]),_vm._v(" "),_c('div',{staticStyle:{"float":"left","width":"33%","padding":"10px 30px"}},[_c('div',{staticClass:"divmenu"},[_c('div',{staticClass:"divmenutitle"},[_vm._v("Technology Company Recommend")]),_vm._v(" "),_c('div',{staticClass:"divmenuitem"},[_c('p',{staticClass:"ptitle-Recommend"},[_vm._v("The mushroom cultivation")]),_vm._v(" "),_c('p',{staticClass:"ptext"},[_vm._v("We will provide scientific programs to assist agriculture in poor areas And all the support")])])])]),_vm._v(" "),_c('div',{staticStyle:{"clear":"both"}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 609:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Repository02_vue__ = __webpack_require__(218);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_eb9aad42_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Repository02_vue__ = __webpack_require__(618);
function injectStyle (ssrContext) {
  __webpack_require__(610)
}
var normalizeComponent = __webpack_require__(11)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-eb9aad42"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Repository02_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_eb9aad42_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Repository02_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 610:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 611:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DialogPolicy_vue__ = __webpack_require__(219);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_368864fc_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DialogPolicy_vue__ = __webpack_require__(613);
function injectStyle (ssrContext) {
  __webpack_require__(612)
}
var normalizeComponent = __webpack_require__(11)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-368864fc"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DialogPolicy_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_368864fc_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DialogPolicy_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 612:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 613:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('bfe-dialog',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],attrs:{"title":_vm.PolicyData.DeatilTitle,"visible":true,"size":"small","closeOnPressEscape":false,"closeOnClickModal":false,"show-close":true,"before-close":_vm.handleClose,"bfe-loading-text":"loading..."}},[_c('div',{staticClass:"case-item"},[_c('div',{staticClass:"case-item-title"},[_c('i'),_vm._v("\n      "+_vm._s(_vm.PolicyData.title)+"\n    ")])]),_vm._v(" "),_c('div',{staticStyle:{"max-height":"500px","overflow":"auto"}},_vm._l((_vm.PolicyData.content),function(item,index){return _c('p',{key:index,staticClass:"case-item-p"},[_vm._v(_vm._s(item))])}),0)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DialogIndustry_vue__ = __webpack_require__(220);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_10fcb7f0_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DialogIndustry_vue__ = __webpack_require__(616);
function injectStyle (ssrContext) {
  __webpack_require__(615)
}
var normalizeComponent = __webpack_require__(11)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-10fcb7f0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DialogIndustry_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_10fcb7f0_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DialogIndustry_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 615:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 616:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('bfe-dialog',{attrs:{"title":_vm.DetailData.DeatilTitle,"width":"30%","visible":true,"size":"big","show-close":true,"before-close":_vm.handleClose}},[(_vm.selectIndex===0)?[_c('div',{staticClass:"case-item"},[_c('div',{staticClass:"case-item-title"},[_c('i'),_vm._v("\n        Recommended breeding industry\n      ")])]),_vm._v(" "),_c('bfe-table',{staticStyle:{"width":"100%"},attrs:{"data":_vm.DetailData.list,"highlight-current-row":"","border":"","tooltip-effect":"dark"}},[_c('bfe-table-column',{attrs:{"prop":"name","label":"Name","sortable":""}}),_vm._v(" "),_c('bfe-table-column',{attrs:{"prop":"nickName","label":"Chinese Name","show-overflow-tooltip":""}}),_vm._v(" "),_c('bfe-table-column',{attrs:{"prop":"temperature","label":"Temperature","show-overflow-tooltip":""}}),_vm._v(" "),_c('bfe-table-column',{attrs:{"prop":"airHumidity","label":"AirHumidity","show-overflow-tooltip":""}}),_vm._v(" "),_c('bfe-table-column',{attrs:{"prop":"product","label":"product","show-overflow-tooltip":""}}),_vm._v(" "),_c('div',{staticStyle:{"margin":"20px"},attrs:{"slot":"empty"},slot:"empty"},[_c('div',{staticStyle:{"color":"rgb(130, 94, 98)"}},[_vm._v("Empty data")])])],1),_vm._v(" "),_c('div',{staticStyle:{"height":"50px"}})]:_vm._e(),_vm._v(" "),(_vm.selectIndex===1)?[_c('div',{staticClass:"case-item"},[_c('div',{staticClass:"case-item-title"},[_c('i'),_vm._v("\n        Recommended crops\n      ")])]),_vm._v(" "),_c('bfe-table',{directives:[{name:"show",rawName:"v-show",value:(_vm.selectIndex===1),expression:"selectIndex===1"}],ref:"sortTable",staticStyle:{"width":"100%"},attrs:{"data":_vm.DetailData.list,"highlight-current-row":"","border":"","tooltip-effect":"dark"}},[_c('bfe-table-column',{attrs:{"prop":"name","label":"Name","sortable":""}}),_vm._v(" "),_c('bfe-table-column',{attrs:{"prop":"nickName","label":"Chinese Name","show-overflow-tooltip":""}}),_vm._v(" "),_c('bfe-table-column',{attrs:{"prop":"temperature","label":"Temperature","show-overflow-tooltip":""}}),_vm._v(" "),_c('bfe-table-column',{attrs:{"prop":"annualRainfall","label":"AnnualRainfall","show-overflow-tooltip":""}}),_vm._v(" "),_c('bfe-table-column',{attrs:{"prop":"lightDuration","label":"LightDuration","show-overflow-tooltip":""}}),_vm._v(" "),_c('bfe-table-column',{attrs:{"prop":"soilPh","label":"SoilPh","show-overflow-tooltip":""}}),_vm._v(" "),_c('bfe-table-column',{attrs:{"prop":"soilMoisture","label":"SoilMoisture","show-overflow-tooltip":""}}),_vm._v(" "),_c('bfe-table-column',{attrs:{"prop":"airRelativeHumidity","label":"AirRelativeHumidity","show-overflow-tooltip":""}}),_vm._v(" "),_c('bfe-table-column',{attrs:{"prop":"product","label":"product","show-overflow-tooltip":""}}),_vm._v(" "),_c('div',{staticStyle:{"margin":"20px"},attrs:{"slot":"empty"},slot:"empty"},[_c('div',{staticStyle:{"color":"rgb(130, 94, 98)"}},[_vm._v("Empty data")])])],1),_vm._v(" "),_c('div',{staticStyle:{"height":"50px"}})]:_vm._e(),_vm._v(" "),_c('div',[_c('p',{staticClass:"case-item-p"},[_vm._v(_vm._s(_vm.DetailData.reason))])])],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 617:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ststicCarouselData2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ststicCarouselData3; });
var ststicCarouselData2 = [{
  DeatilTitle: "Policy Recommend",
  title: "Dawan Village, Huashi Township, Jinzhai County, Anhui Province",
  short: "Dawan Village was once one of the 71 key poverty-stricken villages in Jinzhai, with a poverty incidence rate exceeding 20%. In 2015, the nationwide fight against poverty began in an all-round way...",
  content: ["Dawan Village was once one of the 71 key poverty-stricken villages in Jinzhai, with a poverty incidence rate exceeding 20%. In 2015, the nationwide fight against poverty began in an all-round way. Dawan Village is located at the foot of Mazongling Mountain, a national nature reserve, which confirmed the development of rural tourism and started the transformation of Dawan Village.", "Lu'an Guapian is one of the top ten famous teas in China, and its producing area is in Jinzhai County. In 2016, Dawan Village won a poverty alleviation fund and built a 4,524 square meter Dawan tea factory in the village. Before and after the Gu Yu, the 4,000-mu tea garden in Dawan Village was fragrant. Every this season, at 7:30 in the morning, Chen Zeshen got on his bicycle and set off from his home. It took less than 10 minutes to reach the tea factory.", "In 2018, Dawan Village officially got out of poverty. Per capita disposable income increased from 7,120 yuan in 2015 to 14,236 yuan in 2019. In the 4 resettlement sites for poverty alleviation and relocation, 129 households with 439 people were resettled, including 62 households with 201 people living in poverty.", "Introduce social capital to develop rural tourism", "\"Grow tea on the mountain and welcome guests at home.\" In order to develop the rural tourism industry, Dawan Village introduced enterprises and built 26 boutique guest houses. In 2018, Dawan Village introduced social capital to build infrastructure for drifting in the village. On August 8th last year, Dawan Drifting was officially opened for business. With a 180-meter water drop and a 10-mile drift, the coastal scenery passed by the current one by one, which also attracted more guests to this deep mountain village.", "People outside entered the village, and wanderers from a foreign land also returned. Some villagers who go out to work choose to return to their hometowns to open a farmhouse, both psychologically and income are more stable than working outside. Dawan Village has really made a \"travel business card\", and it has also enabled countless villagers to realize their dreams of employment at their doorsteps.", "In 2020, the number of transit tourists in Dawan Village reached more than 350,000, which really gave the villagers of Dawan Village a \"tourism meal.\""]
}, {
  DeatilTitle: "Policy Recommend",
  title: "Longgun Village, Wanning City, Hainan Province, China",
  short: "Before, Longgun Town had 32 urban minimum living guarantee households with 59 people; rural minimum living guarantee households had 1022 households with 1320 people; and the five guarantees in rural areas supported 125 people...",
  content: ["Before, Longgun Town had 32 urban minimum living guarantee households with 59 people; rural minimum living guarantee households had 1022 households with 1320 people; and the five guarantees in rural areas supported 125 people.", "Longgun Town has been growing pineapples for more than 30 years. Since the introduction of Bali pineapples in 1984, pineapples have taken root and grown in this hot soil. Longgun has also become the largest pineapple production base in Wanning City. After many years, Longgun Pineapple gradually went out of Wanning, Hainan, broke into the world, and created the \"Dragon Pineapple\" brand all the way.", "However, with the intensification of market competition and the expansion of planting areas, the profits of the pineapple industry have gradually been compressed and the forest land has turned into sand dunes. The enthusiasm of farmers and the quality of pineapple have been affected. To this end, Longgun Town promotes new technologies such as ridge planting, film mulching, stalk picking, manual weed removal, integrated fertilization of water and fertilizer, etc., and introduces new varieties such as golden pineapple and Tainong series to make \"longroll pineapple\" The industry is taking it to the next level.", "In October 2019, the Wanning Lvlong Planting Professional Cooperative adopted the development model of \"cooperative + farmers\" and tried to plant jackfruit in a new type of ecological interplanting in pineapple fields. After 8 months of careful management, the fruit seedlings and saplings of the new ecological interplanting base of pineapple and jackfruit of 150 acres are growing well.", "On July 6, 2020, on Tiantianling, a group of villagers from Duanxi Village Committee of Duanxi Village, Longgun Town, Wanning City, a 150-mu pineapple field grown by a cooperative was growing well with jackfruit. This is also the first attempt in Longgun Town to explore a new ecological interplanting model of pineapple and jackfruit, and it has achieved initial success.", "Both pineapple and jackfruit are grown at the same time, and the two can be interplanted without wasting time and land. He has been following the jackfruit industry for at least 12 years. From its planting, management, sales and deep processing, he has traveled all over the island. It was not until last year that he started professionally planting jackfruit on circulation sites. In the process of management and protection, the ecological interplanting project helped an orphan and a poor household in the local area to find employment. At the same time, the farmers participating in planting are taught to master the key points of interplanting technology, as well as technical specifications such as fertilization and spraying. The next step is to put time on the sales and logistics after the later collection, so that the fruit is produced and sold smoothly.", "Among the 100 employees, 91 impoverished households have all been lifted out of poverty. This is the poverty alleviation achievement of the Wanning Jimin Fruit and Vegetable Production and Marketing Cooperative, and it is also the epitome of the Longgun Pineapple Industry's contribution to poverty alleviation."]
}, {
  DeatilTitle: "Policy Recommend",
  title: "Sanhe Village, Sanchahe Town, Zhaojue County, Liangshan Yi Autonomous Prefecture, Sichuan Province",
  short: "Sanhe Village, located in the southwest of Zhaojue County, is a typical Yi village in the hinterland of Daliang Mountain.. The average altitude here is 2,520 meters. It is an alpine mountainous area...",
  content: ["Sanhe Village, located in the southwest of Zhaojue County, is a typical Yi village in the hinterland of Daliang Mountain. The average altitude here is 2,520 meters. It is an alpine mountainous area. The village has 4 communes including Aki, Loda, Guar, and Day, with a total population of 1,698, most of whom live in low and dilapidated adobe houses. The main source of income of the village is the cultivation of corn and potatoes, and the incidence of poverty is 46.47%.", "In the fight against poverty, Sanhe Village vigorously develops planting and breeding, cultural and tourism industries. The whole village has 3,300 mu of potato planting, and the average income of impoverished households has increased by more than 2500 yuan; the prickly ash plantation has increased by more than 15,000 yuan. At the same time, through breeding poultry, Wujin sows, Simmental cattle and so on. In the village, the beekeeping industry has also been developed, and the farming scale of 5000 boxes has been formed. In addition, industries such as walnut and Yunmuxiang have further boosted the income of the villagers."]
}];

var ststicCarouselData3 = [{
  DeatilTitle: "Financial support",
  title: "Bank of China ：Jiangxi Special Bank of China Yishang Yihuitong Personal Poverty Alleviation Loan",
  short: "In accordance with the principle of \"innovating financial products and focusing on targeted poverty alleviation\", integrating internal and external resources, based on a full-platform online application and approval module for poverty alleviation enterprises launched by our bank's \"Yihuitong\" mobile app...",
  content: ["In accordance with the principle of \"innovating financial products and focusing on targeted poverty alleviation\", integrating internal and external resources, based on a full-platform online application and approval module for poverty alleviation enterprises launched by our bank's \"Yihuitong\" mobile app. The above content is for your reference. Please refer to the announcement on the official website of Bank of China for the latest business changes. If you have any questions, please feel free to consult or download and use the consultation and handle related business."]
}, {
  DeatilTitle: "Charity support",
  title: "China Foundation for Poverty Alleviation：Rural Industry Development Project",
  short: "Coffee Industry Poverty Alleviation Project；The company's three major business areas: equipment leasing, labor export, and engineering construction.The charity future project helps young people to develop and imagine the future of charity...",
  content: ["Coffee Industry Poverty Alleviation Project；", "The company's three major business areas: equipment leasing, labor export, and engineering construction;", "The charity future project helps young people to develop and imagine the future of charity. It aims to integrate social resources, support the development of college public welfare organizations, and encourage college students to participate in public welfare. Encourage young people to explore solutions to social problems in innovative ways, so that they can become a new generation of young people with creativity, mobility and social responsibility, and create a better social future."]
}, {
  DeatilTitle: "Technical support",
  title: "Discussion on Coffee-Rubber and Macadamia Three-dimensional Interplanting Model",
  short: "Three-dimensional coffee planting in Dehong has higher benefits, including coffee planting rubber and coffee planting macadamia nuts. Selection of good disease-resistant varieties is the prerequisite for high yield of coffee interplanting. Timely interplanting and reasonable dense planting are the key to high yield of coffee interplanting...",
  content: ["Three-dimensional coffee planting in Dehong has higher benefits, including coffee planting rubber and coffee planting macadamia nuts. Selection of good disease-resistant varieties is the prerequisite for high yield of coffee interplanting. Timely interplanting and reasonable dense planting are the key to high yield of coffee interplanting. Reasonable fertilization is the key to high yield of coffee interplanting. Comprehensive prevention and control of diseases and insect pests is the guarantee for high yield and high efficiency of coffee interplanting."]
}];

/***/ }),

/***/ 618:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],staticStyle:{"padding":"10px 50px 50px 50px"},attrs:{"bfe-loading-text":"loading..."}},[_c('div',{staticStyle:{"height":"60px"}},[_c('button',{staticClass:"Rep-button",staticStyle:{"float":"right"},on:{"click":_vm.PostMessage}},[_c('span',{staticClass:"Rep-button-span1"}),_vm._v("  Post Message  "),_c('span',{staticClass:"Rep-button-span2"})])]),_vm._v(" "),_c('div',{staticStyle:{"min-width":"1000px"}},[_c('div',{staticClass:"RepLeft Rep"},[_c('table',[_c('tr',[_vm._m(0),_vm._v(" "),_c('td',[_c('div',{staticClass:"Rep-contant"},[_c('bfe-carousel',{staticStyle:{"height":"180px"},attrs:{"interval":3000,"autoplay":!_vm.DialogPolicyShow1},on:{"change":_vm.carouselChange1}},_vm._l((_vm.carouselData1),function(item,index){return _c('bfe-carousel-item',{key:index},[_c('span',{staticClass:"Rep-contant-title"},[_vm._v(_vm._s(item.title))]),_vm._v(" "),_c('div',{staticClass:"Rep-contant-contant"},[_vm._v(_vm._s(item.reason.substring(0,200) + "..."))])])}),1),_vm._v(" "),_c('button',{staticClass:"Rep-button",on:{"click":function($event){_vm.DialogPolicyShow1 = true}}},[_vm._v(" Show more information ")])],1)])])])]),_vm._v(" "),_c('div',{staticClass:"RepRight Rep"},[_c('table',[_c('tr',[_vm._m(1),_vm._v(" "),_c('td',[_c('div',{staticClass:"Rep-contant"},[_c('bfe-carousel',{staticStyle:{"height":"180px"},attrs:{"interval":3000,"autoplay":!_vm.DialogPolicyShow2},on:{"change":_vm.carouselChange2}},_vm._l((_vm.carouselData2),function(item,index){return _c('bfe-carousel-item',{key:index},[_c('span',{staticClass:"Rep-contant-title"},[_vm._v(_vm._s(item.title))]),_vm._v(" "),_c('div',{staticClass:"Rep-contant-contant"},[_vm._v(_vm._s(item.short))])])}),1),_vm._v(" "),_c('button',{staticClass:"Rep-button",on:{"click":function($event){_vm.DialogPolicyShow2 = true}}},[_vm._v(" Show more information ")])],1)])])])]),_vm._v(" "),_c('div',{staticStyle:{"clear":"both","height":"50px"}})]),_vm._v(" "),_c('div',{staticClass:"Rep-foot"},[_c('div',{staticClass:"Rep-foot-title"},[_c('span',[_vm._v(_vm._s(_vm.carouselDataAct3.DeatilTitle))])]),_vm._v(" "),_c('div',{staticClass:"Rep-foot-bottom"},[_c('bfe-carousel',{staticStyle:{"height":"280px"},attrs:{"interval":3000,"type":"card","autoplay":!_vm.DialogPolicyShow3},on:{"change":_vm.carouselChange3}},_vm._l((_vm.carouselData3),function(item,index){return _c('bfe-carousel-item',{key:index},[_c('div',{staticClass:"Rep-foot-subtitle"},[_vm._v(_vm._s(item.title))]),_vm._v(" "),_c('div',{staticClass:"Rep-foot-contant"},[_vm._v(_vm._s(item.short)+"\n      ")])])}),1),_vm._v(" "),_c('button',{staticClass:"Rep-button",on:{"click":function($event){_vm.DialogPolicyShow3 = true}}},[_vm._v(" Show more information ")])],1)]),_vm._v(" "),(_vm.SoulutionShow)?_c('dialog-forum-add-soulutions',{attrs:{"codes":_vm.codes},on:{"onSubmit":function($event){_vm.SoulutionShow=false},"onCancel":function($event){_vm.SoulutionShow=false}}}):_vm._e(),_vm._v(" "),(_vm.DialogPolicyShow1)?_c('dialog-industry',{attrs:{"DetailData":_vm.carouselDataAct1,"selectIndex":_vm.Active1},on:{"onCancel":function($event){_vm.DialogPolicyShow1 = false;}}}):_vm._e(),_vm._v(" "),(_vm.DialogPolicyShow2)?_c('dialog-policy',{attrs:{"PolicyData":_vm.carouselDataAct2},on:{"onCancel":function($event){_vm.DialogPolicyShow2 = false;}}}):_vm._e(),_vm._v(" "),(_vm.DialogPolicyShow3)?_c('dialog-policy',{attrs:{"PolicyData":_vm.carouselDataAct3},on:{"onCancel":function($event){_vm.DialogPolicyShow3 = false}}}):_vm._e()],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('div',{staticClass:"Rep-bar"},[_c('span',{staticClass:"Rep-bar-title"},[_vm._v("Industry Recommend")]),_vm._v(" "),_c('span',{staticClass:"Rep-bar-subtitle"},[_vm._v("Introduction of the industry")]),_vm._v(" "),_c('span',{staticClass:"Rep-bar-subtitle"},[_vm._v("Recommend")]),_vm._v(" "),_c('span',{staticClass:"Rep-bar-circle"})])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('div',{staticClass:"Rep-bar"},[_c('span',{staticClass:"Rep-bar-title"},[_vm._v("Case Recommendation")]),_vm._v(" "),_c('span',{staticClass:"Rep-bar-subtitle"},[_vm._v("Introduction of the case")]),_vm._v(" "),_c('span',{staticClass:"Rep-bar-subtitle"},[_vm._v("recommendation")]),_vm._v(" "),_c('span',{staticClass:"Rep-bar-circle"})])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 619:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Forum_vue__ = __webpack_require__(221);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_603213ae_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Forum_vue__ = __webpack_require__(624);
function injectStyle (ssrContext) {
  __webpack_require__(620)
}
var normalizeComponent = __webpack_require__(11)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-603213ae"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Forum_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_603213ae_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Forum_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 620:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DialogForumAdd_vue__ = __webpack_require__(222);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1b5113dd_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DialogForumAdd_vue__ = __webpack_require__(623);
function injectStyle (ssrContext) {
  __webpack_require__(622)
}
var normalizeComponent = __webpack_require__(11)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1b5113dd"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DialogForumAdd_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1b5113dd_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DialogForumAdd_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 622:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 623:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('bfe-dialog',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],attrs:{"title":"Publish information on helping the poor","visible":true,"size":"tiny","closeOnPressEscape":false,"closeOnClickModal":false,"show-close":false,"bfe-loading-text":"loading..."}},[_c('bfe-form',{attrs:{"model":_vm.dialogForm,"label-width":"120px"},nativeOn:{"submit":function($event){$event.preventDefault();}}},[_c('bfe-form-item',{attrs:{"label":"Title"}},[_c('bfe-input',{model:{value:(_vm.dialogForm.titleName),callback:function ($$v) {_vm.$set(_vm.dialogForm, "titleName", $$v)},expression:"dialogForm.titleName"}})],1),_vm._v(" "),_c('bfe-form-item',{attrs:{"label":"Posting agency"}},[_c('bfe-input',{model:{value:(_vm.dialogForm.createUser),callback:function ($$v) {_vm.$set(_vm.dialogForm, "createUser", $$v)},expression:"dialogForm.createUser"}})],1),_vm._v(" "),_c('bfe-form-item',{attrs:{"label":"Area"}},[_c('bfe-cascader',{attrs:{"expand-trigger":"hover","options":_vm.AreaOptions,"filterable":"","clearable":""},model:{value:(_vm.dialogForm.codes),callback:function ($$v) {_vm.$set(_vm.dialogForm, "codes", $$v)},expression:"dialogForm.codes"}})],1),_vm._v(" "),_c('bfe-form-item',{attrs:{"label":"Type"}},[_c('bfe-select',{attrs:{"clearable":""},model:{value:(_vm.dialogForm.busId),callback:function ($$v) {_vm.$set(_vm.dialogForm, "busId", $$v)},expression:"dialogForm.busId"}},_vm._l((_vm.TypeOptions),function(item){return _c('bfe-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}),1)],1),_vm._v(" "),_c('bfe-form-item',{attrs:{"label":"Date"}},[_c('bfe-date-picker',{attrs:{"format":"yyyy/MM/dd","editable":false,"picker-options":_vm.pickerOptions},model:{value:(_vm.dialogForm.pubDate),callback:function ($$v) {_vm.$set(_vm.dialogForm, "pubDate", $$v)},expression:"dialogForm.pubDate"}})],1),_vm._v(" "),_c('bfe-form-item',{attrs:{"label":"Introduction"}},[_c('bfe-input',{model:{value:(_vm.dialogForm.shortTitle),callback:function ($$v) {_vm.$set(_vm.dialogForm, "shortTitle", $$v)},expression:"dialogForm.shortTitle"}})],1),_vm._v(" "),_c('bfe-form-item',{attrs:{"label":"Contents"}},[_c('bfe-input',{staticStyle:{"width":"88%"},attrs:{"type":"textarea","maxlength":500},model:{value:(_vm.dialogForm.content),callback:function ($$v) {_vm.$set(_vm.dialogForm, "content", $$v)},expression:"dialogForm.content"}})],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('bfe-button',{staticClass:"button-bg",on:{"click":function($event){return _vm.$emit('onCancel')}}},[_vm._v("Cancel")]),_vm._v(" "),_c('bfe-button',{staticClass:"button-bg",on:{"click":_vm.AddOrUpdateSubmit}},[_vm._v("Submit")])],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 624:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],attrs:{"bfe-loading-text":"loading..."}},[_c('bfe-form',{ref:"form",staticClass:"formtext demo-form-inline",staticStyle:{"padding":"30px 50px 0"},attrs:{"inline":true,"label-width":"100px"}},[_c('bfe-form-item',{attrs:{"label":"Type："}},[_c('bfe-select',{attrs:{"clearable":""},model:{value:(_vm.formData.busId),callback:function ($$v) {_vm.$set(_vm.formData, "busId", $$v)},expression:"formData.busId"}},_vm._l((_vm.TypeOptions),function(item){return _c('bfe-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}),1)],1),_vm._v(" "),_c('bfe-form-item',{attrs:{"label":"Area："}},[_c('bfe-cascader',{attrs:{"expand-trigger":"hover","options":_vm.AreaOptions,"filterable":"","clearable":""},model:{value:(_vm.formData.codes),callback:function ($$v) {_vm.$set(_vm.formData, "codes", $$v)},expression:"formData.codes"}})],1),_vm._v(" "),_c('bfe-form-item',{attrs:{"label":"Title"}},[_c('bfe-input',{model:{value:(_vm.formData.titleName),callback:function ($$v) {_vm.$set(_vm.formData, "titleName", $$v)},expression:"formData.titleName"}})],1),_vm._v(" "),_c('bfe-form-item',[_c('bfe-button',{staticStyle:{"background-color":"#F9DB49"},on:{"click":_vm.onSubmit}},[_vm._v("Search")])],1),_vm._v(" "),_c('button',{staticClass:"forum-button",on:{"click":_vm.PostMessage}},[_c('span',{staticClass:"Rep-button-span1"}),_vm._v("  Post Message  "),_c('span',{staticClass:"Rep-button-span2"})]),_vm._v(" "),_c('bfe-table',{ref:"sortTable",staticStyle:{"width":"100%"},attrs:{"data":_vm.tableData,"highlight-current-row":"","border":"","tooltip-effect":"dark"},on:{"row-click":function($event){return _vm.operation('')}}},[_c('bfe-table-column',{attrs:{"label":"Index","width":"100"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._v(_vm._s((_vm.currentPage - 1) * _vm.pagesize + 1 + scope.$index))]}}])}),_vm._v(" "),_c('bfe-table-column',{attrs:{"prop":"pubDate","label":"Date","width":"120","sortable":""}}),_vm._v(" "),_c('bfe-table-column',{attrs:{"prop":"titleName","label":"Title","show-overflow-tooltip":""}}),_vm._v(" "),_c('bfe-table-column',{attrs:{"prop":"createUser","label":"Posting agency","width":"200","show-overflow-tooltip":""}}),_vm._v(" "),_c('bfe-table-column',{attrs:{"label":"Type","width":"140"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('bfe-select',{staticClass:"nospan",attrs:{"disabled":""},model:{value:(scope.row.busId),callback:function ($$v) {_vm.$set(scope.row, "busId", $$v)},expression:"scope.row.busId"}},_vm._l((_vm.TypeOptions),function(item){return _c('bfe-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}),1)]}}])}),_vm._v(" "),_c('bfe-table-column',{attrs:{"label":"Area","width":"280"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return (scope.row.codes.length > 0)?[_c('bfe-cascader',{staticClass:"nospan",attrs:{"disabled":"","expand-trigger":"hover","options":_vm.AreaOptions},model:{value:(scope.row.codes),callback:function ($$v) {_vm.$set(scope.row, "codes", $$v)},expression:"scope.row.codes"}})]:undefined}}],null,true)}),_vm._v(" "),_c('bfe-table-column',{attrs:{"prop":"shortTitle","label":"Introduction","show-overflow-tooltip":""}}),_vm._v(" "),_c('div',{staticStyle:{"margin":"20px"},attrs:{"slot":"empty"},slot:"empty"},[_c('img',{attrs:{"src":__webpack_require__(625)}}),_vm._v(" "),_c('div',{staticStyle:{"color":"rgb(130, 94, 98)"}},[_vm._v("Empty data")])])],1),_vm._v(" "),_c('bfe-pagination',{staticClass:"text-right",attrs:{"current-page":_vm.currentPage,"page-sizes":_vm.pagesizes,"page-size":_vm.pagesize,"layout":"total, sizes, prev, pager, next, jumper","total":_vm.total},on:{"size-change":_vm.handleSizeChange,"current-change":_vm.handleCurrentChange}})],1),_vm._v(" "),(_vm.dialogShow)?_c('dialog-forum-add',{attrs:{"AreaOptions":_vm.AreaOptions,"TypeOptions":_vm.TypeOptions},on:{"onSubmit":_vm.onAddSubmit,"onCancel":_vm.onCancel}}):_vm._e()],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 625:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjE2M3B4IiBoZWlnaHQ9IjExN3B4IiB2aWV3Qm94PSIwIDAgMTYzIDExNyIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU1LjIgKDc4MTgxKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4NCiAgICA8dGl0bGU+SUNPTi3mmoLml6DmlbDmja48L3RpdGxlPg0KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPg0KICAgIDxkZWZzPg0KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjUwJSIgeTE9IjAlIiB4Mj0iNTAlIiB5Mj0iMTAwJSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiPg0KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0VFRUVFRSIgb2Zmc2V0PSIwJSI+PC9zdG9wPg0KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0Q4RDhEOCIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+DQogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+DQogICAgICAgIDxmaWx0ZXIgeD0iLTYuMCUiIHk9Ii00Ni4wJSIgd2lkdGg9IjExMi4wJSIgaGVpZ2h0PSIxOTIuMCUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImZpbHRlci0yIj4NCiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjMiIGluPSJTb3VyY2VHcmFwaGljIj48L2ZlR2F1c3NpYW5CbHVyPg0KICAgICAgICA8L2ZpbHRlcj4NCiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiIGlkPSJsaW5lYXJHcmFkaWVudC0zIj4NCiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNFRUVFRUUiIG9mZnNldD0iMCUiPjwvc3RvcD4NCiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNEOEQ4RDgiIG9mZnNldD0iMTAwJSI+PC9zdG9wPg0KICAgICAgICA8L2xpbmVhckdyYWRpZW50Pg0KICAgICAgICA8ZmlsdGVyIHg9Ii05LjYlIiB5PSItNDYuMCUiIHdpZHRoPSIxMTkuMSUiIGhlaWdodD0iMTkyLjAlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJmaWx0ZXItNCI+DQogICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIzIiBpbj0iU291cmNlR3JhcGhpYyI+PC9mZUdhdXNzaWFuQmx1cj4NCiAgICAgICAgPC9maWx0ZXI+DQogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMzkuOTUwMTUyOSUiIHkxPSIzOS4xOTEzMjg4JSIgeDI9IjEwMCUiIHkyPSI2OS4yMTU5OTc4JSIgaWQ9ImxpbmVhckdyYWRpZW50LTUiPg0KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0VBRUFFQSIgb2Zmc2V0PSIwJSI+PC9zdG9wPg0KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0RERERERCIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+DQogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+DQogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMTIuMjMzNzI5OSUiIHkxPSIxMS43MTkzNzMyJSIgeDI9IjEwMCUiIHkyPSIxMDAlIiBpZD0ibGluZWFyR3JhZGllbnQtNiI+DQogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRjlGOUY5IiBvZmZzZXQ9IjAuMDIxMTE0ODY0OSUiPjwvc3RvcD4NCiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNEN0Q3RDciIHN0b3Atb3BhY2l0eT0iMC43ODg5ODA1NTEiIG9mZnNldD0iMTAwJSI+PC9zdG9wPg0KICAgICAgICA8L2xpbmVhckdyYWRpZW50Pg0KICAgIDwvZGVmcz4NCiAgICA8ZyBpZD0i57y655yB6aG16K6+6K6hIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgaWQ9IuaaguaXoOaVsOaNriIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYxNS4wMDAwMDAsIC0yODYuMDAwMDAwKSI+DQogICAgICAgICAgICA8ZyBpZD0i57yW57uELTUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYxNi4wMDAwMDAsIDI0OC4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICA8ZyBpZD0iSUNPTi3mmoLml6DmlbDmja5fZXhwb3J0Ij4NCiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IklDT04t5pqC5peg5pWw5o2uIj4NCiAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSLnn6nlvaIiIHg9IjAiIHk9IjAiIHdpZHRoPSIxNjAiIGhlaWdodD0iMTYwIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iZHJhd2VyLeaKveWxiSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNS4wMDAwMDAsIDM4LjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSLnvJbnu4QtMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDkwLjQ0NDQ0NCkiIGZpbGwtb3BhY2l0eT0iMC44MyIgb3BhY2l0eT0iMC40NTc5ODQ1NjEiPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZWxsaXBzZSBpZD0i5qSt5ZyG5b2iIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEpIiBmaWx0ZXI9InVybCgjZmlsdGVyLTIpIiBjeD0iNzUuMTY2NjY2NyIgY3k9IjkuNzc3Nzc3NzgiIHJ4PSI3NS4xNjY2NjY3IiByeT0iOS43Nzc3Nzc3OCI+PC9lbGxpcHNlPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZWxsaXBzZSBpZD0i5qSt5ZyG5b2iIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTMpIiBmaWx0ZXI9InVybCgjZmlsdGVyLTQpIiBjeD0iNzIuNzIyMjIyMiIgY3k9IjkuNzc3Nzc3NzgiIHJ4PSI0Ny4wNTU1NTU2IiByeT0iOS43Nzc3Nzc3OCI+PC9lbGxpcHNlPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTMxLjMzMjE2Niw0MC4xOTg3ODIyIEwxMzEuMzMyMTY2LDc3LjY4NjkzNjUgQzEzMS4zMzIxNjYsNzguOTQxNDc5MiAxMzAuNzA3Mzg2LDc5LjU2MTQwMDMgMTI5LjQ1NzgyNyw3OS41NjE0MDAzIEwyNC40OTA5Njk4LDc5LjU2MTQwMDMgQzIzLjI0MTQxMDMsNzkuNTYxNDAwMyAyMi42MTY1MDYsNzguOTQxNDc5MiAyMi42MTY1MDYsNzcuNjg2OTM2NSBMMjIuNjE2NTA2LDQwLjE5ODc4MjEgQzIyLjYxNjUwNiwzOS44ODYzMjk5IDIyLjY5NDQ5NDUsMzkuNjUyMTE1MyAyMi44NTA0NzE0LDM5LjQ5NTg4OTIgTDIyLjg1MDQ3MTQsMzkuMjYxNTUwMSBMMjMuMDg1NDMzMywzOS4wMjcyMTEgTDQxLjgyOTU3MjgsMTIuODY3NjAxOSBDNDIuMTQxNTI2NiwxMi4zOTkwNDgyIDQyLjYxMDMyOTQsMTIuMTY0NzA5MSA0My4yMzUyMzM3LDEyLjE2NDcwOTEgTDExMC43MTM4MTIsMTIuMTY0NzA5MSBDMTExLjMzODU5MiwxMi4xNjQ3MDkxIDExMS44MDczOTUsMTIuMzk5MDQ4MyAxMTIuMTE5MzQ4LDEyLjg2NzYwMiBMMTMwLjg2MzQ4OCwzOS4wMjcyMTExIEwxMzEuMDk4NDUsMzkuMjYxNTUwMiBMMTMxLjA5ODQ1LDM5LjQ5NTg4OTQgQzEzMS4yNTQxNzgsMzkuNjUxOTkwOSAxMzEuMzMyMTY2LDM5Ljg4NjMzIDEzMS4zMzIxNjYsNDAuMTk4NzgyMiBaIE0yOC40NzM2MTM2LDM4LjMyNDMxODMgTDYxLjk3OTEyNDIsMzguMzI0MzE4MyBDNjMuMjI4NjgzNiwzOC4zMjQzMTgzIDYzLjg1MzQ2MzQsMzguOTQ5MDk4MSA2My44NTM0NjM0LDQwLjE5ODc4MjEgQzYzLjg1MzQ2MzQsNDMuNzk2MjE3NyA2NS4xNDIwMTcxLDQ2Ljg3NjM4NzkgNjcuNzE5MjQ5LDQ5LjQ1MzYyIEM3MC4yOTY0ODEsNTIuMDMwODUxOSA3My4zODE1MTAxLDUzLjMxOTY1NDggNzYuOTc0NDYwNiw1My4zMTk2NTQ4IEM4MC41NjcyODY2LDUzLjMxOTY1NDggODMuNjUyMzE1Nyw1Mi4wMzA5NzY2IDg2LjIyOTQyMzEsNDkuNDUzNjIgQzg4LjgwNjY1NSw0Ni44NzYzODgxIDkwLjA5NTIwODcsNDMuNzk2MjE3NyA5MC4wOTUyMDg3LDQwLjE5ODc4MjEgQzkwLjA5NTIwODcsMzguOTQ5MjIyNiA5MC43MjAxMTMxLDM4LjMyNDMxODMgOTEuOTY5NjcyNSwzOC4zMjQzMTgzIEwxMjUuNDc1MDU5LDM4LjMyNDMxODMgTDEwOS43NzU5NTcsMTUuOTEzNjM2NyBMNDQuMTcxNzE4MywxNS45MTM2MzY3IEwyOC40NzM2MTM2LDM4LjMyNDMxODMgWiIgaWQ9IuW9oueKtiIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC01KSIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0i5qSt5ZyG5b2iIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTYpIiBjeD0iNjcuMjIyMjIyMiIgY3k9IjI1LjY2NjY2NjciIHI9IjYuMTExMTExMTEiPjwvY2lyY2xlPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9IuakreWchuW9oiIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC02KSIgY3g9IjkwLjQ0NDQ0NDQiIGN5PSIzLjY2NjY2NjY3IiByPSIzLjY2NjY2NjY3Ij48L2NpcmNsZT4NCiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg=="

/***/ }),

/***/ 626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_home_vue__ = __webpack_require__(223);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_93a4799e_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_home_vue__ = __webpack_require__(634);
function injectStyle (ssrContext) {
  __webpack_require__(627)
}
var normalizeComponent = __webpack_require__(11)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-93a4799e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_home_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_93a4799e_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_home_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 627:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 628:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_BocnetHeader_vue__ = __webpack_require__(224);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b27d7e62_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_BocnetHeader_vue__ = __webpack_require__(633);
function injectStyle (ssrContext) {
  __webpack_require__(629)
}
var normalizeComponent = __webpack_require__(11)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-b27d7e62"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_BocnetHeader_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b27d7e62_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_BocnetHeader_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 629:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 630:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DialogSearch_vue__ = __webpack_require__(225);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_07b7ea8f_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DialogSearch_vue__ = __webpack_require__(632);
function injectStyle (ssrContext) {
  __webpack_require__(631)
}
var normalizeComponent = __webpack_require__(11)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-07b7ea8f"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DialogSearch_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_07b7ea8f_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DialogSearch_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 631:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 632:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('bfe-dialog',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],attrs:{"title":"Search","visible":true,"size":"tiny","closeOnPressEscape":false,"closeOnClickModal":false,"show-close":false,"bfe-loading-text":"loading..."}},[_c('bfe-form',{ref:"dialogForm",attrs:{"model":_vm.dialogForm,"rules":_vm.rules,"label-width":"120px"},nativeOn:{"submit":function($event){$event.preventDefault();}}},[_c('bfe-form-item',{attrs:{"label":"Search content","prop":"SearchText"}},[_c('bfe-input',{attrs:{"placeholder":"Please enter search content"},model:{value:(_vm.dialogForm.SearchText),callback:function ($$v) {_vm.$set(_vm.dialogForm, "SearchText", $$v)},expression:"dialogForm.SearchText"}})],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('bfe-button',{staticClass:"button-bg",on:{"click":function($event){return _vm.$emit('onCancel')}}},[_vm._v("Cancel")]),_vm._v(" "),_c('bfe-button',{staticClass:"button-bg",on:{"click":_vm.onSearchSubmit}},[_vm._v("Search")])],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 633:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"header-container clear"},[_c('div',{staticClass:"float-1"},[_c('bfe-menu',{staticClass:"bfe-menu-demo",attrs:{"router":true,"default-active":_vm.activeIndex,"text-color":"#AAAFB7","active-text-color":"#f9db49","mode":"horizontal"}},[_c('bfe-menu-item',{attrs:{"index":"/home/PovertyConqueror"}},[_vm._v("Poverty Conqueror")]),_vm._v(" "),_c('bfe-menu-item',{attrs:{"index":"/home/Repository"}},[_vm._v("Repository")]),_vm._v(" "),_c('bfe-menu-item',{attrs:{"index":"/home/Forum"}},[_vm._v("Info Platform")])],1)],1),_vm._v(" "),_c('div',{staticClass:"float-2"},[_c('bfe-tooltip',{staticClass:"item",attrs:{"effect":"dark","content":"Search","placement":"bottom"}},[_c('span',{staticClass:"header-search-icon",on:{"click":function($event){_vm.IsShowSearch = true}}})]),_vm._v(" "),_c('bfe-tooltip',{staticClass:"item",attrs:{"effect":"dark","content":"Personal center","placement":"bottom"}},[_c('span',{staticClass:"header-person-icon",on:{"click":_vm.showUserInfo}})]),_vm._v(" "),_c('bfe-tooltip',{staticClass:"item",attrs:{"effect":"dark","content":"Logout","placement":"bottom"}},[_c('span',{staticClass:"header-exist-icon",on:{"click":_vm.Exist}})])],1),_vm._v(" "),_c('div',{staticStyle:{"clear":"both"}})]),_vm._v(" "),(_vm.IsShowSearch)?_c('dialog-search',{on:{"onSubmit":_vm.onSubmit,"onCancel":_vm.onCancel}}):_vm._e()],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 634:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"height":"100%"}},[_c('bocnet-header',{attrs:{"activeIndex":_vm.activeIndex}}),_vm._v(" "),_c('div',{ref:"content",staticStyle:{"overflow":"auto"}},[_c('router-view')],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 635:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ErrorPage_vue__ = __webpack_require__(226);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_40b419e5_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ErrorPage_vue__ = __webpack_require__(638);
function injectStyle (ssrContext) {
  __webpack_require__(636)
}
var normalizeComponent = __webpack_require__(11)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-40b419e5"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ErrorPage_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_40b419e5_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ErrorPage_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 636:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 637:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/error-page.099aee3.jpg";

/***/ }),

/***/ 638:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"error-page"},[_c('img',{staticStyle:{"width":"650px","height":"528px"},attrs:{"src":_vm.errorBg,"alt":""}}),_vm._v(" "),_c('div',{staticClass:"text"},[_vm._v(_vm._s(_vm.errMsg)+" ~")])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 639:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  downloadFile: function downloadFile(url) {
    var link = document.createElement("a");
    link.style.display = "none";
    link.href = url;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  },
  formatDate: function formatDate(v) {
    var date = new Date(v);
    var curYear = date.getFullYear();
    var curMonth = date.getMonth() + 1;
    var curDate = date.getDate();
    var strMonth = curMonth < 10 ? "0" + curMonth : "" + curMonth;
    var strDate = curDate < 10 ? "0" + curDate : "" + curDate;
    var day = curYear + "-" + strMonth + "-" + strDate;
    return day;
  },
  inputBranchIdLength: function inputBranchIdLength(v, n) {
    v = v.replace(/[^0-9a-zA-Z]/g, '');
    if (v.length > n) {
      v = v.slice(0, n);
    }
    return v;
  },
  inputNumberLength: function inputNumberLength(v, n) {
    v = v.replace(/\D/g, '');
    if (v.length > n) {
      v = v.slice(0, n);
    }
    return v;
  },
  inputStrLength: function inputStrLength(v, n) {
    if (v.length > n) {
      v = v.slice(0, n);
    }
    return v;
  },
  disabledPage: function disabledPage(flag) {
    var arr1 = document.getElementsByClassName("btn-prev");
    var arr2 = document.getElementsByClassName("btn-next");
    var arr3 = document.getElementsByClassName("bfe-pagination__editor");
    if (flag) {
      for (var i = 0; i < arr1.length; i++) {
        arr1[i].setAttribute("disabled", true);
      }
      for (var _i = 0; _i < arr2.length; _i++) {
        arr2[_i].setAttribute("disabled", true);
      }
      for (var _i2 = 0; _i2 < arr3.length; _i2++) {
        arr3[_i2].setAttribute("disabled", true);
      }
    } else {
      for (var _i3 = 0; _i3 < arr1.length; _i3++) {
        arr1[_i3].removeAttribute("disabled");
      }
      for (var _i4 = 0; _i4 < arr2.length; _i4++) {
        arr2[_i4].removeAttribute("disabled");
      }
      for (var _i5 = 0; _i5 < arr3.length; _i5++) {
        arr3[_i5].removeAttribute("disabled");
      }
    }
  }
});

/***/ })

},[227]);