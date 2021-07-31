<template>
  <div style="height: 100%">
    <div class="login-text">
      <div class="login-text-title">
        <p class="login-text-small">Poverty Conqueror</p>
      </div>
      <div class="login-text-content">
        <div class="login-text-empty"></div>
        <!--<p class="login-text-big">We will provide scientific programs</p>
        <p class="login-text-big">to assist agriculture in poor areas</p>
        <p class="login-text-big">And all the support</p>
        <p class="login-text-small">Technical support, Charity support, Financial support</p>-->
        <p class="login-text-big">Poverty Conqueror</p>
        <p class="login-text-small">Provide scientific poverty alleviation programs and various supports for impoverished areas.</p>
        <div class="login-but-group" style="position: relative;top: 25%;">
          <bfe-button class="login-register-button" @click="IsShowRegister = true">register</bfe-button>
          <bfe-button class="login-button" @click="Login">Log in</bfe-button>
        </div>
      </div>
    </div>

    <bfe-carousel :interval="3000" style="height:100%;z-index:1;opacity: 0.4;">
      <bfe-carousel-item v-for="(item,index) in imgList" :key="index">
        <img :src="item.src"/>
      </bfe-carousel-item>
    </bfe-carousel>

    <dialog-register v-if="IsShowRegister" @onSubmit="onRegisterSubmit" @onCancel="onRegisterCancel" ></dialog-register >
    <dialog-login v-if="IsShowLogin" @onCancel="onLoginCancel" ></dialog-login >
  </div>
</template>

<script>
import DialogRegister from "../Dialog/DialogRegister";
import DialogLogin from "../Dialog/DialogLogin";
export default {
  data() {
    return {
      imgList: [
        {src: require("@/assets/imgs/home01.jpg")},
        {src: require("@/assets/imgs/home02.jpg")},
        {src: require("@/assets/imgs/home03.jpg")},
        {src: require("@/assets/imgs/home04.jpg")}
      ],
      IsShowRegister: false,
      IsShowLogin: false,
      userId: '',
      pwd: ''
    };
  },
  components: {
    DialogRegister,
    DialogLogin
  },
  methods: {
    onRegisterSubmit() {
      this.IsShowRegister = false;
    },
    onRegisterCancel() {
      this.IsShowRegister = false;
    },
    Login() {
      //判断是否登录，若已经登录跳过登录
      if(localStorage.getItem('PovertyToken')) {
        this.$router.push("/home/PovertyConqueror");
        return;
      }
      this.IsShowLogin = true;//!this.IsShowLogin
    },
    onLoginCancel() {
      this.IsShowLogin = false;
    }
  },
  computed: {},
  mounted() {
  },
  beforeCreate() {},
  created() {}
};
</script>

<style scoped>

.login-but-group{
  display: inline-block;
  position: fixed;
  z-index: 3;
}
.login-button{
  width: 100px;
  border-radius: 2em;
  font-size: 20px;
  font-weight: bolder;
  background: white;
  color: black;
  border: 2px solid white;
}
.login-button:hover{
  color: red;
}
.login-register-button:hover{
  color: red;
}
.login-register-button{
  width: 100px;
  border-radius: 2em;
  font-size: 20px;
  font-weight: bolder;
  background: none;
  color: white;
  border: 2px solid white;
}

  .bfe-carousel>>>.bfe-carousel__container{
    height:100% !important;
  }
  .bfe-carousel>>>.bfe-carousel__item img {
      width: 100%;
      height: 100%;
      margin: 0;
    }

  .bfe-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }

  .bfe-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }

</style>
