<template>
  <div v-loading="loading" bfe-loading-text="loading...">
    
    <div class="divline margintop20" ></div>
    <div style="padding:10px 30px">
      <div style="float:left;width:30%">
        <div  class="divmenu-vertical">
          <div class="divmenuleft"><div class="divmenutitle-vertical">Industry Recommended</div></div>
            <!-- <div class="Rep-case-item" title="Animal industry">
              <span><i class="bfe-icon-android-radio-button-off"></i>Animal industry</span>
            </div>
            <div class="Rep-case-item" title="Farming industry">
              <span><i class="bfe-icon-android-radio-button-off"></i>Farming industry</span>
            </div>
            <div class="Rep-case-item" title="Breeding industry">
              <span><i class="bfe-icon-android-radio-button-off"></i>Breeding industry</span>
            </div> -->
          <div class="divmenuitem-vertical">
            <bfe-menu :default-active="menuactive1" class="bfe-menu-vertical-demo" text-color="#000" active-text-color="#F9DB49">
              <bfe-menu-item @click="showRepository=true;menuactiveName1='Animal husbandry'"  index="1">
                <div class="Rep-case-item" title="Animal husbandry">
                    <i></i>Animal husbandry
                </div>
                </bfe-menu-item>
              <bfe-menu-item @click="showRepository=true;menuactiveName1='Farming industry'"  index="2">
                <div class="Rep-case-item" title="Farming industry">
                    <i></i>Farming industry
                </div>
              </bfe-menu-item>
              <bfe-menu-item @click="showRepository=true;menuactiveName1='Breeding industry'"  index="3">
                <div class="Rep-case-item" title="Breeding industry">
                    <i></i>Breeding industry
                </div>
              </bfe-menu-item>
            </bfe-menu>
          </div>
        </div>
        <div  class="divmenu-vertical" style="margin-top:22px">
          <div class="divmenuleft"><div class="divmenutitle-vertical">Policy Recommendations</div></div>
          <div class="divmenuitem-vertical">
            <bfe-menu :default-active="menuactive2" style="height:230px" class="bfe-menu-vertical-demo" text-color="#000" active-text-color="#F9DB49">
              <bfe-menu-item @click="showRepository=true;menuactiveName2='The case of eighteen holes village'" index="1">
                <div class="Rep-case-item"  title="The case of eighteen holes village">
                    <i></i>The case of eighteen holes village
                </div>
              </bfe-menu-item>
              <bfe-menu-item @click="showRepository=true;menuactiveName2='The case of xiaogang village'" index="2">
                <div class="Rep-case-item" title="The case of xiaogang village">
                    <i></i>The case of xiaogang village
                </div>
              </bfe-menu-item>
              <bfe-menu-item @click="showRepository=true;menuactiveName2='The case of Luodian village'" index="3">
                <div class="Rep-case-item" title="The case of Luodian village">
                    <i></i>The case of Luodian village
                </div>
              </bfe-menu-item>
            </bfe-menu>
          </div>
        </div>
      </div>
      <div style="float:left;width:70%;padding-left: 80px;">
        <div  class="divmenu" style="height:490px;width:95%;">
          
           <div v-show="!showRepository">
              <p class="ptext">To choose</p>
           </div>
          <div v-show="showRepository">
          <p class="ptitle">&nbsp;</p>
           <div v-show="menuactiveName1!=''">
              <p class="ptitle">{{menuactiveName1}}</p>
              <p class="ptext">We will provide scientific programs to assist agriculture in poor areas And all the support</p>
              <p class="ptext">provide scientific programs to assist agriculture</p>
              <p class="ptext">in poor areas And all the support</p>
              <p class="ptext">We will provide scientific programs to assist agriculture in poor areas</p>
           </div>
          <p class="ptitle">&nbsp;</p>
           <div v-show="menuactiveName2!=''">
              <p class="ptitle">{{menuactiveName2}}</p>
              <p class="ptext">We will provide scientific programs to assist agriculture in poor areas And all the support</p>
              <p class="ptext">provide scientific programs to assist agriculture</p>
              <p class="ptext">in poor areas And all the support</p>
              <p class="ptext">We will provide scientific programs to assist agriculture in poor areas</p>
           </div>

          </div>
        </div>
      </div>      
      <div style="clear:both"></div>
    </div>

    <div class="divline margintop20" ></div>
    <div class="clear">
      <div style="float:left;width:33%;padding:10px 30px">
        <div  class="divmenu">
          <div class="divmenutitle">Financial Solutions Recommend</div>
          <div class="divmenuitem">
            <p class="ptitle-Recommend">Bank of china</p>
            <p class="ptext">We will provide scientific programs to assist agriculture in poor areas And all the support</p>
          </div>
        </div>
      </div>
      <div style="float:left;width:33%;padding:10px 30px">
        <div  class="divmenu">
          <div class="divmenutitle">Charity Recommend</div>
          <div class="divmenuitem">
            <p class="ptitle-Recommend">China Charity Federatio</p>
            <p class="ptext">We will provide scientific programs to assist agriculture in poor areas And all the support</p>
          </div>
        </div>
      </div>
      <div style="float:left;width:33%;padding:10px 30px">
        <div  class="divmenu">
          <div class="divmenutitle">Technology Company Recommend</div>
          <div class="divmenuitem">
            <p class="ptitle-Recommend">The mushroom cultivation</p>
            <p class="ptext">We will provide scientific programs to assist agriculture in poor areas And all the support</p>
          </div>
        </div>
      </div>
      <div style="clear:both"></div>
    </div>
    <div style="height:100px;line-height:100px;text-align:center ">
      <bfe-button class="solutions-button button40" @click="PostMessage">
        <span class="span1"></span>&nbsp;&nbsp;Post Message &nbsp;&nbsp;<span class="span2"></span>
      </bfe-button>
    </div>
    <dialog-forum-add-soulutions :AreaOptions="AreaOptions" v-if="dialogShow" @onSubmit="onAddSubmit" @onCancel="onCancel" ></dialog-forum-add-soulutions>
  </div>
