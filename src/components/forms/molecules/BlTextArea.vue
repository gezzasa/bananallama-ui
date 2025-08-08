<template>
  <BlLabel
    v-if="label"
    :is-for="id"
    class-name="bl-input-group"
  >
    <span class="bl-input__label-copy">
      <slot name="label">{{ label }}</slot>
    </span>
    <BlTextArea
      :id="id"
      v-model="computedValue"
      :error="!!errors.length"
    />
    <BlError :errors="errors" />
  </BlLabel>
</template>

<script setup lang="ts">
import { computed, toRefs, type PropType } from 'vue';
import BlTextArea from '../atoms/BlTextArea.vue';
import BlLabel from '../atoms/BlLabel.vue';
import BlError from '../atoms/BlError.vue';
import { BlFormError } from '@/types/global';

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  id: {
    type: String,
    default: '',
  },
  modelValue: {
    type: String,
    required: true,
  },
  errors: {
    type: Array as PropType<BlFormError[]>,
    default: () => [],
  },
});

const { label, id, errors, modelValue } = toRefs(props);

const emit = defineEmits(['update:modelValue']);

const computedValue = computed({
  get() {
    return modelValue.value;
  },
  set(value:string) {
    emit('update:modelValue', value);
  },
});
</script>
