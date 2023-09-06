<script lang="ts" setup>
import { ref } from "vue";
const searchText = ref("");
</script>

<template>
  <input
    id="search-input"
    class="container"
    type="search"
    v-model="searchText"
    placeholder="Type something here"
  />
</template>

<style scoped>
.container {
  border: 0px solid;
  border-radius: 8px;
  padding: 12px 24px;
  width: 100%;
  outline: none;
  background-color: var(--light-soft);
  color: white;
  font-size: 24px;
}
</style>
