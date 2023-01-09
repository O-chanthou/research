<template>
  <div class="table-grid">
    <el-table
      :data="dataApprovalLine"
      height="300"
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
import type { Approval } from "@/shared/utils/announce-type.js";
import { ref } from "vue";
import { usePushStore } from "@/stores/storeState";
import { storeToRefs } from "pinia";

const currentRow = ref();
const emit = defineEmits<{
  (event: 'emitTrValue', val: Approval): Approval,
}>()

const pushStore = usePushStore()

pushStore.fetchDataApproval()

const { dataApprovalLine } = storeToRefs(pushStore)


const elTableColumns = [
  {
    prop: "no",
    label: "No",
    width: 50,
    align: "center",
  },
  {
    prop: "busCate",
    label: "Business Category",
    width: 140,
    align: "center",
  },
  {
    prop: "busSubCate",
    label: "Business Sub Category",
    width: 200,
    align: "center",
  },
  {
    prop: "authType",
    label: "Authority Type",
    // width: 280,
    align: "center",
  },
  {
    prop: "approvalSteps",
    label: "Approval Steps",
    width: 110,
    align: "center",
  },
  {
    prop: "approvalLine",
    label: "Approval Line",
    // width: 180,
    align: "center",
  },
];

function handleCurrentChange(val: Approval) {
  console.log(val);
  
  emit('emitTrValue', val)
};

</script>

<style scoped>
.table-grid {
  border: 1px solid #bdc2d0fe;
  margin-top: 10px;
}
</style>
