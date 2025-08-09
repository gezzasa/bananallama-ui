<template>
  <div 
    class="bl-form-field"
    :class="{
      'bl-form-field--error': hasErrors,
      'bl-form-field--required': required,
      'bl-form-field--disabled': disabled
    }"
  >
    <BlLabel
      v-if="label && id"
      :is-for="id"
      :class-name="labelClass"
      :required="required"
    >
      <span class="bl-form-field__label">
        <slot name="label">{{ label }}</slot>
        <span v-if="required" class="bl-form-field__required">*</span>
      </span>
      
      <div class="bl-form-field__input-wrapper">
        <slot 
          :id="id"
          :error="hasErrors"
          :disabled="disabled"
          :required="required"
        />
      </div>
      
      <div v-if="helpText && !hasErrors" class="bl-form-field__help">
        {{ helpText }}
      </div>
      
      <BlError 
        v-if="hasErrors" 
        :errors="errors" 
        class="bl-form-field__errors"
      />
    </BlLabel>
    
    <!-- Labelless variant -->
    <template v-else>
      <div class="bl-form-field__input-wrapper">
        <slot 
          :id="id"
          :error="hasErrors"
          :disabled="disabled"
          :required="required"
        />
      </div>
      
      <div v-if="helpText && !hasErrors" class="bl-form-field__help">
        {{ helpText }}
      </div>
      
      <BlError 
        v-if="hasErrors" 
        :errors="errors" 
        class="bl-form-field__errors"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import BlLabel from '../atoms/BlLabel.vue';
import BlError from '../atoms/BlError.vue';
import type { BlFormError } from '@/types/global';

interface Props {
  label?: string;
  id?: string;
  errors?: BlFormError[];
  helpText?: string;
  required?: boolean;
  disabled?: boolean;
  labelClass?: string;
}

const props = withDefaults(defineProps<Props>(), {
  errors: () => [],
  required: false,
  disabled: false,
  labelClass: 'bl-form-field-group',
});

const hasErrors = computed(() => props.errors.length > 0);
</script>
