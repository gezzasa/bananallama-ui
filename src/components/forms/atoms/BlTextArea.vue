<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <textarea
    v-bind="$attrs"
    :value="modelValue"
    @input="handleInput"
    :id="id"
    :name="name"
    :disabled="disabled"
    :readonly="readonly"
    :required="required"
    :placeholder="placeholder"
    :rows="rows"
    :cols="cols"
    class="bl-textarea"
    data-test="bl-textarea"
    :class="{ 
      'bl-textarea--error': error,
      'bl-textarea--disabled': disabled,
      'bl-textarea--readonly': readonly
    }"
  />
</template>

<script setup lang="ts">
import type { BaseInputProps } from '../composables/useFormInput';

interface Props extends BaseInputProps {
  rows?: number;
  cols?: number;
  resize?: 'none' | 'both' | 'horizontal' | 'vertical';
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  error: false,
  readonly: false,
  required: false,
  placeholder: '',
  rows: 4,
  resize: 'vertical',
});

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>();

const handleInput = (event: Event) => {
  const target = event.target as HTMLTextAreaElement;
  emit('update:modelValue', target.value);
};
</script>
