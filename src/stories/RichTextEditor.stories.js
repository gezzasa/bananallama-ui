import RichTextEditor from '../components/forms/rich-text/RichTextEditor.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Forms/RichTextEditor',
  component: RichTextEditor,
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Vanilla = {
  args: {
    label: 'Rich text label',
    modelValue: 'Rich text content',
    suggestions: ['test', 'longer test'],
    suggestionCharacter: '{',
  },
};