<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <select
    :id="id"
    v-model="computedValue"
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
import { useFormInput, type BaseInputProps, FORM_EMITS } from '../composables/useFormInput';

interface Props extends Omit<BaseInputProps, 'placeholder'> {
  multiple?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  error: false,
  required: false,
  multiple: false,
});

const emit = defineEmits(FORM_EMITS);

const computedValue = useFormInput<string>(props.modelValue, emit);
</script>
