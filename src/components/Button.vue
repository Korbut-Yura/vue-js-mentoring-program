<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{
  label: string;
}>();

const emit = defineEmits<{
  (e: "click", id: number): void;
}>();

const classes = computed(() => ({
  button: true,
}));

const onClick = () => {
  emit("click", 1);
};
</script>

<template>
  <button type="button" :class="classes" @click="onClick">
    {{ label }}
  </button>
</template>

<style scoped>
.button {
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 1rem;
  text-transform: uppercase;
  color: var(--color-text);
  border: 0;
  border-radius: 4px;
  padding: 12px 48px;
  cursor: pointer;
  display: inline-block;
  background-color: var(--primary);
}
</style>
