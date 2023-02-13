<!-- eslint-disable vuejs-accessibility/form-control-has-label -->

<template>
  <select
    :id="$attrs.id"
    v-model="computedValue"
    :name="$attrs.id"
    class="pb-select"
    data-test="pb-select"
    :class="{ error: error }"
  >
    <slot />
  </select>
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
  set(value: Object) {
    emit('update:modelValue', value);
  },
});
</script>
