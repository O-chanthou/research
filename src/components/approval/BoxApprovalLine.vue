<template>
    <div class="approval-box">
      <div class="new-approver-content">
       <div class="txt-set">Set To-do Approval Line</div>
        <NewApprover />
      </div>
      <div class="approval-line-content">
        <div class="txt-todo">To-do Approval Line </div>
        <Approval />
      </div>
    </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent} from "vue";
const Approval = defineAsyncComponent(() => import('./box-approval/Approval.vue'));
const NewApprover = defineAsyncComponent(() => import('./box-approval/NewApprover.vue'));

</script>

<style scoped>
.approval-box {
    padding-top: 10px;
    /* background: bisque; */
    width: 100%;
    height: 100%;
    display: flex;
}
.new-approver-content {
    /* background: violet; */
    height: 100%;
    width: 30%;
    border: 1px solid #bdc2d0fe;
    position: relative;
}
.txt-set {
    position: absolute;
    top: -10px;
    left: 10px;
    font-size: 0.8em;
    font-weight: bold;
    background: #f9f9f9;
}
.approval-line-content {
    /* background: yellowgreen; */
    height: 100%;
    width: 70%;
    border: 1px solid #bdc2d0fe;
    margin-left: 10px;
    position: relative;
}
.txt-todo {
    position: absolute;
    top: -10px;
    left: 10px;
    font-size: 0.8em;
    font-weight: bold;
    background: #f9f9f9;
}
</style>
