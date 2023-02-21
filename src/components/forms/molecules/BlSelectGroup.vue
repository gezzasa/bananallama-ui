<template>
  <BlInputLabel
    v-if="label"
    :for="id"
    class-name="bl-select-group"
  >
    <span class="bl-select__label-copy">
      <slot name="label">{{ label }}</slot>
    </span>
    <BlSelect
      :id="id"
      v-bind="$attrs"
      :error="!!errors.length"
    >
      <slot name="additional-options-before" />
      <slot>
        <BlOption
          v-for="option in options"
          :key="option"
          :option="option"
        />
      </slot>
      <slot name="additional-options-after" />
    </BlSelect>
    <p
      v-for="error of errors"
      :key="error.$uid"
      class="bl-select__error"
    >
      {{ error.$message }}
    </p>
  </BlInputLabel>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import BlSelect from '../atoms/BlSelect.vue';
import BlInputLabel from '../atoms/BlInputLabel.vue';
import BlOption from '../atoms/BlOption.vue';

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  id: {
    type: String,
    default: '',
  },
  options: {
    type: Array,
    default: null,
  },
  errors: {
    type: Array,
    default: () => [],
  },
});

const { label, id, options, errors } = toRefs(props);
</script>

<style lang="scss">
@import '../../../styles/index.scss';
</style>
