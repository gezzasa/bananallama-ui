import { mount } from '@vue/test-utils';
import BlLabel from './BlLabel.vue';
import { describe, it, expect } from 'vitest';

const testData = {
  value: 'Test',
  for: 'forElement',
};

const createWrapper = () => {
  return mount(BlLabel, {
    props: {
      modelValue: testData.value,
      isFor: testData.for,
    },
  });
};

describe('label unit tests', () => {
  it('label exists and has a class', () => {
    const wrapper = createWrapper();
    const label = wrapper.find("[data-test='pb-input__label']");

    expect(label.exists()).toBe(true);
    expect(label.element.getAttribute('class')).toContain('pb-input__label');
    expect(label.element.getAttribute('for')).toContain('forElement');
  });
});
