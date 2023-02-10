<template>
  <el-dialog v-model="dialogFormVisible" title="Edit User" width="30%" :show-close="true" :before-close="handleClose">
    <el-form :model="userForm">
        <el-form-item label="ID" :label-width="formLabelWidth">
        <el-input v-model="userForm.id" autocomplete="off" :readonly="true"/>
      </el-form-item>
      <el-form-item label="First name" :label-width="formLabelWidth">
        <el-input v-model="userForm.firstName" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Last Name" :label-width="formLabelWidth">
        <el-input v-model="userForm.lastName" autocomplete="off" />
      </el-form-item>
    </el-form>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose">Cancel</el-button>
        <el-button type="primary" @click="handleUpdate">
          Update
        </el-button>
      </span>
    </template>
</el-dialog>
</template>

<script setup lang="ts">
import type { MultiUsers } from '@/stores/modules/multi-users/MultiUsersModule';
import { ref, reactive, watchEffect } from 'vue';

const prop = defineProps(["userForm", "dialogFormVisible"]);
const formLabelWidth = "140px";
const emit = defineEmits(['closeDialog'])
const dialogFormVisible = ref(false)
const user = reactive({
    id: 0,
    firstName: '',
    lastName: ''
}) as MultiUsers

watchEffect(() => {
    dialogFormVisible.value = prop.dialogFormVisible
})

const handleClose = () => {
  emit("closeDialog", user)
}

const handleUpdate = () => {
  user.id = prop.userForm.id
  user.firstName = prop.userForm.firstName
  user.lastName = prop.userForm.lastName
  emit("closeDialog", user)
}
</script>

<style scoped></style>
