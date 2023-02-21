import { mount } from '@vue/test-utils';
import BlInput from './BlInput.vue';
import { describe, it, expect } from 'vitest';

const testData = {
  value: 'Test',
};

const createWrapper = () => {
  return mount(BlInput, {
    props: {
      modelValue: testData.value,
    },
  });
};

describe('input unit tests', () => {
  it('input exists and has a value', () => {
    const wrapper = createWrapper();
    const input = wrapper.find("[data-test='pb-input']");

    expect(input.exists()).toBe(true);
    expect(input.element.value).toBe(testData.value);
  });
});
