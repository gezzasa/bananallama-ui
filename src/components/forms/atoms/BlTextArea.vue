<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <textarea
    v-bind="$attrs"
    v-model="computedValue"
    :type="type"
    class="bl-text-area"
    data-test="bl-text-area"
    :class="{ 'bl-input-error': error }"
    :disabled="disabled"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue';

const { modelValue, type = 'text', disabled = false, error = false } = defineProps<{
  modelValue: string;
  type?: string;
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
