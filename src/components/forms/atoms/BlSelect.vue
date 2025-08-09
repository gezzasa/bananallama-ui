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
import { computed } from 'vue';

const { id, modelValue, disabled = false, error = false } = defineProps<{
  id: string;
  modelValue: string;
  disabled?: boolean;
  error?: boolean;
}>();

const emit = defineEmits(['update:modelValue']);

const computedValue = computed<string>({
  get() {
    return modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});
</script>
