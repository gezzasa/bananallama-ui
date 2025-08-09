<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <input
    v-bind="$attrs"
    :checked="modelValue"
    @change="handleChange"
    type="checkbox"
    :id="id"
    :name="name"
    :disabled="disabled"
    :required="required"
    :value="value"
    class="bl-checkbox"
    data-test="bl-checkbox"
    :class="{ 
      'bl-checkbox--error': error,
      'bl-checkbox--disabled': disabled
    }"
  >
</template>

<script setup lang="ts">
import type { BaseCheckboxProps } from '../composables/useFormInput';

interface Props extends BaseCheckboxProps {}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  error: false,
  required: false,
});

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>();

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.checked);
};
</script>
