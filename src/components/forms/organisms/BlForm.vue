<template>
  <form 
    class="bl-form"
    :class="{
      'bl-form--loading': loading,
      'bl-form--disabled': disabled
    }"
    @submit.prevent="handleSubmit"
  >
    <div class="bl-form__header" v-if="title || $slots.header">
      <slot name="header">
        <h2 class="bl-form__title">{{ title }}</h2>
        <p v-if="description" class="bl-form__description">{{ description }}</p>
      </slot>
    </div>

    <div class="bl-form__body">
      <slot 
        :disabled="disabled"
        :loading="loading"
        :errors="formErrors"
        :submit="handleSubmit"
        :reset="handleReset"
      />
    </div>

    <div class="bl-form__footer" v-if="showActions || $slots.footer">
      <slot name="footer" :submit="handleSubmit" :reset="handleReset" :loading="loading" :disabled="disabled">
        <div class="bl-form__actions">
          <BlButton
            v-if="showReset"
            type="button"
            button-style="secondary"
            :disabled="disabled || loading"
            @click="handleReset"
          >
            {{ resetLabel }}
          </BlButton>
          
          <BlButton
            type="submit"
            button-style="primary"
            :disabled="disabled || !isValid"
            :loading="loading"
          >
            {{ submitLabel }}
          </BlButton>
        </div>
      </slot>
    </div>

    <BlError 
      v-if="formErrors.length > 0" 
      :errors="formErrors" 
      class="bl-form__global-errors"
    />
  </form>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import BlButton from '../atoms/BlButton.vue';
import BlError from '../atoms/BlError.vue';
import type { BlFormError } from '@/types/global';

interface Props {
  title?: string;
  description?: string;
  loading?: boolean;
  disabled?: boolean;
  errors?: BlFormError[];
  showActions?: boolean;
  showReset?: boolean;
  submitLabel?: string;
  resetLabel?: string;
  validateOnSubmit?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  loading: false,
  disabled: false,
  errors: () => [],
  showActions: true,
  showReset: true,
  submitLabel: 'Submit',
  resetLabel: 'Reset',
  validateOnSubmit: true,
});

const emit = defineEmits<{
  submit: [event: Event];
  reset: [event: Event];
  validate: [];
}>();

const formErrors = ref<BlFormError[]>([...props.errors]);
const isValid = computed(() => formErrors.value.length === 0);

const handleSubmit = (event: Event) => {
  if (props.validateOnSubmit) {
    emit('validate');
  }
  
  if (isValid.value) {
    emit('submit', event);
  }
};

const handleReset = (event: Event) => {
  formErrors.value = [];
  emit('reset', event);
};

// Expose methods for parent components
defineExpose({
  setErrors: (errors: BlFormError[]) => {
    formErrors.value = errors;
  },
  clearErrors: () => {
    formErrors.value = [];
  },
  isValid: () => isValid.value,
});
</script>

<style scoped>
.bl-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.bl-form--loading {
  pointer-events: none;
  opacity: 0.7;
}

.bl-form--disabled {
  pointer-events: none;
  opacity: 0.6;
}

.bl-form__header {
  margin-bottom: 1rem;
}

.bl-form__title {
  margin: 0 0 0.5rem 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-text-primary, #212529);
}

.bl-form__description {
  margin: 0;
  color: var(--color-text-secondary, #6c757d);
  font-size: 0.875rem;
  line-height: 1.5;
}

.bl-form__body {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.bl-form__footer {
  margin-top: 1rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-border, #dee2e6);
}

.bl-form__actions {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
}

.bl-form__global-errors {
  margin-top: 1rem;
  padding: 1rem;
  background-color: var(--color-error-bg, #f8d7da);
  border: 1px solid var(--color-error-border, #f5c6cb);
  border-radius: 0.375rem;
}

/* Responsive design */
@media (max-width: 768px) {
  .bl-form__actions {
    flex-direction: column-reverse;
  }
}
</style>
