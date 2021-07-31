<template>
  <bfe-cascader v-model="selectedOptions" :options="options" @active-item-change="handleItemChange" expand-trigger="hover"  :props="props" placeholder="请选择或搜索地区"></bfe-cascader>
</template>
<script>
export default {
  name: "cascader",
  props: ["selectedOptions", "options"],
  data() {
    return {
      props: {
        value: 'label',
        children: 'children'
      }
    };
  },
  methods: {
    handleItemChange() {
    }
  },
  mounted() {
  }
};
</script>

<style scoped>

</style>
