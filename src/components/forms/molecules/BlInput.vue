<template>
  <BlLabel
    v-if="label"
    :is-for="id"
    class-name="bl-input-group"
  >
    <span class="bl-input__label-copy">
      <slot name="label">{{ label }}</slot>
    </span>
    <BlInput
      :id="id"
      v-model="computedValue"
      :error="!!errors.length"
    />
    <BlError :errors="errors" />
  </BlLabel>
</template>

<script setup lang="ts">
import { type PropType, toRefs, computed } from 'vue';
import BlInput from '../atoms/BlInput.vue';
import BlLabel from '../atoms/BlLabel.vue';
import BlError from '../atoms/BlError.vue';
import type { BlFormError } from '@/types/global';

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
  modelValue: {
    type: String,
    required: true,
  },
});

const { label, id, errors, modelValue } = toRefs(props);

const emit = defineEmits(['update:modelValue']);

const computedValue = computed({
  get() {
    return modelValue.value;
  },
  set(value:string) {
    emit('update:modelValue', value);
  },
});
</script>
