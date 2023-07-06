import BlCheckbox from '../components/forms/molecules/BlCheckbox.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Forms/BlCheckbox',
  component: BlCheckbox,
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Vanilla = {
  args: {
    id: 'checkbox-id',
    label: 'Checkbox label',
    modelValue: 'checkbox-content',
  },
};
