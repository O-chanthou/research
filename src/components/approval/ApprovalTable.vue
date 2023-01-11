<template>
  <div class="table-grid">
    <el-table
      :data="dataApprovalLine"
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
  <!-- {{ dd }} -->
</template>

<script setup lang="ts">
import type { Approval } from "@/shared/utils/approval/approval-interface.js";
import { usePushStore } from "@/stores/storeState";
import { storeToRefs } from "pinia";
import { elTableColumns } from "@/shared/utils/announce/announce-type.js"
import { ref } from "vue";
 
const emits = defineEmits<{
  (event: 'emitTrValue', val: Approval): Approval,
  (event: 'emitMandatory', val: string[]): string[]
}>()

const pushStore = usePushStore() 
const { dataApprovalLineOri, dataApprovalLine } = storeToRefs(pushStore)
const { fetchDataApproval, getTrData, getMandatory } = pushStore

const dd = ref<Approval[]>([]);

fetchDataApproval().then((res) => {
  if (dd.value.length === 0) {
    dd.value = res
  }
  
  console.log(dd.value);
})

function handleCurrentChange(val: Approval) { 
  let arrMandatory = [] as string[];
  
  val.approvalList.forEach(item => {
    if (item.mandatory === 1) {
      arrMandatory.push('Yes')
    } else {    
      arrMandatory.push('No')
    }
  })
  console.log('val', val);
  if () {
    
  }
  emits('emitTrValue', val)
  emits("emitMandatory", arrMandatory)
  
  getTrData(val)
  getMandatory(arrMandatory)
};

</script>

<style scoped>
.table-grid {
  border: 1px solid #bdc2d0fe;
  margin-top: 10px;
}
</style>
