<template>
  <div class="form-new-approval">
    <div class="txt-new-approval">
      <h3>New Approver</h3>
    </div>
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      label-width="100px"
      size="small"
      label-position="left"
    >
      <el-form-item label="Branch Type" prop="region">
        <el-select
          v-model="ruleForm.region"
          placeholder="Activity zone"
          style="width: 100%"
          label="Carrera"
        >
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>

      <el-form-item label="Role" prop="count">
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

        <el-button> Add </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormInstance } from "element-plus";

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
.form-new-approval {
  /* height: 32%; */
  border: 1px solid #000;
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
