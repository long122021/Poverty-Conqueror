<template>
  <div>
    <bfe-dialog title="Search" :visible="true" size="tiny" :closeOnPressEscape="false" :closeOnClickModal="false" :show-close="false" v-loading="loading" bfe-loading-text="loading...">
      <bfe-form :model="dialogForm" ref="dialogForm" :rules="rules" @submit.native.prevent label-width="120px">
        <bfe-form-item label="Search content" prop="SearchText">
          <bfe-input v-model="dialogForm.SearchText" placeholder="Please enter search content"></bfe-input>
        </bfe-form-item>
      </bfe-form>
      <div slot="footer" class="dialog-footer">
        <bfe-button class="button-bg" @click="$emit('onCancel')">Cancel</bfe-button>
        <bfe-button class="button-bg" @click="onSearchSubmit">Search</bfe-button>
      </div>
    </bfe-dialog>
  </div>
</template>

<script>
export default {
  name: "DialogSearch",
  data() {
    return {
      loading: false,
      dialogForm: {SearchText: ''},
      rules: {
        SearchText: [
          { required: true, message: 'Please enter search content', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    onSearchSubmit() {
      this.$refs.dialogForm.validate((valid) => {
        if (valid) {
          this.$emit('onSubmit')
        }
      })
    }
  },
  mounted() {}
};
</script>

<style scoped>

</style>
