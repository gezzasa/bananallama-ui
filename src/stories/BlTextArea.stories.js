import BlTextArea from '../components/forms/molecules/BlTextArea.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Forms/BlTextArea',
  component: BlTextArea,
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Vanilla = {
  args: {
    id: 'textarea-id',
    label: 'Textarea label',
    modelValue: 'Textarea content',
    errors: [
      {
        message: 'Not enough characters',
      },
    ],
  },
};
