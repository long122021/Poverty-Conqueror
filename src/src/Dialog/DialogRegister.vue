<template>
  <div>
    <bfe-dialog title="Register" :visible="true" size="tiny" :closeOnPressEscape="false" :closeOnClickModal="false" :show-close="false" v-loading="loading" bfe-loading-text="loading...">
      <bfe-form :model="dialogForm" ref="dialogForm" :rules="rules" @submit.native.prevent label-width="80px">
        <bfe-form-item label="Username" prop="userName">
          <bfe-input v-model="dialogForm.userName" placeholder="Please enter Username" :maxlength="7"></bfe-input>
        </bfe-form-item>
        <bfe-form-item label="Email" prop="email">
          <bfe-input v-model="dialogForm.email" placeholder="Please enter Email"></bfe-input>
        </bfe-form-item>
        <bfe-form-item label="Password" prop="passWord">
          <bfe-input v-model="dialogForm.passWord" type="password" placeholder="Please enter Password"></bfe-input>
        </bfe-form-item>

      </bfe-form>
      <div slot="footer" class="dialog-footer">
        <bfe-button class="button-bg" @click="$emit('onCancel')">Cancel</bfe-button>
        <bfe-button class="button-bg" @click="onRegisterSubmit">Register</bfe-button>
      </div>
    </bfe-dialog>
  </div>
</template>

<script>
import { ApiRegister } from '../Api/Api.js';
export default {
  name: "DialogRegister",
  data() {
    return {
      loading: false,
      dialogForm: {
        userName: "",
        email: "",
        passWord: ""
      },
      rules: {
        userName: [
          { required: true, message: 'Please enter Username', trigger: 'blur' },
          { min: 1, max: 50, message: '1 to 50 characters in length', trigger: 'blur' }
        ],
        email: [
          { required: true, message: 'Please enter Email', trigger: 'blur' },
          { type: 'email', message: 'Please enter the correct email address', trigger: ['blur', 'change'] }
        ],
        passWord: [
          { required: true, message: 'Please enter Password', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    onRegisterSubmit() {
      this.$refs.dialogForm.validate((valid) => {
        if (valid) {
          this.loading = true;
          //var parames = "userName=" + this.dialogForm.userName + "&passWord=" + this.dialogForm.passWord
          ApiRegister(this.dialogForm).then(res => {
            this.loading = false;
            if(res.data.code === "200" && res.data.message === "SUCCESS") {
              this.$message.success('Register Success')
              this.$emit('onSubmit')
            } else {
              var errorTip = res.data.data.trim() === "" ? "Register failed" : res.data.data.trim();
              this.$message.error(errorTip);
            }
          }).catch(() => {
            this.loading = false;
            this.$message.error("Register failed");
          })
        }
      })
    }
  },
  mounted() {}
};
</script>

<style scoped>
/* >>>.bfe-dialog.bfe-dialog--tiny{
  background-image: linear-gradient(135deg, #2451FB 0%, #D01063 100%);
} */

</style>
