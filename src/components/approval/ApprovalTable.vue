<template>
  <div class="table-grid">
    <el-table
      :data="tableData"
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
import { ref } from "vue";

const currentRow = ref();

interface Approval {
  no: number;
  busCate: string;
  busSubCate: string;
  authType: string;
  approvalSteps: number;
  approvalLine: string;
}

const tableData = <Approval[]>([
  {
    no: 1,
    busCate: "02:Loan",
    busSubCate: "0210:Loan Application",
    authType: "Loan Application - Branch Authorization",
    approvalSteps: 2,
    approvalLine: "RM-->BGM-->CO-->BCM",
  },
  {
    no: 2,
    busCate: "02:Loan",
    busSubCate: "0210:Loan Application",
    authType: "Loan Application - CM Authorization",
    approvalSteps: 3,
    approvalLine: "RM-->BGM-->CO-->BCM-->DCM-->CM",
  },
  {
    no: 3,
    busCate: "02:Loan",
    busSubCate: "0210:Loan Application",
    authType: "Loan Application - Screen Dept Authorization",
    approvalSteps: 5,
    approvalLine: "RM-->BGM-->CO-->BCM-->DCM-->CSO",
  },
]);

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

const handleCurrentChange = (val: Approval | undefined) => {
  currentRow.value = val;
  console.log(currentRow.value);
};

</script>

<style scoped>
.table-grid {
  border: 1px solid #000;
  margin-top: 10px;
}
</style>
