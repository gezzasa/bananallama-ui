import BlCheckbox from '../components/forms/molecules/BlCheckbox.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Forms/BlCheckbox',
  component: BlCheckbox,
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Vanilla = {
  render: () => ({
    components: { BlCheckbox },
    template:
      '<div>'+
        '<BlCheckbox id="checkbox-1" v-model="checkboxValue" label="Checkbox 1 label" name="checkbox" value="checkbox-1" />'+
        '<BlCheckbox id="checkbox-2" v-model="checkboxValue" label="Checkbox 2 label" name="checkbox" value="checkbox-2" />'+
      '</div>',
  }),
};
