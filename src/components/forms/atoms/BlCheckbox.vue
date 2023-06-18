<!-- eslint-disable vuejs-accessibility/form-control-has-label -->

<template>
  <input
    v-bind="$attrs"
    v-model="computedValue"
    type="checkbox"
    class="bl-checkbox"
    data-test="bl-checkbox"
    :class="{ 'bl-input-error': error }"
  >
</template>

<script setup lang="ts">
import { toRefs, computed } from 'vue';

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
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
  set(value: Boolean) {
    emit('update:modelValue', value);
  },
});
</script>
