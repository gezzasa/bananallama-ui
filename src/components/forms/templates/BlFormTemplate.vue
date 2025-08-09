<template>
  <BlForm
    :title="title"
    :description="description"
    :loading="loading"
    :errors="formErrors"
    @submit="handleSubmit"
    @reset="handleReset"
    @validate="validateForm"
  >
    <div class="bl-form-template__fields">
      <slot />
    </div>
  </BlForm>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import BlForm from '../organisms/BlForm.vue';
import type { BlFormError } from '@/types/global';

interface Props {
  title?: string;
  description?: string;
  loading?: boolean;
  validationRules?: Record<string, (value: any) => string | null>;
}

const props = withDefaults(defineProps<Props>(), {
  loading: false,
  validationRules: () => ({}),
});

const emit = defineEmits<{
  submit: [data: Record<string, any>];
  reset: [];
  validationError: [errors: BlFormError[]];
}>();

const formErrors = ref<BlFormError[]>([]);
const formData = ref<Record<string, any>>({});

const validateForm = () => {
  const errors: BlFormError[] = [];
  
  Object.entries(props.validationRules).forEach(([field, validator]) => {
    const error = validator(formData.value[field]);
    if (error) {
      errors.push({ message: `${field}: ${error}` });
    }
  });
  
  formErrors.value = errors;
  
  if (errors.length > 0) {
    emit('validationError', errors);
  }
  
  return errors.length === 0;
};

const handleSubmit = (event: Event) => {
  if (validateForm()) {
    emit('submit', formData.value);
  }
};

const handleReset = () => {
  formData.value = {};
  formErrors.value = [];
  emit('reset');
};

// Provide form data to child components
const updateFormData = (field: string, value: any) => {
  formData.value[field] = value;
};

// Expose methods for external use
defineExpose({
  validateForm,
  setFormData: (data: Record<string, any>) => {
    formData.value = { ...data };
  },
  getFormData: () => ({ ...formData.value }),
  setErrors: (errors: BlFormError[]) => {
    formErrors.value = errors;
  },
  clearErrors: () => {
    formErrors.value = [];
  },
});
</script>

<style scoped>
.bl-form-template__fields {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
</style>
