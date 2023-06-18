import { mount } from '@vue/test-utils';
import BlCheckbox from './BlCheckbox.vue';
import { describe, it, expect } from 'vitest';

const testData = {
  modelValue: false,
};

const createWrapper = () => {
  return mount(BlCheckbox, {
    props: {
      modelValue: testData.modelValue,
    },
    attrs: {
      style: {display: 'none'},
    },
  });
};

describe('checkbox unit tests', () => {
  it('displays a class and a style', async () => {
    const wrapper = createWrapper();
    const checkbox = wrapper.find("[data-test='bl-checkbox']");

    expect(checkbox.exists()).toBe(true);
    expect(checkbox.element.getAttribute('class')).toContain('bl-checkbox');
    expect(checkbox.element.getAttribute('style')).toContain('display: none;');
  });

  it('displays a label', async () => {
    const wrapper = createWrapper();
    const checkbox = wrapper.find("[data-test='bl-checkbox']");

    expect(checkbox.element.checked).toBe(testData.modelValue);
    await checkbox.setChecked();
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted()['update:modelValue'][0][0]).toBe(true);
    expect(checkbox.element.checked).toBe(!testData.modelValue);
  });
});
