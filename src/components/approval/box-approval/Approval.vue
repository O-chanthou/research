<template>
  <div class="container">
    <div
      class="form-approval"
      v-for="(pro, index) in getProValue?.approvalList.length"
    >
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

        <el-form-item label="Branch Type">
          <el-select
            v-model="ruleForm.branchType[index]"
            :placeholder="
              ruleForm.branchType[index] == ''
                ? 'Select Branch Type'
                : getProValue?.approvalList[index].branchType
            "
            clearable
          >
            <el-option
              v-for="(item, index) in createApprovalData.branchType"
              :label="item.type"
              :value="item.type"
            />
          </el-select>
        </el-form-item>

        <el-form-item label="Role">
          <el-select
            v-model="ruleForm.role[index]"
            :placeholder="ruleForm.role[index] == '' ? 'Select role' : getProValue?.approvalList[index].role"
            clearable
          >
            <el-option
              v-for="item in createApprovalData.role"
              :label="item.type"
              :value="item.type"
            />
          </el-select>
        </el-form-item>

        <el-form-item class="mandatory" label="Mandatory">
          <el-radio-group v-model="ruleForm.mandatory[index]">
            <el-radio label="Yes" />
            <el-radio label="No" />
          </el-radio-group>
        </el-form-item>

      </el-form>
    </div>
  </div>

  {{ ruleForm }}
  <button @click="getMandatory">click</button>
</template>

<script lang="ts" setup>
import { reactive, ref, inject } from "vue";
import type { FormInstance } from "element-plus";
import { Close } from "@element-plus/icons-vue";
import type { Approval } from "@/shared/utils/announce-type";
import { createApprovalData } from "@/shared/utils/create-approval";

const getProValue: Approval | undefined = inject("proValue");

const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  branchType: [],
  role: [],
  mandatory: [],
});


const getMandatory = async () => {
  console.log(getProValue);
  
  // getProValue?.approvalList.forEach((res) => {
  //   console.log(res.mandatory);
    
  // })
} 
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
.txt-approval h3 {
  font-size: 0.8em;
  font-weight: bold;
}
.el-form-item {
  --font-size: 0.8em;
  margin-bottom: 10px;
}
</style>