</template>

<script>
import DialogForumAddSoulutions from "../Dialog/DialogForumAddSoulutions";
export default {
  data() {
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
    DialogForumAddSoulutions
  },
  methods: {
    PostMessage() {
      this.dialogShow = true;
      //this.$message.info("已发布求助信息!");
    },
    onAddSubmit() {
      this.dialogShow = false;
    },
    onCancel() {
      this.dialogShow = false;
    }
  }
};
</script>

<style scoped>
.Rep-case-item {
  padding-left: 34px;
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;

  font-family: Helvetica;
  font-size: 20px;
  text-align: justify;
  font-weight: 600;
}
.Rep-case-item i {
  position: absolute;
  top: 28px;
  left: 0px;
  display: inline-block;
  width: 20px;
  height: 20px;
  background: url('../assets/imgs/Oval.png') no-repeat;
  background-size: 100% 100%;
}

.divline{
  background-color:#F9DB49;width:30%;height:5px;border-radius:2em;
}
.divmenuleft{
  float: left;
  width: 10%;
}
.divmenu-vertical{
  width: 100%;
  height: 234px;
  border-radius: 1em;
  background-color: #E6EAEC;
  border: 2px solid #ccd1da;
}
.divmenutitle-vertical{
  height: 234px;
  writing-mode: tb-rl;
  vertical-align: middle;
  margin: auto;
  text-align: center;
  word-break: break-all;
  word-wrap: break-word;
  font-family: Helvetica;
  font-size: 18px;
  color: #F8CE06;
  line-height: 25px;
  font-weight: 600;
}
.divmenuitem-vertical{
  float: left;
  width: 90%;
  height: 230px;
  border-radius: 1em;
  background-color: white;
  border-left: 2px solid #ccd1da;
}
.divmenu{
  width: 100%;
  height: 184px;
  border-radius: 1em;
  background-color: #E6EAEC;
  border: 2px solid #ccd1da;
}
.divmenutitle{
  height: 40px;
  overflow: hidden; 
  text-overflow: ellipsis;
  margin: auto;
  text-align: center;
  font-family: Helvetica;
  font-size: 20px;
  color: #F8CE06;
  line-height: 40px;
  font-weight: 600;
}
.divmenuitem{
  height: 140px;
  border-radius: 1em;
  background-color: white;
  border-top: 2px solid #ccd1da;
}
.solutionsButton{
  height: 44px;
  line-height: 44px;
  background-color: #F9DB49;
  border-radius: 2em;
}
.solutionsButton img{
  width:20px;
  height:20px;
  border-radius: 50%;
}
.bfe-menu.bfe-menu-vertical-demo{
  background: transparent !important;  
}
.bfe-menu-item{
  background: transparent !important;  
  /* transform: rotate(-360deg); */
  font-size: 20px;
  text-align: justify;
  height: 76px;
  line-height: 76px;
}
.ptext{
  padding: 0 20px;
  font-family: Helvetica;
  font-size: 20px;
  /* color: #202337; */
  /* color: #302f2f; */
  text-align: justify;
  line-height: 29px;
  /* font-weight: 600; */
}

.ptitle{
  padding-left: 20px;
  text-align: left;
  font-size: 20px;
  font-weight: 600;
  font-family: Helvetica;
  color: #F9DB49;
  overflow: hidden; 
  text-overflow: ellipsis;
}
.ptitle-Recommend{
  font-size: 20px;
  color: black;
  text-align: center;
  line-height: 35px;
  padding-left: 20px;
  font-weight: 600;
  height: 40px;
}


</style>
