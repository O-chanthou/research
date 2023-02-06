<template>
  <div>
    <UserCRUD />
    <FormInputUser/>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
const FormInputUser  = defineAsyncComponent(() => import("./FormInputUser.vue"));
const UserCRUD = defineAsyncComponent(() => import("./UserCRUD.vue"));
</script>

<style scoped>

</style>