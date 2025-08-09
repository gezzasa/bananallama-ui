<template>
  <div class="app-container">
    <header class="app-header">
      <h1>Bananallama UI Component Library</h1>
      <p>A comprehensive showcase of all available components with Atomic Design</p>
    </header>

    <main class="app-main">
      <!-- Atomic Design Components Section -->
      <section class="component-section">
        <h2>🔸 Atoms - Basic Building Blocks</h2>
        
        <div class="component-demo">
          <h3>Form Atoms (Raw Components)</h3>
          
          <div class="atom-showcase">

            <div class="atom-item">
              <BlInputAtom
                id="atom-input"
                v-model="atomData.input"
                type="text"
                placeholder="Atom input placeholder"
              />
              <div class="value-display">Value: "{{ atomData.input }}"</div>
            </div>

            <div class="atom-item">
              <BlTextAreaAtom
                id="atom-textarea"
                v-model="atomData.textarea"
                placeholder="Atom textarea placeholder"
                :rows="3"
              />
              <div class="value-display">Value: "{{ atomData.textarea }}"</div>
            </div>

            <div class="atom-item">
              <BlCheckboxAtom
                id="atom-checkbox"
                v-model="atomData.checkbox"
                value="atom-check"
              />
              <BlLabelAtom is-for="atom-checkbox">Atom Checkbox</BlLabelAtom>
              <div class="value-display">Value: {{ atomData.checkbox }}</div>
            </div>

            <div class="atom-item">
              <BlSelectAtom
                id="atom-select"
                v-model="atomData.select"
              >
                <BlOptionAtom option="">Choose atom option</BlOptionAtom>
                <BlOptionAtom option="atom1">Atom Option 1</BlOptionAtom>
                <BlOptionAtom option="atom2">Atom Option 2</BlOptionAtom>
              </BlSelectAtom>
              <div class="value-display">Value: "{{ atomData.select }}"</div>
            </div>

            <div class="atom-item">
              <BlButtonAtom
                type="button"
                @click="handleAtomClick"
              >
                Atom Button
              </BlButtonAtom>
              <div class="value-display">Value: {{ atomData.buttonClicks }}</div>
            </div>

            <div class="atom-item">
              <BlLinkAtom href="#" @click.prevent="handleLinkClick">Atom Link</BlLinkAtom>
              <div class="value-display">Value: {{ atomData.linkClicks }}</div>
            </div>

            <div class="atom-item">
              <BlErrorAtom :errors="[{ message: 'Sample atom error message' }]" />
            </div>
          </div>
        </div>
      </section>

      <!-- Molecules Section -->
      <section class="component-section">
        <h2>🔸 Molecules - Enhanced Components</h2>

        <BlGrid>
          <!-- Input Components -->
          <div class="component-demo">
            <h3>Input Molecules (With Labels & Validation)</h3>
            <BlInput
              id="demo-input"
              v-model="formData.textInput"
              label="Text Input Molecule"
              help-text="This is an enhanced input with labels"
              :errors="inputErrors"
            />
            <div class="value-display">Value: "{{ formData.textInput }}"</div>

            <BlTextArea
              id="demo-textarea"
              v-model="formData.textArea"
              label="Text Area Molecule"
              help-text="Enhanced textarea with validation support"
              :errors="[]"
            />
            <div class="value-display">Value: "{{ formData.textArea }}"</div>
          </div>

          <!-- Selection Components -->
          <div class="component-demo">
            <h3>Selection Molecules</h3>
            <BlSelect
              id="demo-select"
              v-model="formData.selectValue"
              label="Select Option Molecule"
              help-text="Enhanced select with validation"
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
            <div class="value-display">Value: "{{ formData.selectValue }}"</div>

            <BlCheckbox
              id="demo-checkbox"
              v-model="formData.checkboxValue"
              label="Checkbox Molecule"
              help-text="Enhanced checkbox with validation support"
              :errors="[]"
            />
            <div class="value-display">Value: {{ formData.checkboxValue }}</div>

            <BlRadio
              id="demo-radio"
              v-model="formData.radioValue"
              name="demo-radio-group"
              value="radio-option"
              label="Radio Option 1"
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

                        
            <div class="value-display">Value: "{{ formData.radioValue }}"</div>
          </div>

          <!-- Interactive Components -->
          <div class="component-demo">
            <h3>Interactive Molecules</h3>
            <BlColorPicker
              id="demo-color"
              v-model="formData.colorValue"
              label="Color Picker Molecule"
              help-text="Enhanced color picker with validation"
              :errors="[]"
            />
            <div class="value-display">Value: "{{ formData.colorValue }}"</div>

            <BlRichText
              id="demo-richtext"
              v-model="formData.richTextValue"
              label="Rich Text Editor"
              help-text="Enhanced rich text editor"
              :errors="[]"
            />
            <div class="value-display">Value: {{ formData.richTextValue }}</div>
          </div>
        </BlGrid>
      </section>

      <!-- Organisms Section -->
      <section class="component-section">
        <h2>🔸 Organisms - Complex Components</h2>
        
        <div class="component-demo">
          <h3>Form Organism</h3>
          <BlForm
            title="Sample Form Organism"
            description="This is a complete form component with validation"
            :loading="formLoading"
            @submit="handleFormSubmit"
          >
            <BlInput
              v-model="organismData.name"
              label="Full Name"
              required
            />
            <BlInput
              v-model="organismData.email"
              label="Email"
              type="email"
              required
            />
            <BlCheckbox
              v-model="organismData.newsletter"
              label="Subscribe to newsletter"
            />
          </BlForm>
          <div class="value-display">Value: {{ JSON.stringify(organismData, null, 2) }}</div>
        </div>
      </section>

      <!-- Templates Section -->
      <section class="component-section">
        <h2>🔸 Templates - Page-level Layouts</h2>
        
        <div class="component-demo">
          <h3>Form Template</h3>
          <BlFormTemplate
            title="Contact Form Template"
            :validation-rules="validationRules"
            @submit="handleTemplateSubmit"
          >
            <BlInput
              v-model="templateData.subject"
              label="Subject"
              required
            />
            <BlTextArea
              v-model="templateData.message"
              label="Message"
              :rows="4"
              required
            />
          </BlFormTemplate>
          <div class="value-display">Value: {{ JSON.stringify(templateData, null, 2) }}</div>
        </div>
      </section>

      <!-- Button Components Section -->
      <section class="component-section">
        <h2>Button Components</h2>
        <div class="button-grid">
          <BlButtonAtom
            type="button"
            @click="handlePrimaryClick"
          >
            Primary Atom Button
          </BlButtonAtom>

          <BlButtonAtom
            type="button"
            @click="handleSecondaryClick"
          >
            Secondary Atom Button
          </BlButtonAtom>

          <BlButtonAtom
            type="submit"
            @click="handleSubmit"
          >
            Submit Atom Button
          </BlButtonAtom>
        </div>
        <div class="value-display">Value: {{ buttonClickCount }}</div>
      </section>

      <!-- Error Display Section -->
      <section class="component-section">
        <h2>Error Display</h2>
        <BlErrorAtom :errors="sampleErrors" />
      </section>

      <!-- Form Data Preview -->
      <section class="component-section">
        <h2>Form Data Preview</h2>
        <div class="data-grid">
          <div class="data-section">
            <h3>Atom Data</h3>
            <pre class="data-preview">{{ JSON.stringify(atomData, null, 2) }}</pre>
          </div>
          <div class="data-section">
            <h3>Molecule Data</h3>
            <pre class="data-preview">{{ JSON.stringify(formData, null, 2) }}</pre>
          </div>
        </div>
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
  // Atom Components
  BlButtonAtom,
  BlCheckboxAtom,
  BlErrorAtom,
  BlInputAtom,
  BlLabelAtom,
  BlLinkAtom,
  BlOptionAtom,
  BlSelectAtom,
  BlTextAreaAtom,
  
  // Molecule Components
  BlCheckbox,
  BlColorPicker,
  BlFormField,
  BlGrid,
  BlInput,
  BlRadio,
  BlRichText,
  BlSelect,
  BlTextArea,
  
  // Organism Components
  BlForm,
  
  // Template Components
  BlFormTemplate,
} from './components';
import type { BlFormError } from './types/global';

