# Form Components Architecture

This project follows **Atomic Design methodology** for building form components, creating a systematic approach to building user interfaces.

## Structure Overview

```
src/components/forms/
├── atoms/          # Basic building blocks
├── molecules/      # Combinations of atoms
├── organisms/      # Complex UI components
├── templates/      # Page-level layouts
└── composables/    # Shared logic
```

## Atomic Design Levels

### 🔸 Atoms (`./atoms/`)
**Basic building blocks** - the smallest functional units that can't be broken down further without losing their meaning.

- `BlInput.vue` - Basic input field
- `BlTextArea.vue` - Basic textarea
- `BlCheckbox.vue` - Basic checkbox
- `BlSelect.vue` - Basic select dropdown
- `BlButton.vue` - Basic button
- `BlLabel.vue` - Form label
- `BlError.vue` - Error message display
- `BlOption.vue` - Select option
- `BlLink.vue` - Basic link

**Characteristics:**
- Single responsibility
- No dependencies on other components
- Accept only essential props
- Emit only basic events
- Include data-test attributes for testing

### 🔸 Molecules (`./molecules/`)
**Combinations of atoms** that form more complex UI components with enhanced functionality.

- `BlFormField.vue` - Base wrapper providing labels, errors, help text
- `BlInput.vue` - Input atom + label + error handling
- `BlTextArea.vue` - TextArea atom + label + error handling
- `BlCheckbox.vue` - Checkbox atom + label + error handling
- `BlSelect.vue` - Select atom + label + error handling
- `BlRadio.vue` - Radio input + label + error handling
- `BlColorPicker.vue` - Color input + enhanced functionality

**Characteristics:**
- Combine multiple atoms
- Add label and error handling
- Provide consistent API across form fields
- Handle v-model binding
- Include help text and validation states

### 🔸 Organisms (`./organisms/`)
**Complex components** made of molecules and atoms that form distinct sections of an interface.

- `BlForm.vue` - Complete form wrapper with header, body, footer, validation

**Characteristics:**
- Combine multiple molecules
- Handle complex interactions
- Manage form-level state
- Provide submission and validation logic
- Include loading and disabled states

### 🔸 Templates (`./templates/`)
**Page-level layouts** that place components into a layout and provide the page structure.

- `BlFormTemplate.vue` - Standard form layout with validation patterns

**Characteristics:**
- Define page-level structure
- Handle form data management
- Coordinate between multiple organisms
- Provide validation orchestration

## Composables (`./composables/`)

Shared logic and utilities used across components:

- `useFormInput.ts` - Standard v-model binding pattern and base interfaces

## Usage Patterns

### Basic Form Field (Molecule Level)
```vue
<BlInput
  id="username"
  v-model="form.username"
  label="Username"
  placeholder="Enter your username"
  :errors="errors.username"
  help-text="Must be 3-20 characters"
  required
/>
```

### Complex Form (Organism Level)
```vue
<BlForm
  title="User Registration"
  description="Create your account"
  :loading="submitting"
  @submit="handleSubmit"
>
  <BlInput v-model="form.email" label="Email" type="email" required />
  <BlInput v-model="form.password" label="Password" type="password" required />
  <BlCheckbox v-model="form.terms" label="I agree to the terms" required />
</BlForm>
```

### Full Form Template (Template Level)
```vue
<BlFormTemplate
  title="Contact Form"
  :validation-rules="validationRules"
  @submit="submitForm"
>
  <BlInput v-model="contact.name" label="Name" required />
  <BlInput v-model="contact.email" label="Email" type="email" required />
  <BlTextArea v-model="contact.message" label="Message" rows="6" required />
</BlFormTemplate>
```

## Benefits of This Architecture

1. **Consistency** - All form fields follow the same patterns
2. **Reusability** - Components can be used at different complexity levels
3. **Maintainability** - Clear separation of concerns
4. **Testability** - Each level can be tested independently
5. **Scalability** - Easy to add new components following existing patterns
6. **Developer Experience** - Predictable APIs and behavior

## Testing Strategy

- **Atoms**: Test core functionality and props
- **Molecules**: Test integration between atoms and enhanced features
- **Organisms**: Test complex interactions and state management
- **Templates**: Test full user workflows and validation

## Contributing

When adding new form components:

1. **Identify the appropriate level** (atom, molecule, organism, template)
2. **Follow existing patterns** for props, events, and structure
3. **Include proper TypeScript interfaces**
4. **Add comprehensive tests**
5. **Update this documentation**

For more information about Atomic Design, visit: https://atomicdesign.bradfrost.com/
