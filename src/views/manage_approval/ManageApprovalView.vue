<template>
  <div class="full-content">
    <div class="inquiry-condition">
      <ApprovalIquiry />
    </div>
    <div class="table-grid">
      <ApprovalTable />
    </div>
    <div class="set-approval">
      <BoxApprovalLine />
    </div>
    <div class="btn-bottom">
      <GroupButton />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from "vue";
const ApprovalIquiry = defineAsyncComponent(() => import("@/components/approval/ApprovalIquiry.vue"))
const ApprovalTable = defineAsyncComponent(() => import("@/components/approval/ApprovalTable.vue"))
const BoxApprovalLine = defineAsyncComponent(() => import('@/components/approval/BoxApprovalLine.vue'))
const GroupButton = defineAsyncComponent(() => import('@/components/approval/GroupButton.vue'))
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
.set-approval {
  height: 30%;
  width: 100%;
}
</style>
