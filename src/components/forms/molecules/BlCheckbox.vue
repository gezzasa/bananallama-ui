<template>
  <BlLabel
    :is-for="id"
    class-name="bl-checkbox-group"
  >
    <slot name="label-before" />
    <BlCheckbox
      :id="id"
      v-bind="$attrs"
      type="checkbox"
      :error="error"
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
import BlCheckbox from '../atoms/BlCheckbox.vue';
import BlLabel from '../atoms/BlLabel.vue';

defineProps({
  label: {
    type: String,
    default: '',
  },
  id: {
    type: String,
    default: '',
  },
});
</script>
