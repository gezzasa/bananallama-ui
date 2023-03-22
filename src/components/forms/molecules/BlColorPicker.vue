<template>
  <BlInputGroup
    id="element-color"
    v-model="computedValue"
    :label="label"
    :error="errors"
  />
</template>
<script setup lang="ts">
import { toRefs, computed } from 'vue';
import BlInputGroup from './BlInputGroup.vue';


const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String,
    required: true,
  },
  errors: {
    type: Array,
    default: () => [],
  },
});

const { label, modelValue, errors } = toRefs(props);

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
