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
import { computed } from 'vue';

const { modelValue, error = false } = defineProps<{
  modelValue: boolean;
  error?: boolean;
}>();

const emit = defineEmits(['update:modelValue']);

const computedValue = computed<boolean>({
  get() {
    return modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});
</script>
