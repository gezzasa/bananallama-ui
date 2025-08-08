<template>
  <button
    class="bl-button"
    :type="type"
    data-test="bl-button"
    v-bind="$attrs"
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<script setup lang="ts">
import type { BlButtonStyle } from '@/types/global';

export type ButtonType = 'button' | 'submit' | 'reset';

const { label = '', type = 'button', buttonStyle = 'primary' } = defineProps<{
  label?: string;
  type?: ButtonType;
  buttonStyle?: BlButtonStyle;
}>();
</script>
