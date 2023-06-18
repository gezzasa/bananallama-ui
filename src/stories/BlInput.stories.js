import BlInput from '../components/forms/molecules/BlInput.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Forms/BlInput',
  component: BlInput,
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Vanilla = {
  args: {
    id: '1234',
    label: 'Input label',
    modelValue: 'Input content',
    errors: [
      {
        message: 'Not enough characters',
      },
    ],
  },
};
