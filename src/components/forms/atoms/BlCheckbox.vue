<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <input
    v-bind="$attrs"
    v-model="computedValue"
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
import { useFormInput, FORM_EMITS, type BaseCheckboxProps } from '../composables/useFormInput';

interface Props extends BaseCheckboxProps {}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  error: false,
  required: false,
});

const emit = defineEmits(FORM_EMITS);

const computedValue = useFormInput<boolean>(props.modelValue, emit);
</script>
