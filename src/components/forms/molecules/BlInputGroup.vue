<template>
  <BlInputLabel
    v-if="label"
    :for="id"
    class-name="bl-input-group"
  >
    <span class="bl-input__label-copy">
      <slot name="label">{{ label }}</slot>
    </span>
    <BlInput
      :id="id"
      v-bind="$attrs"
      :error="!!errors.length"
    />
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
import { toRefs } from 'vue';
import BlInput from '../atoms/BlInput.vue';
import BlInputLabel from '../atoms/BlInputLabel.vue';

const props = defineProps({
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

const { label, id, errors } = toRefs(props);
</script>

<style lang="scss">
@import '../../../styles/index.scss';
</style>
