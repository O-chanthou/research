<template>
  <div class="wrapper">
    <p>Add multiple users using VueX with Script setup</p>
    <div class="select-box">
      <el-select v-model="selectValue" placeholder="select to add form">
        <el-option
          v-for="item in 10"
          :key="item"
          :label="item"
          :value="item"
          @click="generateTmpForm"
        />
      </el-select>
    </div>

    <br />

    <div class="form-content">
      <el-form class="form-container" ref="ruleFormRef" v-for="(user, index) in userForm">
        <div class="t-container">
          <p>Form {{ index + 1 }}</p> 
          <el-button type="danger" @click="handleRemoveForm(index)">X</el-button>
        </div>
        <el-form-item label="First Name">
          <el-input v-model="userForm[index].firstName" :key="index"/>
        </el-form-item>

        <el-form-item label="Last Name">
          <el-input v-model="userForm[index].lastName" :key="index"/>
        </el-form-item>
      </el-form>
    </div>
    
    <div class="submit-container" v-if="isAddForm">
      <el-button type="primary" @click="handleSubmit">Submit</el-button>
    </div>

    <br>

    <div class="table-grid">
      <p>Table users</p>
      <el-table :data="tableData" style="width: 100%" height="300">
        <el-table-column prop="id" label="ID" width="180"/>
        <el-table-column prop="firstName" label="First Name" />
        <el-table-column prop="lastName" label="Last Name" />
        <el-table-column label="Operations">
          <template #default="scope">
            <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
              >Edit</el-button
            >
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >Delete</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <DialogUpdateUser :user-form="user" :dialog-form-visible="dialogFormVisible" @close-dialog="closeDialog"/>
    <DialogDeleteUser :user-form="user" :delete-dialog-visible="centerDialogVisible" @close-delete-dialog="closeDeleteDialog"/>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, watchEffect, defineAsyncComponent } from 'vue';
import { useStore } from 'vuex';
import DialogDeleteUser from './DialogDeleteUser.vue';
import type { MultiUsers } from '@/stores/modules/multi-users/MultiUsersModule';
const DialogUpdateUser = defineAsyncComponent(()=> import('./DialogUpdateUser.vue'))

const store = useStore()
const dialogFormVisible = ref(false)
const centerDialogVisible = ref(false)
const selectValue = ref("");
let isAddForm = ref(false)
let isHasData = ref(false)
const userForm = ref<MultiUsers[]>([]);
let arrID = ref<number[]>([]);
let tableData = ref<MultiUsers[]>([])

const user = reactive({
  id: 0,
  firstName: '',
  lastName: ''
}) as MultiUsers

const handleEdit = (index: number, row: MultiUsers) => {
  dialogFormVisible.value = true
  user.id = row.id
  user.firstName = row.firstName
  user.lastName = row.lastName
}

const handleDelete = (index: number, row: MultiUsers) => {
  centerDialogVisible.value = true
  user.id = row.id
  user.firstName = row.firstName
  user.lastName = row.lastName
}

const generateTmpForm = () => {
  // userForm.value = []
  isAddForm.value = true
  for (let i = 0; i < parseInt(selectValue.value); i++) {
    let id = Math.floor(Math.random() * 100000);
    arrID.value.push(id);
    userForm.value.push({id: 0, firstName: '', lastName: ''});
  }
};

const handleRemoveForm = (index: number) => {
  const res = userForm.value.filter((e: MultiUsers, i) => i !== index)
  const resID = arrID.value.filter((e: number, i) => i !== index)
  userForm.value = res
  arrID.value = resID
}

const handleSubmit = () => {
  isAddForm.value = false
  userForm.value.forEach((user: MultiUsers, i: number) => {

    user.id = arrID.value[i]
    tableData.value.push(user)
    store.dispatch("MultiUsersModule/addMultiUsers", user)
  })
  userForm.value = []
  isHasData.value = true
}

watchEffect(() => {
  tableData.value = store.state.MultiUsersModule.multiUsers
})

const closeDialog = (e: MultiUsers) => {
  dialogFormVisible.value = false

  if(e.id !== 0) store.dispatch("MultiUsersModule/updateMultiUsers", e).then(()=> fetchData())
}

const closeDeleteDialog = (e: boolean) => {
  centerDialogVisible.value = false
  if (e) store.dispatch("MultiUsersModule/deleteMultiUsers", user.id).then(()=> fetchData())
  
}

const fetchData = () => store.dispatch("MultiUsersModule/fetchMultiUsers")
const getData = () => store.getters["MultiUsersModule/getMultiUsers"]

fetchData()
getData()

</script>

<style scoped>
.wrapper {
  width: 800px;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 15px 0px 0px 0px;
  justify-content: center;
}

.select-box {
  padding: 10px 15px;
  display: flex;
  justify-content: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
.form-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.form-container {
  width: 390px;
  padding: 5px;
  margin: 0px 0px 10px 0px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 5px;
}

.form-container p {
  font-size: 0.8em;
  font-weight: bold;
  top: 5px;
}

.t-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 8px;
}

.el-form-item {
  margin: 5px;
}

.table-grid {
  padding: 10px;
  margin: 0px 0px 12px 0px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 5px;
}
</style>