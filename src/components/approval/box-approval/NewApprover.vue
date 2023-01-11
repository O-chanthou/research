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

        <el-button @click="btnAdd(newApproverRef)"> Add </el-button>
      </el-form-item>

    </el-form>
    {{ newApproverOvbj }}
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { createApprovalData } from "@/shared/utils/create-approval";
import type { CreateApprovalData } from "@/shared/utils/approval-interface";

const newApproverRef = ref<FormInstance>();
const emits = defineEmits(['emitAddNewApprover'])


const newApproverForm = reactive<CreateApprovalData>({
  id: 0,
  branchType: "",
  role: "",
  mandatory: "",
});

const newApproverOvbj = ref<CreateApprovalData[]>([]);


const rules = reactive<FormRules>({
  branchType: [
    {
      required: true,
      message: "Please select Activity zone",
      trigger: "change",
    },
  ],
  role: [
    {
      required: true,
      message: "Please select Activity role",
      trigger: "change",
    },
  ],
  mandatory: [
    {
      required: true,
      message: "Please select activity resource",
      trigger: "change",
    },
  ],
});

const btnAdd = async (formEl: FormInstance | undefined) => {
  
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    
    if (valid) {
      console.log("submit!");
      if (newApproverForm.mandatory === "Yes") {
        newApproverForm.mandatory = "1";
      } else {
        newApproverForm.mandatory = "0";
      }

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

      newApproverOvbj.value.push(tmp);
      emits('emitAddNewApprover', tmp)
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
