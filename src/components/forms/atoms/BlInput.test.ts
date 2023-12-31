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
    const input = wrapper.find("[data-test='bl-input']");

    expect(input.exists()).toBe(true);
    expect(input.element.value).toBe(testData.value);
  });

  it('input triggers emit on input', async () => {
    const wrapper = createWrapper();
    const input = wrapper.find("[data-test='bl-input']");

    await input.setValue('Testing');
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted()['update:modelValue'][0][0]).toBe('Testing');
  });
});
