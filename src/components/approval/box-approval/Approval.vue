<template>
  <div class="container">
    <div
      class="form-approval"
      v-for="(pro, index) in approvalList"
    >
      <div class="txt-approval">
        <h3>Approval {{ index+1 }}</h3>
        <div>
          <el-button disabled :icon="Close" color="red" @click="removeApprovalLine(pro.id)" />
        </div>
      </div>
     
      <el-form
        ref="approvalFormRef"
        :model="approvalForm"
        label-width="100px"
        size="small"
        label-position="left"
      >

        <el-form-item label="Branch Type">
          <el-select
            v-model="approvalForm.branchType[index]"
            :placeholder="
              approvalForm.branchType[index] == ''
                ? 'Select Branch Type'
                : pro.branchType
            "
            clearable
            disabled
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
            v-model="approvalForm.role[index]"
            :placeholder="approvalForm.role[index] == '' ? 'Select role' : pro.role"
            clearable
            disabled
          >
            <el-option
              v-for="item in createApprovalData.role"
              :label="item.type"
              :value="item.type"
            />
          </el-select>
        </el-form-item>

        <el-form-item class="mandatory" label="Mandatory">
          <el-radio-group v-model="approvalForm.mandatory[index]" disabled>
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
import { Close } from "@element-plus/icons-vue";
import { createApprovalData } from "@/shared/utils/approval/create-approval";
import { usePushStore } from "@/stores/storeState";
import { storeToRefs } from "pinia";

const pushStore = usePushStore()
const { approvalList, arrMandatory } = storeToRefs(pushStore)
const { removeApprovalLine } = pushStore

const approvalFormRef = ref<FormInstance>();
const approvalForm = reactive({
  branchType: [] as string[],
  role: [] as string[],
  mandatory: arrMandatory
});

</script>

<style scoped>
.container {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
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
