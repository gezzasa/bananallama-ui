<template>
  <BlLabel
    v-if="label"
    :is-for="id"
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
    <BlError :errors="errors" />
  </BlLabel>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { BlFormError } from '@/types/global';
import { toRefs } from 'vue';
import BlSelect from '../atoms/BlSelect.vue';
import BlLabel from '../atoms/BlLabel.vue';
import BlOption from '../atoms/BlOption.vue';
import BlError from '../atoms/BlError.vue';

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
    type: Array as PropType<string[]>,
    default: null,
  },
  errors: {
    type: Array as PropType<BlFormError[]>,
    default: () => [],
  },
});

const { label, id, options, errors } = toRefs(props);
</script>
