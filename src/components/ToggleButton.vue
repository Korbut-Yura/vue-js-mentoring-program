<script lang="ts" setup>
import { ref } from "vue";

interface Props {
  buttons: [string, string];
  label: string;
  initialIndex: number;
  className?: string;
}
const props = withDefaults(defineProps<Props>(), {
  initialIndex: 0,
});

const currentIndex = ref(props.initialIndex);

const emit = defineEmits<{
  (e: "click", index: number): void;
}>();

const onClick = (index: number) => {
  currentIndex.value = index;
  emit("click", index);
};
</script>

<template>
  <div :class="['wrapper', className]">
    <label for="toggle-buttons" class="text">{{ label }}</label>
    <div id="toggle-buttons" role="group" class="buttons-container">
      <button
        type="button"
        v-for="(button, i) in buttons"
        :id="button"
        :class="{
          active: i === currentIndex,
          inactive: i !== currentIndex,
          button: true,
          text: true,
        }"
        @click="onClick(i)"
      >
        {{ button }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: row;
  align-items: center;
}
.buttons-container {
  display: inline-flex;
  width: min-content;
  border: 0px solid;
  border-radius: 4px;
  overflow: hidden;
  outline: none;
  background-color: var(--color-border);
  margin-left: 24px;
}
.button {
  color: var(--color-text);
  padding: 8px 16px;
  border: 0 solid;
}
.active {
  background-color: var(--primary);
}
.inactive {
  background-color: var(--gray);
}
.text {
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 0.75rem;
  text-transform: uppercase;
}
</style>
