import { mount } from '@vue/test-utils';
import BlOption from './BlOption.vue';
import { describe, it, expect } from 'vitest';

const testData = {
  option: '10px',
};

const createWrapper = () => {
  return mount(BlOption, {
    props: {
      option: testData.option,
    },
  });
};

describe('option unit tests', () => {
  it('option exists and has class, value and text', () => {
    const wrapper = createWrapper();
    const option = wrapper.find("[data-test='bl-option']");

    expect(option.exists()).toBe(true);
    expect(option.text()).toBe('10px');
    expect(option.element.getAttribute('value')).toBe('10px');
    expect(option.element.getAttribute('class')).toContain('bl-option');
  });
});
