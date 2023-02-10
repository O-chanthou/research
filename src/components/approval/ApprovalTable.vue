<template>
  <div class="table-grid">
    <el-table
      :data="dataTableApprovalLine"
      height="250"
      :border="true"
      fit
      stripe
      style="width: 100%"
      ref="singleTableRef"
      highlight-current-row
      @current-change="handleCurrentChange"
    >
      <el-table-column
        v-for="elTableColumn in elTableColumns"
        :prop="elTableColumn.prop"
        :label="elTableColumn.label"
        :width="elTableColumn.width"
        :align="elTableColumn.align"
      />
    </el-table>
  </div>
</template>

<script setup lang="ts">
import type { Approval, CreateApprovalData } from "@/shared/utils/approval/approval-interface";
import { usePushStore } from "@/stores/storeState";
import { storeToRefs } from "pinia";
import { elTableColumns } from "@/shared/utils/announce/announce-type"

const pushStore = usePushStore() 
const { dataTableApprovalLine } = storeToRefs(pushStore)
const { fetchDataApproval, getTrData, getMandatory } = pushStore

fetchDataApproval()

function handleCurrentChange(val: Approval) { 
  let arrMandatory = [] as string[];
  let arrApprovalLine = [] as CreateApprovalData[];

  val.approvalList.forEach(item => {
    if (item.mandatory === 1) {
      arrMandatory.push('Yes')
    } else {    
      arrMandatory.push('No')
    }
  })
  
  val.approvalList.forEach(item => {
    arrApprovalLine.push(item);
  })
  
  getTrData(arrApprovalLine)
  getMandatory(arrMandatory)
};

</script>

<style scoped>
.table-grid {
  border: 1px solid #bdc2d0fe;
  margin-top: 10px;
}
</style>
