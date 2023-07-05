<template>
  <BlLabel
    :is-for="id"
    class-name="bl-checkbox-group"
  >
    <slot name="label-before" />
    <BlCheckbox
      :id="id"
      v-bind="$attrs"
      type="checkbox"
      :error="!!errors.length"
    />
    <span
      v-if="label"
      class="bl-input__label-copy"
    >
      <slot name="label">{{ label }}</slot>
    </span>
    <BlError :errors="errors" />
  </BlLabel>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { FormError } from '@/types/global';
import BlCheckbox from '../atoms/BlCheckbox.vue';
import BlError from '../atoms/BlError.vue';
import BlLabel from '../atoms/BlLabel.vue';

defineProps({
  label: {
    type: String,
    default: '',
  },
  id: {
    type: String,
    default: '',
  },
  errors: {
    type: Array as PropType<FormError[]>,
    default: () => [],
  },
});
</script>
