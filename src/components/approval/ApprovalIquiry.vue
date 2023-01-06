<template>
  <div>
    <div class="content">
      <div class="txt-inquiry-condition"> Inquiry Condition </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.content {
  position: relative;
  border: 1px solid #000;
  height: 40px;
} 

.txt-inquiry-condition {
  position: absolute;
  top: -10px;
  left: 10px;
  font-size: 0.8em;
  font-weight: bold;
  background: #f9f9f9
}
</style>
