import { mount } from '@vue/test-utils';
import BlTextArea from './BlTextArea.vue';
import { describe, it, expect } from 'vitest';

const testData = {
  value: 'Test',
};

const createWrapper = () => {
  return mount(BlTextArea, {
    props: {
      modelValue: testData.value,
    },
  });
};

describe('text-area unit tests', () => {
  it('text-area exists and has a value', () => {
    const wrapper = createWrapper();
    const input = wrapper.find("[data-test='pb-text-area']");

    expect(input.exists()).toBe(true);
    expect(input.element.value).toBe(testData.value);
  });

  it('textarea triggers emit on input', async () => {
    const wrapper = createWrapper();
    const input = wrapper.find("[data-test='pb-text-area']");

    await input.setValue('Testing');
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted()['update:modelValue'][0][0]).toBe('Testing');
  });
});
