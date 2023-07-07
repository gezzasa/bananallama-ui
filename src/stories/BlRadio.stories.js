import BlRadio from '../components/forms/molecules/BlRadio.vue';
import BlGrid from '../components/ui/BlGrid.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Forms/BlRadio',
  component: BlRadio,
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Vanilla = {
  render: () => ({
    components: { BlRadio, BlGrid },
    template:
      '<BlGrid>'+
        '<BlRadio id="radio-1" v-model="radioValue" label="Radio 1 label" name="radio" value="radio-1" />'+
        '<BlRadio id="radio-2" v-model="radioValue" label="Radio 2 label" name="radio" value="radio-2" />'+
      '</BlGrid>',
  }),
};
