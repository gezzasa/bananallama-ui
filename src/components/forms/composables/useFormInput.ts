import { computed, type WritableComputedRef } from 'vue';

/**
 * Base composable for form input atoms
 * Provides standard v-model binding pattern for all form controls
 */
export function useFormInput<T = string>(
  modelValue: T,
  emit: (event: 'update:modelValue', value: T) => void
): WritableComputedRef<T> {
  return computed({
    get: () => modelValue,
    set: (value: T) => emit('update:modelValue', value),
  });
}

/**
 * Base props interface for form input atoms
 */
export interface BaseInputProps {
  modelValue: string;
  disabled?: boolean;
  error?: boolean;
  readonly?: boolean;
  required?: boolean;
  placeholder?: string;
  id?: string;
  name?: string;
}

/**
 * Base props interface for checkbox atoms
 */
export interface BaseCheckboxProps {
  modelValue: boolean;
  disabled?: boolean;
  error?: boolean;
  required?: boolean;
  id?: string;
  name?: string;
  value?: string | number;
}

/**
 * Extended props interface for molecule form components
 */
export interface FormFieldProps extends Omit<BaseInputProps, 'error'> {
  label?: string;
  errors?: Array<{ message: string }>;
  helpText?: string;
  required?: boolean;
}

/**
 * Standard emits for form components
 */
export const FORM_EMITS = ['update:modelValue'];
