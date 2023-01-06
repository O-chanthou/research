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
import ApprovalTable from "./ApprovalTable.vue";
import BoxApprovalLine from "./BoxApprovalLine.vue";
import ApprovalIquiry from "./ApprovalIquiry.vue";
import { Close } from "@element-plus/icons-vue";
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
