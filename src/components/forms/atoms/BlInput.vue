<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <input
    v-bind="$attrs"
    v-model="computedValue"
    :type="type"
    :id="id"
    :name="name"
    :disabled="disabled"
    :readonly="readonly"
    :required="required"
    :placeholder="placeholder"
    class="bl-input"
    data-test="bl-input"
    :class="{ 
      'bl-input--error': error,
      'bl-input--disabled': disabled,
      'bl-input--readonly': readonly
    }"
  >
</template>

<script setup lang="ts">
import { useFormInput, type BaseInputProps, FORM_EMITS } from '../composables/useFormInput';

interface Props extends BaseInputProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  disabled: false,
  error: false,
  readonly: false,
  required: false,
  placeholder: '',
});

const emit = defineEmits(FORM_EMITS);

const computedValue = useFormInput<string>(props.modelValue, emit);
</script>
