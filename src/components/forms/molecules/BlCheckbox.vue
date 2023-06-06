<template>
  <BlInputLabel
    :is-for="id"
    class-name="bl-checkbox-group"
  >
    <slot name="label-before" />
    <BlCheckbox
      :id="id"
      v-bind="$attrs"
      type="checkbox"
      :error="!!errors.length"
    />
    <span
      v-if="label"
      class="bl-input__label-copy"
    >
      <slot name="label">{{ label }}</slot>
    </span>
    <p
      v-for="error of errors"
      :key="error.$uid"
      class="bl-input__error"
    >
      {{ error.$message }}
    </p>
  </BlInputLabel>
</template>

<script setup lang="ts">
import BlCheckbox from '../atoms/BlCheckbox.vue';
import BlInputLabel from '../atoms/BlInputLabel.vue';

defineProps({
  label: {
    type: String,
    default: '',
  },
  id: {
    type: String,
    default: '',
  },
  errors: {
    type: Array,
    default: () => [],
  },
});
</script>

<style lang="scss">
@import '../../../styles/index.scss';
</style>
