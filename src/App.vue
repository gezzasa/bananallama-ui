<template>
  <div class="app-container">
    <header class="app-header">
      <h1>Bananallama UI Component Library</h1>
      <p>A comprehensive showcase of all available components</p>
    </header>

    <main class="app-main">
      <!-- Form Components Section -->
      <section class="component-section">
        <h2>Form Components</h2>

        <BlGrid>
          <!-- Input Components -->
          <div class="component-demo">
            <h3>Input Fields</h3>
            <BlInput
              id="demo-input"
              v-model="formData.textInput"
              label="Text Input"
              :errors="inputErrors"
            />

            <BlTextArea
              id="demo-textarea"
              v-model="formData.textArea"
              label="Text Area"
              :errors="[]"
            />
          </div>

          <!-- Selection Components -->
          <div class="component-demo">
            <h3>Selection Components</h3>
            <BlSelect
              id="demo-select"
              v-model="formData.selectValue"
              label="Select Option"
              :errors="[]"
            >
              <option value="">
                Choose an option
              </option>
              <option value="option1">
                Option 1
              </option>
              <option value="option2">
                Option 2
              </option>
              <option value="option3">
                Option 3
              </option>
            </BlSelect>

            <BlCheckbox
              id="demo-checkbox"
              v-model="formData.checkboxValue"
              label="Checkbox Option"
              :errors="[]"
            />

            <BlRadio
              id="demo-radio"
              v-model="formData.radioValue"
              name="demo-radio-group"
              value="radio-option"
              label="Radio Option"
            />

            <BlRadio
              id="demo-radio-2"
              v-model="formData.radioValue"
              name="demo-radio-group"
              value="radio-option-2"
              label="Radio Option 2"
            />

            <BlRadio
              id="demo-radio-3"
              v-model="formData.radioValue"
              name="demo-radio-group"
              value="radio-option-3"
              label="Radio Option 3"
            />
          </div>

          <!-- Interactive Components -->
          <div class="component-demo">
            <h3>Interactive Components</h3>
            <BlColorPicker
              id="demo-color"
              v-model="formData.colorValue"
              label="Color Picker"
              :errors="[]"
            />

            <BlRichText
              id="demo-richtext"
              v-model="formData.richTextValue"
              label="Rich Text Editor"
              :errors="[]"
            />
          </div>
        </BlGrid>
      </section>

      <!-- Button Components Section -->
      <section class="component-section">
        <h2>Button Components</h2>
        <div class="button-grid">
          <BlButton
            type="button"
            button-style="primary"
            @click="handlePrimaryClick"
          >
            Primary Button
          </BlButton>

          <BlButton
            type="button"
            button-style="secondary"
            @click="handleSecondaryClick"
          >
            Secondary Button
          </BlButton>

          <BlButton
            type="button"
            button-style="tertiary"
            @click="handleTertiaryClick"
          >
            Tertiary Button
          </BlButton>

          <BlButton
            type="submit"
            button-style="primary"
            @click="handleSubmit"
          >
            Submit Button
          </BlButton>
        </div>
      </section>

      <!-- Error Display Section -->
      <section class="component-section">
        <h2>Error Display</h2>
        <BlError :errors="sampleErrors" />
      </section>

      <!-- Form Data Preview -->
      <section class="component-section">
        <h2>Form Data Preview</h2>
        <pre class="data-preview">{{ JSON.stringify(formData, null, 2) }}</pre>
      </section>

      <!-- Action Messages -->
      <section
        v-if="actionMessage"
        class="component-section"
      >
        <h2>Latest Action</h2>
        <p class="action-message">
          {{ actionMessage }}
        </p>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import {
  BlButton,
  BlCheckbox,
  BlColorPicker,
  BlError,
  BlGrid,
  BlInput,
  BlRadio,
  BlRichText,
  BlSelect,
  BlTextArea,
} from './components';
import type { BlFormError } from './types/global';

// Form data
const formData = reactive({
  textInput: 'Hello World',
  textArea: 'This is a sample text area content.\nIt supports multiple lines.',
  selectValue: 'option1',
  checkboxValue: true,
  radioValue: 'option1',
  colorValue: '#3498db',
  richTextValue: '<p>This is <strong>rich text</strong> content with <em>formatting</em>.</p>',
});

// Error examples
const inputErrors = ref<BlFormError[]>([{ message: 'This is a sample validation error' }]);

const sampleErrors = ref<BlFormError[]>([{ message: 'This is a general error message' }, { message: 'Another error example for demonstration' }]);

// Action message for button clicks
const actionMessage = ref<string>('');

// Button event handlers
const handlePrimaryClick = () => {
  actionMessage.value = 'Primary button was clicked!';
  setTimeout(() => actionMessage.value = '', 3000);
};

const handleSecondaryClick = () => {
  actionMessage.value = 'Secondary button was clicked!';
  setTimeout(() => actionMessage.value = '', 3000);
};

const handleTertiaryClick = () => {
  actionMessage.value = 'Tertiary button was clicked!';
  setTimeout(() => actionMessage.value = '', 3000);
};

const handleSubmit = () => {
  actionMessage.value = 'Form submitted with current data!';
  // Form data is available in formData reactive object
  setTimeout(() => actionMessage.value = '', 3000);
};
</script>

<style scoped>
.app-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.app-header {
  text-align: center;
  margin-bottom: 40px;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 8px;
}

.app-main {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.component-section {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #e9ecef;
}

.component-section h2 {
  margin: 0 0 20px 0;
  color: #495057;
  border-bottom: 2px solid #dee2e6;
  padding-bottom: 10px;
}

.component-demo {
  background: white;
  padding: 20px;
  border-radius: 6px;
  border: 1px solid #dee2e6;
  margin-bottom: 20px;
}

.component-demo h3 {
  margin: 0 0 15px 0;
  color: #6c757d;
  font-size: 1.2rem;
}

.button-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  align-items: start;
}

.data-preview {
  background: #343a40;
  color: #f8f9fa;
  padding: 15px;
  border-radius: 6px;
  overflow-x: auto;
  font-size: 0.9rem;
}

.action-message {
  background: #d4edda;
  color: #155724;
  padding: 10px 15px;
  border-radius: 6px;
  border: 1px solid #c3e6cb;
  margin: 0;
}

/* Form spacing */
.component-demo > * + * {
  margin-top: 15px;
}

/* Responsive design */
@media (max-width: 768px) {
  .app-container {
    padding: 10px;
  }

  .app-header h1 {
    font-size: 2rem;
  }

  .button-grid {
    grid-template-columns: 1fr;
  }
}
</style>
