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
  </BlLabel>
</template>

<script setup lang="ts">
import { toRefs, computed } from 'vue';
import BlLabel from '../atoms/BlLabel.vue';
import BlInput from '../atoms/BlInput.vue';

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
});

const { label, id, modelValue } = toRefs(props);

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
