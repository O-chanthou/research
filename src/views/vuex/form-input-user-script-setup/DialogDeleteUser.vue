<template>
     <el-dialog v-model="deleteDialogVisible" title="Warning" width="30%" center :before-close="handleClose">
    <span>
      Are you sure want to delete ? <br> userID: <i>{{ userForm.id }}</i> <br> Name: <i>{{ userForm.firstName }} {{ userForm.lastName }}</i>
    </span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose">Cancel</el-button>
        <el-button type="primary" @click="handleDelete">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';

const deleteDialogVisible = ref(false)
const prop = defineProps(['deleteDialogVisible', 'userForm'])
const emit = defineEmits(['closeDeleteDialog'])

watchEffect(() => {
  deleteDialogVisible.value = prop.deleteDialogVisible
})

const handleClose = () => {
  deleteDialogVisible.value = false
    emit("closeDeleteDialog", )
}

const handleDelete = () => {
  deleteDialogVisible.value = false
    emit("closeDeleteDialog", true)
}
</script>

<style scoped>

</style>