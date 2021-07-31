<template>
  <bfe-dialog title="Log in" :visible="true" size="tiny" :closeOnPressEscape="false" :closeOnClickModal="false" :show-close="false" v-loading="loading" bfe-loading-text="loading...">
    <bfe-form :model="dialogForm" ref="dialogForm" :rules="rules" @submit.native.prevent label-width="80px">
      <bfe-form-item label="Username" prop="userName">
        <bfe-input v-model="dialogForm.userName" placeholder="Please enter Username"></bfe-input>
      </bfe-form-item>
      <bfe-form-item label="Password" prop="passWord">
        <bfe-input v-model="dialogForm.passWord" type="passWord" placeholder="Please enter Password"></bfe-input>
      </bfe-form-item>
    </bfe-form>
    <div slot="footer" class="dialog-footer">
      <bfe-button class="button-bg" @click="$emit('onCancel')">Cancel</bfe-button>
      <bfe-button class="button-bg" @click="onLoginSubmit">Log in</bfe-button>
    </div>
  </bfe-dialog>
</template>

<script>
import { ApiLogin } from '../Api/Api.js';
export default {
  name: "DialogLogin",
  data() {
    return {
      loading: false,
      dialogForm: {userName: '', passWord: ''},
      rules: {
        userName: [
          { required: true, message: 'Please enter Username', trigger: 'blur' },
          { min: 1, max: 50, message: '1 to 50 characters in length', trigger: 'blur' }
        ],
        passWord: [
          { required: true, message: 'Please enter Password', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    onLoginSubmit() {
      this.$refs.dialogForm.validate((valid) => {
        if (valid) {
          this.loading = true;
          //var parames = "userName=" + this.dialogForm.userName + "&passWord=" + this.dialogForm.passWord
          ApiLogin(this.dialogForm).then(res => {
            this.loading = false;
            if(res.data.code === "200" && res.data.message === "SUCCESS") {
              localStorage.removeItem('userName');
              localStorage.removeItem('PovertyToken');
              localStorage.setItem('userName', res.data.data.userName);
              localStorage.setItem('PovertyToken', new Date());
              this.$router.push("/home/PovertyConqueror");
            } else {
              var errorTip = res.data.data.trim() === "" ? "Login failed" : res.data.data.trim();
              this.$message.error(errorTip);
            }
          }).catch(() => {
            this.loading = false;
            this.$message.error("Login failed");
          })
        }
      })
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
</style>
