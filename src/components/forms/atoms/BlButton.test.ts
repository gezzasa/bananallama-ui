import { mount } from '@vue/test-utils';
import BlButton from './BlButton.vue';
import { describe, it, expect } from 'vitest';

const createWrapper = () => {
  return mount(BlButton, {
    props: {
      label: 'Submit',
      type: 'submit',
    },
    attrs: {
      style: {display: 'none'},
    },
  });
};

describe('button unit tests', () => {
  it('displays a label, class, type and style', () => {
    const wrapper = createWrapper();
    const button = wrapper.find("[data-test='bl-button']");

    expect(button.exists()).toBe(true);
    expect(button.text()).toContain('Submit');
    expect(button.element.getAttribute('class')).toContain('bl-button');
    expect(button.element.getAttribute('type')).toContain('submit');
    expect(button.element.getAttribute('style')).toContain('display: none;');
  });
});
