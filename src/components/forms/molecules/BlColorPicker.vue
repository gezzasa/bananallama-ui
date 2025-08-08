<template>
  <BlLabel
    v-if="label"
    :is-for="id"
    class-name="bl-input-group"
  >
    <span class="bl-color-picker__label-copy">
      <slot name="label">{{ label }}</slot>
    </span>
    <div>
      <BlInput
        :id="`color-picker-${id}`"
        v-model="computedValue"
        class="bl-color-picker"
        type="color"
        :error="!!errors.length"
      />
      <BlInput
        :id="`color-text-${id}`"
        v-model="computedValue"
        :error="!!errors.length"
      />
    </div>
    <BlError :errors="errors" />
  </BlLabel>
</template>
<script setup lang="ts">
import { PropType, toRefs, computed } from 'vue';
import BlLabel from '../atoms/BlLabel.vue';
import BlInput from '../atoms/BlInput.vue';
import BlError from '../atoms/BlError.vue';
import { BlFormError } from '@/types/global';


const props = defineProps({
  id: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    required: true,
  },
  errors: {
    type: Array as PropType<BlFormError[]>,
    default: () => [],
  },
  modelValue: {
    type: String,
    required: true,
  },
});

const { label, errors, modelValue } = toRefs(props);

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
