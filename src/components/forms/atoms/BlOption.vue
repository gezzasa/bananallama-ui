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
import { toRefs } from 'vue';

const props = defineProps({
  option: {
    type: String,
    required: true,
  },
});

const { option } = toRefs(props);
</script>
