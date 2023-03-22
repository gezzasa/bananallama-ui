<template>
  <input
    v-bind="$attrs"
    v-model="computedValue"
    class="pb-input"
    data-test="pb-input"
    :class="{ error: error }"
  >
</template>

<script setup lang="ts">
import { toRefs, computed } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
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
  set(value: String) {
    emit('update:modelValue', value);
  },
});
</script>
