<template>
  <div class="form-new-approval">
    <div class="txt-new-approval">
      <h3>New Approver</h3>
    </div>
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="100px"
      size="small"
      label-position="left"
    >
      <el-form-item label="Branch Type" prop="branchType">
        <el-select v-model="ruleForm.branchType" placeholder="Branch Type">
          <el-option
            v-for="item in createApprovalData.branchType"
            :label="item.type"
            :value="item.type"
          />
        </el-select>
      </el-form-item>

      <el-form-item label="Role" prop="role">
        <el-select v-model="ruleForm.role" placeholder="Role">
          <el-option
            v-for="item in createApprovalData.role"
            :label="item.type"
            :value="item.type"
          />
        </el-select>
      </el-form-item>

      <el-form-item class="mandatory" label="Mandatory" prop="mandatory">
        <el-radio-group required="true" v-model="ruleForm.mandatory">
          <el-radio label="Yes" />
          <el-radio label="No" />
        </el-radio-group>

        <el-button @click="btnAdd(ruleFormRef)"> Add </el-button>
      </el-form-item>
    </el-form>
    {{ ruleFormOvbj }}
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { inject } from "vue";
import { createApprovalData } from "@/shared/utils/create-approval";

const ruleFormRef = ref<FormInstance>();

const ruleForm = reactive<RuleForm>({
  branchType: "",
  role: "",
  mandatory: "",
});

const ruleFormOvbj = ref<RuleForm[]>([]);

interface RuleForm {
  branchType: string;
  role: string;
  mandatory: string;
}

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

const getProValue = inject("proValue");

const btnAdd = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("submit!");
      if (ruleForm.mandatory === "Yes") {
        ruleForm.mandatory = "1";
      } else {
        ruleForm.mandatory = "0";
      }
      console.log(ruleForm);
      let tmp: RuleForm = {
        branchType: "",
        role: "",
        mandatory: "",
      };
      tmp.branchType = ruleForm.branchType;
      tmp.role = ruleForm.role;
      tmp.mandatory = ruleForm.mandatory;
      ruleFormOvbj.value.push(tmp);
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
