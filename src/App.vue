<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink :to="{ name: 'vuex' }">Vuex V4</RouterLink> |
        <RouterLink :to="{ name: 'push-management' }">Push Manangement</RouterLink> | 
        <!-- <RouterLink :to="{ name: 'push-noti' }">Push Notification</RouterLink> | -->
        <RouterLink :to="{ name: 'approval' }">Manage Approval</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<script setup lang="ts">
import { useOneSignal } from "onesignal-vue-3";
import { onMounted } from "vue";
import { RouterView } from "vue-router";

const oneSignal = useOneSignal();

onMounted(async () => {
  await oneSignal.registerForPushNotifications({
    modalPrompt: false,
  });
  await oneSignal.getExternalUserId()
});

</script>

<style scoped></style>
