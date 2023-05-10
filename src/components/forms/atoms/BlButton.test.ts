import { mount } from '@vue/test-utils';
import BlButton from './BlButton.vue';
import { describe, it, expect } from 'vitest';

const testData = {
  label: 'Submit',
  type: 'submit',
};

const createWrapper = () => {
  return mount(BlButton, {
    props: {
      label: testData.label,
      type: testData.type,
    },
    attrs: {
      style: {display: 'none'},
    },
  });
};

describe('button unit tests', () => {
  it('displays a label, class, type and style', () => {
    const wrapper = createWrapper();
    const button = wrapper.find("[data-test='pb-button']");

    expect(button.exists()).toBe(true);
    expect(button.text()).toContain(testData.label);
    expect(button.element.getAttribute('class')).toContain('pb-button');
    expect(button.element.getAttribute('type')).toContain('submit');
    expect(button.element.getAttribute('style')).toContain('display: none;');
  });
});
