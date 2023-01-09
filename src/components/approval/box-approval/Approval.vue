<template>
  <div class="container">
    <div class="form-approval" v-for="pro in getProValue?.approvalSteps">
      <div class="txt-approval">
        <h3>Approval {{ pro }}</h3>
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
      <el-form-item label="Branch Type" prop="branchType" >
        <el-select v-model="ruleForm.branchType" placeholder="Branch Type" style="width: 100%;" >
          <el-option  v-for="(item, index) in createApprovalData.branchType" :label="item.type" :value="item.type" />
        </el-select>
      </el-form-item>
  
      <!-- <el-form-item label="Role" prop="role" placeholder="Role"> 
        <el-select-v2
          v-model="ruleForm.role"
          placeholder="Role"
          />
          <el-option v-for="item in createApprovalData.branchType"  :label="item.type" :value="item.type" />
      </el-form-item> -->
  
      <el-form-item class="mandatory" label="Mandatory" prop="mandatory">
        <el-radio-group v-model="ruleForm.mandatory">
          <el-radio label="Yes" />
          <el-radio label="No" />
        </el-radio-group>
      </el-form-item>
    </el-form>
  </div>
  </div>
  </template>
  
  <script lang="ts" setup>
  import { reactive, ref, inject } from "vue";
  import type { FormInstance } from "element-plus";
  import { Close } from '@element-plus/icons-vue'
  import type { Approval } from "@/shared/utils/announce-type";
  import { createApprovalData } from "@/shared/utils/create-approval";

  const ruleFormRef = ref<FormInstance>();
  const ruleForm = reactive({
    branchType: [],
    role: "",
    mandatory: "",
  });
   
  const getProValue: Approval | undefined = inject('proValue')

  </script>
  
  <style scoped>
  .container {
    display: flex;
  }
  .form-approval {
      /* height: 35%; */
      width: 28%;
      border: 1px solid #bdc2d0fe;
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
  