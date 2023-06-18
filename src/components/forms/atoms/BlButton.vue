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
import { type PropType, toRefs } from 'vue';
export type ButtonType = 'button' | 'submit' | 'reset' | undefined

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  type: {
    type: String as PropType<ButtonType>,
    default: 'button',
  },
});

const { label, type } = toRefs(props);
</script>
