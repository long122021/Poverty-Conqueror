<template>
  <div style="padding:10px 50px 50px 50px;" v-loading="loading" bfe-loading-text="loading...">
      <div style="height:60px;">
        <button class="Rep-button" style="float:right" @click="PostMessage">
          <span class="Rep-button-span1"></span>&nbsp;&nbsp;Post Message&nbsp;&nbsp;<span class="Rep-button-span2"></span>
        </button>
      </div>
      <div style="min-width:1000px">
        <div class="RepLeft Rep">
          <table>
            <tr>
              <td>
                <div class="Rep-bar">
                  <span class="Rep-bar-title">Industry Recommend</span>
                  <span class="Rep-bar-subtitle">Introduction of the induetry</span>
                  <span class="Rep-bar-subtitle">Recommend</span>
                  <span class="Rep-bar-circle"></span>                
                </div>
              </td>
              <td>
                <div class="Rep-contant">
                  <bfe-carousel :interval="3000" style="height:180px;" :autoplay="!DialogPolicyShow1" @change="carouselChange1">
                    <bfe-carousel-item v-for="(item,index) in carouselData1" :key="index">
                      <span class="Rep-contant-title">{{item.title}}</span>
                      <div class="Rep-contant-contant">{{item.reason.substring(0,200) + "..."}}</div>
                    </bfe-carousel-item>
                  </bfe-carousel>
                  <button class="Rep-button" @click="DialogPolicyShow1 = true"> Show more information </button>
                </div>
              </td>
            </tr>
          </table>
        </div>

        <div class="RepRight Rep">
          <table>
            <tr>
              <td>
                <div class="Rep-bar">
                  <span class="Rep-bar-title"> Policy Recommend</span>
                  <span class="Rep-bar-subtitle">Introduction of the policy</span>
                  <span class="Rep-bar-subtitle">Recommend</span>
                  <span class="Rep-bar-circle"></span>                
                </div>
              </td>
              <td>
                <div class="Rep-contant">
                  <bfe-carousel :interval="3000" style="height:180px;" :autoplay="!DialogPolicyShow2" @change="carouselChange2">
                    <bfe-carousel-item v-for="(item,index) in carouselData2" :key="index">
                      <span class="Rep-contant-title">{{item.title}}</span>
                      <div class="Rep-contant-contant">{{item.short}}</div>
                    </bfe-carousel-item>
                  </bfe-carousel>
                  <button class="Rep-button"  @click="DialogPolicyShow2 = true"> Show more information </button>
                </div>
              </td>
            </tr>
          </table>
        </div>

      <div style="clear:both;height:50px;"></div>
    </div>

    <div class="Rep-foot">
      <div class="Rep-foot-title">
        <span>{{carouselDataAct3.DeatilTitle}}</span>
      </div>
      <div class="Rep-foot-bottom">
        <bfe-carousel :interval="3000" type="card" style="height:280px;" :autoplay="!DialogPolicyShow3" @change="carouselChange3">
        <bfe-carousel-item v-for="(item,index) in carouselData3" :key="index">
          <div class="Rep-foot-subtitle">{{item.title}}</div>
          <div class="Rep-foot-contant">{{item.short}}
        </div>
        </bfe-carousel-item>
        </bfe-carousel>
        <button class="Rep-button"  @click="DialogPolicyShow3 = true"> Show more information </button>
      </div>
    </div>

    <dialog-forum-add-soulutions :codes="codes" v-if="SoulutionShow" @onSubmit="SoulutionShow=false" @onCancel="SoulutionShow=false" ></dialog-forum-add-soulutions>
    <dialog-industry v-if="DialogPolicyShow1" :DetailData="carouselDataAct1" :selectIndex="Active1" @onCancel="DialogPolicyShow1 = false;" ></dialog-industry>
    <dialog-policy v-if="DialogPolicyShow2" :PolicyData="carouselDataAct2" @onCancel="DialogPolicyShow2 = false;" ></dialog-policy>
    <dialog-policy v-if="DialogPolicyShow3" :PolicyData="carouselDataAct3" @onCancel="DialogPolicyShow3 = false" ></dialog-policy>
  </div>
</template>
<script>

