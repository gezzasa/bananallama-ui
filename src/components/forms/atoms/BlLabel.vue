<!-- eslint-disable vuejs-accessibility/label-has-for -->

<template>
  <label
    class="pb-input__label"
    data-test="pb-input__label"
    :class="className"
    :for="isFor"
  >
    <slot />
  </label>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';

const props = defineProps({
  className: {
    type: String,
    default: '',
  },
  isFor: {
    type: String,
    required: true,
  },
});

const { className } = toRefs(props);
</script>
