<template>
  <div class="container">
    <div class="form-approval" v-for="i in 3">
      <div class="txt-approval">
        <h3>Approval {{i}}</h3>
        <div>
            <el-button :icon="Close" color="red" />
        </div>
    </div>
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
      size="small"
      label-position="left"
    >
      <el-form-item label="Branch Type" prop="region" >
        <el-select v-model="ruleForm.region" placeholder="Activity zone" style="width: 100%;" >
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
  
      <el-form-item label="Role" prop="count" placeholder="Activity zone"> 
        <el-select-v2
          v-model="ruleForm.count"
          placeholder="Role"
          :options="options"
        />
      </el-form-item>
  
      <el-form-item class="mandatory" label="Mandatory" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="Yes" />
          <el-radio label="No" />
        </el-radio-group>
      </el-form-item>
    </el-form>
    </div>
  </div>
  </template>
  
  <script lang="ts" setup>
  import { reactive, ref } from "vue";
  import type { FormInstance } from "element-plus";
  import { Close } from '@element-plus/icons-vue'

  const ruleFormRef = ref<FormInstance>();
  const ruleForm = reactive({
    region: "",
    count: "",
    resource: "",
  });
  
  const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    await formEl.validate((valid, fields) => {
      if (valid) {
        console.log("submit!");
      } else {
        console.log("error submit!", fields);
      }
    });
  };
  
  const options = Array.from({ length: 10000 }).map((_, idx) => ({
    value: `${idx + 1}`,
    label: `${idx + 1}`,
  }));
  </script>
  
  <style scoped>
  .container {
    display: flex;
  }
  .form-approval {
      /* height: 35%; */
      width: 28%;
      border: 1px solid #000;
      margin: 10px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding: 10px;
      /* background: wheat; */
      
  }
  .txt-approval {
    display: flex;
    justify-content: space-between;
  }
  .txt-approval h3{
      font-size: 0.8em;
      font-weight: bold;
  }
  .el-form-item {
      --font-size: 0.8em;
      margin-bottom: 10px;
  }
  </style>
  