<template>
  <p
    v-for="error of errors"
    :key="error"
    class="bl-error"
    data-test="bl-error"
  >
    {{ error.message }}
  </p>
</template>
<script lang="ts" setup>
import { PropType } from 'vue';
import type { BlFormError } from '@/types/global';

defineProps({
  errors: {
    type: Array as PropType<BlFormError[]>,
    default: () => [],
  },
});
</script>
