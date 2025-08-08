<template>
  <a
    class="bl-link"
    :href="href"
    data-test="bl-link"
  >
    <slot>{{ text }}</slot>
  </a>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
export type ButtonType = 'link' | 'submit' | 'reset' | undefined

import type { LinkTarget } from '@/types/global';

defineProps({
  href: {
    type: String,
    default: '',
  },
  text: {
    type: String,
    default: '',
  },
  target: {
    type: String as PropType<LinkTarget>,
    default: '',
  },
});
</script>
