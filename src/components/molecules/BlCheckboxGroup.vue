<template>
  <div class="pb-input__group">
    <BlInputLabel
      :for="id"
      class-name="pb-checkbox-group"
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
        class="pb-input__label-copy"
      >
        <slot name="label">{{ label }}</slot>
      </span>
      <p
        v-for="error of errors"
        :key="error.$uid"
        class="pb-input__error"
      >
        {{ error.$message }}
      </p>
    </BlInputLabel>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import BlCheckbox from '@/components/atoms/BlCheckbox.vue';
import BlInputLabel from '@/components/atoms/BlInputLabel.vue';


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
