<template>
  <div class="form-new-approval">
    <div class="txt-new-approval">
      <h3>New Approver</h3>
    </div>
    <el-form
      ref="newApproverRef"
      :model="newApproverForm"
      :rules="rules"
      label-width="100px"
      size="small"
      label-position="left"
    >
      <el-form-item label="Branch Type" prop="branchType">
        <el-select v-model="newApproverForm.branchType" placeholder="Branch Type">
          <el-option
            v-for="item in createApprovalData.branchType"
            :label="item.type"
            :value="item.type"
          />
        </el-select>
      </el-form-item>

      <el-form-item label="Role" prop="role">
        <el-select v-model="newApproverForm.role" placeholder="Role">
          <el-option
            v-for="item in createApprovalData.role"
            :label="item.type"
            :value="item.type"
          />
        </el-select>
      </el-form-item>

      <el-form-item class="mandatory" label="Mandatory" prop="mandatory">
        <el-radio-group required="true" v-model="newApproverForm.mandatory">
          <el-radio label="Yes" />
          <el-radio label="No" />
        </el-radio-group>

        <el-button :disabled="!isModified" @click="btnAdd(newApproverRef)"> Add </el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormInstance } from "element-plus";
import { rules } from "@/shared/utils/approval/ruleform-newApprover";
import { createApprovalData } from "@/shared/utils/approval/create-approval.js";
import type { CreateApprovalData } from "@/shared/utils/approval/approval-interface.js";
import { usePushStore } from "@/stores/storeState";
import { storeToRefs } from "pinia";

const newApproverRef = ref<FormInstance>();
const pushStore = usePushStore()
const { isSelectesTr, isModified } = storeToRefs(pushStore)
const { addNewApprover } = pushStore

const newApproverForm = reactive<CreateApprovalData>({
  id: 0,
  branchType: "",
  role: "",
  mandatory: "No",
});

const btnAdd = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    
    if (valid) {
      let date = Date()
      let id = Date.parse(date)

      let tmp: CreateApprovalData = {
        id: id,
        branchType: "",
        role: "",
        mandatory: "",
      };

      tmp.branchType = newApproverForm.branchType;
      tmp.role = newApproverForm.role;
      tmp.mandatory = newApproverForm.mandatory;
      
      addNewApprover(tmp)
      formEl.resetFields();
    } else {
      console.log("error submit!", fields);
      return false;
    }
  });
};
</script>

<style scoped>
.form-new-approval {
  /* height: 32%; */
  border: 1px solid #bdc2d0fe;
  margin: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
}
.txt-new-approval h3 {
  font-size: 0.8em;
  font-weight: bold;
}
.el-form-item {
  --font-size: 0.8em;
  margin-bottom: 10px;
}
.mandatory {
  display: flex;

  justify-content: space-between;
}
</style>
