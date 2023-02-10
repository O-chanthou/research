<template>
  <div>
    <UsersWithOptionApi />
    <hr>
    <UserCRUDWIthCompositionApi />
    <hr>
    <FormInputUserScriptSetup />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
const  UsersWithOptionApi = defineAsyncComponent(() => import("./UsersWithOptionApi.vue"));
const UserCRUDWIthCompositionApi = defineAsyncComponent(() => import("./UserCRUDWIthCompositionApi.vue"));
const FormInputUserScriptSetup  = defineAsyncComponent(() => import("@/views/vuex/form-input-user-script-setup/FormInputUserWithScriptSetup.vue"));
</script>

<style scoped>

</style>