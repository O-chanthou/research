<template>
    <div>
        <PushDetailsPage></PushDetailsPage>
    </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
const PushDetailsPage = defineAsyncComponent(() => import("@/components/PushDetailsPage.vue"))
</script>
