<template>
  <BlInput
    :id="id"
    class="bl-color-picker"
    v-bind="$attrs"
    type="color"
    :label="label"
    :errors="errors"
  />
</template>
<script setup lang="ts">
import { toRefs } from 'vue';
import BlInput from './BlInput.vue';


const props = defineProps({
  id: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    required: true,
  },
  errors: {
    type: Array,
    default: () => [],
  },
});

const { label, errors } = toRefs(props);
</script>
