<!-- eslint-disable vuejs-accessibility/form-control-has-label -->

<template>
  <select
    :id="id"
    v-model="computedValue"
    :name="id"
    class="bl-select"
    data-test="bl-select"
    :class="{ 'bl-input-error': error }"
    :disabled="disabled"
  >
    <slot />
  </select>
</template>

<script setup lang="ts">
import { toRefs, computed } from 'vue';

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String,
    required: true,
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
  set(value: Object) {
    emit('update:modelValue', value);
  },
});
</script>
