<template>
    <div>
        <el-button color="blue"> New </el-button>
        <el-button type='success'> Modify </el-button>
      </div>
      <div>
        <el-button type='primary'> Submit </el-button>
      </div>
</template>

<script setup lang="ts">
import { usePushStore } from '@/stores/storeState';
import { storeToRefs } from 'pinia';

const pushStore = usePushStore()

const {} = storeToRefs(pushStore)
const {} = pushStore

</script>

<style scoped>

</style>