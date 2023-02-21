<template>
  <option
    class="pb-option"
    :value="option"
  >
    <slot>{{ option }}</slot>
  </option>
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue';

const props = defineProps({
  option: {
    type: String,
    required: true,
  },
});

const { option } = toRefs(props);

const label = computed(() => {
  return option.value.label ?? option.value.value;
});
</script>
