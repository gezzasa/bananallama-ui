<template>
  <div class="pb-input__group">
    <BlInputLabel
      v-if="label"
      :for="id"
      class-name="pb-select-group"
    >
      <span class="pb-select__label-copy">
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
        class="pb-select__error"
      >
        {{ error.$message }}
      </p>
    </BlInputLabel>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import BlSelect from '@/components/atoms/BlSelect.vue';
import BlInputLabel from '@/components/atoms/BlInputLabel.vue';
import BlOption from '@/components/atoms/BlOption.vue';

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
