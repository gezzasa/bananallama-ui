<template>
  <BlLabel
    :is-for="id"
    class-name="bl-checkbox-group"
  >
    <slot name="label-before" />
    <BlCheckbox
      :id="id"
      v-model="computedValue"
      type="checkbox"
    />
    <span
      v-if="label"
      class="bl-input__label-copy"
    >
      <slot name="label">{{ label }}</slot>
    </span>
  </BlLabel>
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue';
import BlCheckbox from '../atoms/BlCheckbox.vue';
import BlLabel from '../atoms/BlLabel.vue';

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
    type: Boolean,
    default: false,
  },
});

const { modelValue } = toRefs(props);

const emit = defineEmits(['update:modelValue']);

const computedValue = computed({
  get() {
    return modelValue.value;
  },
  set(value:boolean) {
    emit('update:modelValue', value);
  },
});
</script>
