<template>
  <BlFormField
    :label="label"
    :id="id"
    :errors="errors"
    :help-text="helpText"
    :required="required"
    :disabled="disabled"
  >
    <template #default="{ id: fieldId, error, disabled: fieldDisabled, required: fieldRequired }">
      <BlTextAreaAtom
        :id="fieldId"
        v-model="computedValue"
        :placeholder="placeholder"
        :rows="rows"
        :cols="cols"
        :resize="resize"
        :disabled="fieldDisabled"
        :required="fieldRequired"
        :error="error"
        v-bind="$attrs"
      />
    </template>
  </BlFormField>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import BlFormField from './BlFormField.vue';
import BlTextAreaAtom from '../atoms/BlTextArea.vue';
import type { BlFormError } from '@/types/global';

interface Props {
  label?: string;
  id?: string;
  modelValue: string;
  placeholder?: string;
  rows?: number;
  cols?: number;
  resize?: 'none' | 'both' | 'horizontal' | 'vertical';
  errors?: BlFormError[];
  helpText?: string;
  required?: boolean;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  rows: 4,
  resize: 'vertical',
  errors: () => [],
  required: false,
  disabled: false,
});

const emit = defineEmits(['update:modelValue']);

const computedValue = computed({
  get: () => props.modelValue,
  set: (value: string) => emit('update:modelValue', value),
});
</script>
