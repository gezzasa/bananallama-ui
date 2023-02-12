import { mount } from '@vue/test-utils';
import BlButton from './BlButton.vue';
import { describe, it, expect } from 'vitest';

const testData = {
  label: 'Submit',
};

const createWrapper = () => {
  return mount(BlButton, {
    props: {
      label: testData.label,
    },
  });
};

describe('button unit tests', () => {
  it('displays a label', () => {
    const wrapper = createWrapper();
    const button = wrapper.find("[data-test='pb-button']");

    expect(button.exists()).toBe(true);
    expect(button.text()).toContain(testData.label);
  });
});
