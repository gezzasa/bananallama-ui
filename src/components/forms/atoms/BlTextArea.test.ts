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
    const input = wrapper.find("[data-test='bl-textarea']");

    expect(input.exists()).toBe(true);
    expect((input.element as HTMLTextAreaElement).value).toBe(testData.value);
  });

  it('textarea triggers emit on input', async () => {
    const wrapper = createWrapper();
    const input = wrapper.find("[data-test='bl-textarea']");

    await input.setValue('Testing');
    await wrapper.vm.$nextTick();

    const emitted = wrapper.emitted()['update:modelValue'] as string[][];
    expect(emitted[0][0]).toBe('Testing');
  });
});
