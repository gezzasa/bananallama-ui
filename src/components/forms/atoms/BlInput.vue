<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <input
    v-bind="$attrs"
    v-model="computedValue"
    :type="type"
    class="bl-input"
    data-test="bl-input"
    :class="{ 'bl-input-error': error }"
    :disabled="disabled"
  >
</template>

<script setup lang="ts">
import { toRefs, computed } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'text',
  },
  disabled: {
    type: Boolean,
  },
  error: {
    type: Boolean,
    default: false,
  },
});

const { modelValue, error } = toRefs(props);

const emit = defineEmits(['update:modelValue']);

const computedValue = computed({
  get() {
    return modelValue.value;
  },
  set(value: String) {
    emit('update:modelValue', value);
  },
});
</script>
