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
      <BlInputAtom
        :id="fieldId"
        v-model="computedValue"
        :type="type"
        :placeholder="placeholder"
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
import BlInputAtom from '../atoms/BlInput.vue';
import type { BlFormError } from '@/types/global';

interface Props {
  label?: string;
  id?: string;
  modelValue: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
  placeholder?: string;
  errors?: BlFormError[];
  helpText?: string;
  required?: boolean;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
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
