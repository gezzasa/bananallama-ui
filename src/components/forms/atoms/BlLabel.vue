<!-- eslint-disable vuejs-accessibility/label-has-for -->

<template>
  <label
    class="bl-input__label"
    data-test="bl-input__label"
    :class="className"
    :for="isFor"
  >
    <slot />
  </label>
</template>

<script setup lang="ts">
const { className = '', isFor } = defineProps<{
  className?: string;
  isFor: string;
}>();
</script>
