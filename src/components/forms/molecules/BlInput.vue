<template>
  <BlLabel
    v-if="label"
    :is-for="id"
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
      class="bl-error bl-input__error"
    >
      {{ error.$message }}
    </p>
  </BlLabel>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import BlInput from '../atoms/BlInput.vue';
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
