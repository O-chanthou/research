<template>
  <div class="full-content">
    <div class="inquiry-condition">
      <ApprovalIquiry />
    </div>
    <div class="table-grid">
      <ApprovalTable @emitTrValue="getEmitTrValue" @emitMandatory="getEmitManVal"/>
    </div>
    <div class="set-approval">
      <BoxApprovalLine />
    </div>
    <div class="btn-bottom">
      <div>
        <el-button color="blue"> New </el-button>
        <el-button type='success'> Modify </el-button>
      </div>
      <div>
        <el-button type='primary'> Submit </el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, provide, defineAsyncComponent } from "vue";

import ApprovalIquiry from "./ApprovalIquiry.vue";
import ApprovalTable from "./ApprovalTable.vue";
import type { Approval } from "@/shared/utils/approval/approval-interface";
const BoxApprovalLine = defineAsyncComponent(() => import('./BoxApprovalLine.vue'))

const trValue = ref<Approval>();
let arrMandatory = ref<string[]>([]);

const getEmitTrValue = (val: Approval) => {
  trValue.value = val
}

const getEmitManVal = (val: string[]) => {
  arrMandatory.value = val
}
provide('proValue', trValue)
provide('arrMandatory', arrMandatory)

</script>

<style scoped>
.btn-bottom {
  padding: 20px;
  display: flex;
  justify-content: space-between;
}
.full-content {
  margin: 10px;
  height: 90vh;
}
.inquiry-condition {
  height: auto;
}
/* .table-grid {
  height: 30%;
} */
.set-approval {
  height: 30%;
  width: 100%;
}
</style>