// Atom data for showcasing basic components
const atomData = reactive({
  input: 'Sample atom input text',
  textarea: 'Sample atom textarea content\nMultiple lines supported',
  checkbox: true,
  select: 'atom1',
  buttonClicks: 0,
  linkClicks: 0,
});

// Molecule form data
const formData = reactive({
  textInput: 'Hello World Enhanced',
  textArea: 'This is enhanced text area content.\nIt supports multiple lines and validation.',
  selectValue: 'option1',
  checkboxValue: true,
  radioValue: 'radio-option',
  colorValue: '#3498db',
  richTextValue: '<p>This is <strong>rich text</strong> content with <em>formatting</em>.</p>',
});

// Organism data
const organismData = reactive({
  name: 'John Doe',
  email: 'john@example.com',
  newsletter: false,
});

// Template data
const templateData = reactive({
  subject: 'Contact Inquiry',
  message: 'Hello, I would like to know more about your services.',
});

// Form states
const formLoading = ref(false);
const buttonClickCount = ref(0);

// Validation rules for template
const validationRules: Record<string, (value: any) => string | null> = {
  subject: (value: string) => {
    if (!value || value.length < 3) return 'Subject must be at least 3 characters';
    return null;
  },
  message: (value: string) => {
    if (!value || value.length < 10) return 'Message must be at least 10 characters';
    return null;
  },
};