import DialogForumAddSoulutions from "../Dialog/DialogForumAddSoulutions";
import DialogPolicy from "../Dialog/DialogPolicy";
import DialogIndustry from "../Dialog/DialogIndustry";
import {ststicCarouselData2, ststicCarouselData3} from "../common/carouselData.js";
import { ApilistInfos } from '../Api/Api.js';
export default {
  data() {
    return {
      loading: false,
      DialogPolicyShow1: false,
      DialogPolicyShow2: false,
      DialogPolicyShow3: false,
      SoulutionShow: false,
      carouselData1: {},
      carouselData2: ststicCarouselData2,
      carouselData3: ststicCarouselData3,
      Active1: 0,
      carouselDataAct1: {},
      carouselDataAct2: {},
      carouselDataAct3: {},
      codes: []
    };
  },
  mounted() {
    //从地址中获取地区信息
    if(this.$route.query.codes !== "" && this.$route.query.codes !== null && this.$route.query.codes !== undefined) {
      this.codes = this.$route.query.codes.split(',');
    } else {
      this.codes = []
    }
    //初始化数据
    this.InitData();
  },
  components: {
    DialogForumAddSoulutions,
    DialogPolicy,
    DialogIndustry
  },
  methods: {
    InitData() {
      this.loading = true;
      ApilistInfos().then(res => {
        this.loading = false;
        if(res.data.code === "200" && res.data.message === "SUCCESS") {
          this.carouselData1 = res.data.data;
          this.carouselData1.breeds.DeatilTitle = "Breeding industry";
          this.carouselData1.crops.DeatilTitle = "Farming industry";
          this.carouselData1.textiles.DeatilTitle = "Textile industry";
          this.carouselData1.breeds.title = "Breeding industry：Breeds";
          this.carouselData1.crops.title = "Farming industry：Crops";
          this.carouselData1.textiles.title = "Textile industry：Textiles";
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
      this.SoulutionShow = true;
      //this.$message.info("已发布求助信息!");
    },
    carouselChange1(Selectindex) {
      this.carouselDataAct1 = {};
      this.Active1 = Selectindex;
      switch(Selectindex) {
      case 0: this.carouselDataAct1 = this.carouselData1.breeds; break;
      case 1: this.carouselDataAct1 = this.carouselData1.crops; break;
      case 2: this.carouselDataAct1 = this.carouselData1.textiles; break;
      default: break;
      }
    },
    carouselChange2(Selectindex) {
      this.carouselDataAct2 = this.carouselData2[Selectindex];
    },
    carouselChange3(Selectindex) {
      this.carouselDataAct3 = this.carouselData3[Selectindex];
    }
  }
};
</script>

<style scoped>
.RepLeft{
  float:left;
}
.RepRight{
  float:right;
}
.Rep{
  width:47%;
  min-width:500px;
  height:300px;
  background-color: #FFD821;
  border-radius: 27.65px;
}
.Rep table{
  width:100%;
  height:100%;
}
.Rep table tr>td:first-child{
  width:230px;
}
.Rep-bar {
  width:100%;
  height:100%;
  padding: 50px 20px 10px;
  overflow: hidden;
}

.Rep-bar-title{
  display: inline-block;
  letter-spacing: -1px;
  font-family: Helvetica;
  font-size: 20px;
  height: 40px;
  color: white;
  font-weight: bolder;
}
.Rep-bar-subtitle{
  display: inline-block;
  font-family: Helvetica;
  font-size: 14px;
  color: #818383;
}

.Rep-contant-title{
  display: inline-block;
  font-family: Helvetica;
  font-size: 20px;
  height: 40px;
  color: black;
  font-weight: bolder;
}
.Rep-contant-contant{
  font-family: Helvetica;
  font-size: 14px;
  line-height: 24px;
  height:140px;
  overflow:hidden;
  text-overflow: ellipsis;
  color: #818383;
}
.Rep-bar-circle{
  width: 100px !important;
  height: 100px !important;
  background-image: linear-gradient(131deg, #67C504 0%, #BAE064 98%);
  border-radius: 50%;
  position: relative;
  top: 50px;
  left: 140px;
  display: block;
}
.Rep-bar-circle:hover{
  width: 120px !important;
  height: 120px !important;
  background-image: linear-gradient(131deg, #BAE064 0%, #67C504 98%);
  top: 40px;
  left: 130px;
}
.Rep-contant{
  width:100%;
  height:100%;
  padding: 50px 20px 10px;
  overflow: hidden;
  background: #FFFFFF;
  box-shadow: 0 20px 158px 8px rgba(0,0,0,0.10);
  border-radius: 27.65px;
}

.Rep-foot{
  width:100%;
  height:380px;
  background-color: #FFD821;
  border-radius: 18px;
}
.Rep-foot-title{
  height: 40px;
  line-height:40px;
  text-align:center;
  font-family: Helvetica;
  font-size: 20px;
}
.Rep-foot-bottom{
  box-shadow: 1px 1px 2px rgba(0,0,0,0.10);
  border: 1px solid #EDEEF0;
  border-radius: 18px;
  height: 340px;
  width: 100%;
  background-color: #FFFFFF;
}
.Rep-foot-subtitle{
  line-height: 40px;
  padding:0 20px;
  text-align: center;
  display: block;
  font-family: Helvetica;
  font-size: 20px;
  font-weight: bolder;
}
.Rep-foot-contant{
  border:0;
  padding:0 20px;
  font-family: Helvetica;
  font-size: 14px;
  line-height: 24px;
  max-height:140px;
  overflow:hidden;
  text-overflow: ellipsis;
  color: #818383;
}
.bfe-carousel>>>.bfe-carousel__container{
  height:100% !important;
}

.bfe-carousel>>>.bfe-carousel__button{
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #8d8d8d;
}
.bfe-carousel>>>.is-active .bfe-carousel__button{
  background-color: blue;
}
.Rep-foot-bottom .bfe-carousel>>>.bfe-carousel__container{
  height:240px !important;
}
.Rep-foot-bottom  .bfe-carousel__item.is-active.bfe-carousel__item--card.is-in-stage{
  background-color: #FFF;
}
.Rep-foot-bottom  .bfe-carousel__item.bfe-carousel__item--card.is-in-stage{
  background-color: #d3dce6;
}
.Rep-foot-bottom  .bfe-carousel__item{
  border-radius: 20px;
}
/*
.Rep-foot-bottom .bfe-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
*/
</style>
