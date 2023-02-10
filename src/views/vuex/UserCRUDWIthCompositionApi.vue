<template>
  <div class="wrapper">
    <div class="form-content">
      <p>User CRUD using VueX with Composition API</p>
      <el-form class="form-container" ref="ruleFormRef" :model="userForm">
        <el-form-item label="First Name">
          <el-input v-model="userForm.firstName" />
        </el-form-item>

        <el-form-item label="Last Name">
          <el-input v-model="userForm.lastName" />
        </el-form-item>

        <el-form-item>
          <el-button v-if="!isClick" type="primary" @click="handleAddUser">Add User</el-button>
          <el-button v-else type="success" @click="handleUpdate">Update User</el-button>
          <el-button v-if="isClick" type="danger" @click="handleRemove"> Remove User </el-button>
          <el-button v-if="isClick" type="primary" @click="handleClearForm">close</el-button>
        </el-form-item>
      </el-form>
    </div>

    <br />

    <div class="list-content" v-loading="store.state.UsersModule.isLoading">
      <div class="user-container" v-for="(user, index) in store.state.UsersModule.USERS" :key="user.id"
        @click="handleSelect(user)">
        <span>
          <label class="txt-label" for="id"> ID : {{ user.id }} </label>
          <label class="txt-label" for="firstName">
            First Name : {{ user.firstName }}
          </label>
          <label class="txt-label" for="lastName">
            Last Name : {{ user.lastName }}
          </label>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { useStore } from "vuex";
import { Remove } from "@element-plus/icons-vue";
import type { User } from "@/stores/modules/users/UsersModule";

export default {
  setup() {
    const store = useStore();
    const isClick = ref(false);
    const userForm = ref({
      id: 0,
      firstName: "",
      lastName: "",
    });

    function handleAddUser() {
      if (userForm.value.firstName && userForm.value.lastName) {
        store.dispatch("UsersModule/addUser", userForm.value);
        userForm.value.firstName = "";
        userForm.value.lastName = "";
      } else {
        alert("Please input First Name and Last Name");
      }
    }

    function handleRemove() {
      store.dispatch("UsersModule/removeUse", userForm.value.id).then(() => {
        store.dispatch("UsersModule/fetchUsers");
        isClick.value = false
        userForm.value.firstName = ''
        userForm.value.lastName = ''
      });
    }

    function handleSelect(data: User) {
      userForm.value.firstName = data.firstName;
      userForm.value.lastName = data.lastName;
      userForm.value.id = data.id;
      isClick.value = true;
    }

    function handleUpdate() {
      if (userForm.value.firstName && userForm.value.lastName) {
        store.dispatch("UsersModule/updateUser", userForm.value).then(() => {
          store.dispatch("UsersModule/fetchUsers");
          userForm.value.firstName = "";
          userForm.value.lastName = "";
          isClick.value = false;
        });
      } else {
        alert("Please input First Name and Last Name");
      }
    }

    function handleClearForm() {
      userForm.value.firstName = "";
      userForm.value.lastName = "";
      isClick.value = false;
    }

    store.dispatch("UsersModule/fetchUsers");
    store.getters["UsersModule/getUsers"];

    return {
      store,
      userForm,
      handleAddUser,
      handleRemove,
      handleSelect,
      handleUpdate,
      handleClearForm,
      isClick,
    };
  },

  components: { Remove },
};
</script>

<style scoped>
.t-container {
  display: flex;
  justify-content: space-between;
}

.el-form-item {
  margin: 10px;
}

.wrapper {
  width: 400px;
  display: flex;
  margin: auto;
  padding: 15px 0px 0px 0px;
  flex-direction: column;
  justify-content: center;
}

.form-content {
  padding: 10px;
  margin: 0;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 5px;
}

.user-container {
  height: auto;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 10px;
  margin-bottom: 5px;
}

.txt-label {
  display: flex;
  flex-direction: column;
  font-size: 0.8em;
  font-weight: 500;
}
</style>
