<template>
  <BlLabel
    v-if="label"
    :is-for="id"
    class-name="bl-input-group"
  >
    <span class="bl-input__label-copy">
      <slot name="label">{{ label }}</slot>
    </span>
    <BlTextArea
      :id="id"
      v-bind="$attrs"
      :error="!!errors.length"
    />
    <BlError :errors="errors" />
  </BlLabel>
</template>

<script setup lang="ts">
import { toRefs, type PropType } from 'vue';
import BlTextArea from '../atoms/BlTextArea.vue';
import BlLabel from '../atoms/BlLabel.vue';
import BlError from '../atoms/BlError.vue';
import { BlFormError } from '@/types/global';

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  id: {
    type: String,
    default: '',
  },
  errors: {
    type: Array as PropType<BlFormError[]>,
    default: () => [],
  },
});

const { label, id, errors } = toRefs(props);
</script>
