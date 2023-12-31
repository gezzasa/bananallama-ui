# BananaLlama Ui

```javascript
npm i bananallama-ui
```

## Description
A simple and accessible Vue 3 UI Library with customizable styles

## Features
The following elements are available to use
- Rich text element (Powered by [TipTap](https://tiptap.dev/))
- Text/Number input
- Radio buttons
- Checkboxes
- Select
- Textarea
- Color picker

## Storybook
The Components can be viewed [here](https://bananallama-ui.vercel.app)

## Usage

### Styles
The default styles can be used by importing the following

### Elements

```javascript
import 'bananallama-ui/src/styles/index.scss';
```

Import the element you would like to use

```javascript
import { BlInput } from 'bananallama-ui';
```

Add it to your `<template>` and pass in the `id`, `value`, `label` and the errors. See the errors object below.
```HTML
<BlInput
  id="example-id"
  v-model="value"
  label="Example label"
  :errors="errors"
/>
```
The `errors` prop takes an array as an argument. Each entry is an error message that has been created while the user fired the `@input` event. If the object is empty, no errors will display.
```javascript
const errors: [
  {
    message: "Too many characters"
  },
  {
    message: "Some error from the BE perhaps"
  }
]
```
