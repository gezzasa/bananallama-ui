<template>
  <option
    class="bl-option"
    data-test="bl-option"
    :value="option"
  >
    <slot>{{ option }}</slot>
  </option>
</template>

<script setup lang="ts">
const { option } = defineProps<{
  option: string;
}>();
</script>
