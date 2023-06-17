<template>
  <p
    v-for="error of errors"
    :key="error"
    class="bl-error bl-radio__error"
  >
    {{ error }}
  </p>
</template>
<script lang="ts" setup>

type ErrorSchema = string[]

const props = defineProps({
  errors: {
    type: Array,
    default: () => [],
  },
});
</script>
