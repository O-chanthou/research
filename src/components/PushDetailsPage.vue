<template>
    <h1>page push details: {{ id }}</h1>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const id = useRoute().params.id
</script>