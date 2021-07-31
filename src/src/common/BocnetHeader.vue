<template>
  <div>
    <div class="header-container clear">
      <div class="float-1">
        <bfe-menu :router='true'  :default-active="activeIndex" text-color="#AAAFB7" active-text-color="#f9db49" class="bfe-menu-demo" mode="horizontal">
          <bfe-menu-item index="/home/PovertyConqueror">Poverty Conqueror</bfe-menu-item>
          <bfe-menu-item index="/home/Repository">Repository</bfe-menu-item>
          <bfe-menu-item index="/home/Forum">Info Platform</bfe-menu-item>
        </bfe-menu>
      </div>
      <div class="float-2">
        <bfe-tooltip class="item" effect="dark" content="Search" placement="bottom">
          <span class="header-search-icon" @click="IsShowSearch = true"></span>
        </bfe-tooltip>

        <bfe-tooltip class="item" effect="dark" content="Personal center" placement="bottom">
          <span class="header-person-icon" @click="showUserInfo" ></span>
        </bfe-tooltip>

        <bfe-tooltip class="item" effect="dark" content="Logout" placement="bottom">
          <span class="header-exist-icon" @click="Exist" ></span>
        </bfe-tooltip>
      </div>
      <div style="clear:both;"></div>
    </div>
    <dialog-search v-if="IsShowSearch" @onSubmit="onSubmit" @onCancel="onCancel" ></dialog-search >
  </div>
</template>

<script>
import DialogSearch from "../Dialog/DialogSearch";
export default {
  name: "BocnetHeader",
  props: {
    activeIndex: ''
  },
  data() {
    return {
      searchText: '',
      IsShowSearch: false
    };
  },
  methods: {
    showUserInfo() {
      this.$message.info("This feature is not turned on!");
    },
    onSubmit() {
      this.IsShowSearch = false;
      this.$message.info("Search content not found!") 
    },
    onCancel() {
      this.IsShowSearch = false;
    },
    Exist() {
      localStorage.removeItem('PovertyToken');
      this.$router.push("/")
    }
  },
  components: {
    DialogSearch
  }
}
</script>

<style scoped>
.bfe-menu-demo{
  background: transparent !important;
  border: 0px !important;
  height:60px;
}
.bfe-menu-item{
  background: transparent !important;  
  font-size: 25px !important;
  font-family: Helvetica !important;
  letter-spacing: 2px !important;
  font-weight: 600 !important;
  border-right: 1px solid #F0F0F0;
}
.bfe-menu-item:hover{
  color:#f9db49 !important;
} 
</style>

