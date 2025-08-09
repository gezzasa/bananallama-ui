<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <select
    :id="id"
    :value="modelValue"
    @change="handleChange"
    :name="name || id"
    :disabled="disabled"
    :required="required"
    class="bl-select"
    data-test="bl-select"
    :class="{ 
      'bl-select--error': error,
      'bl-select--disabled': disabled
    }"
  >
    <slot />
  </select>
</template>

<script setup lang="ts">
import type { BaseInputProps } from '../composables/useFormInput';

interface Props extends Omit<BaseInputProps, 'placeholder'> {
  multiple?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  error: false,
  required: false,
  multiple: false,
});

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>();

const handleChange = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  emit('update:modelValue', target.value);
};
</script>
