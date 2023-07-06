import BlColorPicker from '../components/forms/molecules/BlColorPicker.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Forms/BlColorPicker',
  component: BlColorPicker,
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Vanilla = {
  args: {
    id: 'color-picker-id',
    label: 'Color picker label',
    modelValue: '#cecece',
  },
};
