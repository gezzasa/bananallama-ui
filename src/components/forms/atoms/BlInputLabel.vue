<!-- eslint-disable vuejs-accessibility/label-has-for -->

<template>
  <label
    class="pb-input__label"
    :class="className"
    :for="$attrs.for"
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
});

const { className } = toRefs(props);
</script>
