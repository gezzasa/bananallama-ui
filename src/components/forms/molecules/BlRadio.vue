<template>
  <BlLabel
    v-if="label"
    :is-for="id"
    class-name="bl-radio-group"
  >
    <slot>
      <BlInput
        :id="id"
        v-model="computedValue"
        type="radio"
        :value="value"
        :name="name"
      />
    </slot>
    <span class="bl-radio__label-copy">
      <slot name="label">{{ label }}</slot>
    </span>
    <BlError :errors="errors" />
  </BlLabel>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { FormError } from '@/types/global';
import { toRefs, computed } from 'vue';
import BlLabel from '../atoms/BlLabel.vue';
import BlInput from '../atoms/BlInput.vue';
import BlError from '../atoms/BlError.vue';

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  errors: {
    type: Array as PropType<FormError[]>,
    default: () => [],
  },
});

const { label, id, modelValue, errors } = toRefs(props);

const emit = defineEmits(['update:modelValue']);

const computedValue = computed({
  get() {
    return modelValue.value;
  },
  set(val) {
    emit('update:modelValue', val);
  },
});
</script>