// Error examples
const inputErrors = ref<BlFormError[]>([{ message: 'This is a sample validation error' }]);
const sampleErrors = ref<BlFormError[]>([
  { message: 'This is a general error message' }, 
  { message: 'Another error example for demonstration' }
]);

// Action message for button clicks
const actionMessage = ref<string>('');

// Event handlers
const handleAtomClick = () => {
  atomData.buttonClicks++;
  actionMessage.value = `Atom button clicked! Total clicks: ${atomData.buttonClicks}`;
  setTimeout(() => actionMessage.value = '', 3000);
};

const handleLinkClick = () => {
  atomData.linkClicks++;
  actionMessage.value = `Atom link clicked! Total clicks: ${atomData.linkClicks}`;
  setTimeout(() => actionMessage.value = '', 3000);
};

const handlePrimaryClick = () => {
  buttonClickCount.value++;
  actionMessage.value = 'Primary atom button was clicked!';
  setTimeout(() => actionMessage.value = '', 3000);
};

const handleSecondaryClick = () => {
  buttonClickCount.value++;
  actionMessage.value = 'Secondary atom button was clicked!';
  setTimeout(() => actionMessage.value = '', 3000);
};

const handleSubmit = () => {
  buttonClickCount.value++;
  actionMessage.value = 'Submit atom button was clicked!';
  setTimeout(() => actionMessage.value = '', 3000);
};

const handleFormSubmit = () => {
  formLoading.value = true;
  actionMessage.value = 'Form organism submitted!';
  
  // Simulate form processing
  setTimeout(() => {
    formLoading.value = false;
    actionMessage.value = 'Form organism submission completed!';
    setTimeout(() => actionMessage.value = '', 3000);
  }, 2000);
};

const handleTemplateSubmit = (data: any) => {
  actionMessage.value = `Template form submitted with data: ${JSON.stringify(data)}`;
  setTimeout(() => actionMessage.value = '', 5000);
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

/* Atomic Design Specific Styles */
.atom-showcase {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.atom-item {
  padding: 15px;
  border: 2px dashed #dee2e6;
  border-radius: 6px;
  background: #fafbfc;
}

.value-display {
  margin-top: 8px;
  padding: 8px 12px;
  background: #e9ecef;
  border-radius: 4px;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.85rem;
  color: #495057;
  border-left: 3px solid #007bff;
}

.data-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.data-section h3 {
  margin: 0 0 10px 0;
  color: #6c757d;
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
  max-height: 300px;
  overflow-y: auto;
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

/* Atom item spacing */
.atom-item > * + * {
  margin-top: 10px;
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

  .atom-showcase {
    grid-template-columns: 1fr;
  }

  .data-grid {
    grid-template-columns: 1fr;
  }
}
</style>
