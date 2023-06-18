import { mount } from '@vue/test-utils';
import BlSelect from './BlSelect.vue';
import { describe, it, expect } from 'vitest';

const testData = {
  id: 'test-id',
  value: '10px',
};

const createWrapper = () => {
  return mount(BlSelect, {
    props: {
      id: testData.id,
      modelValue: testData.value,
    },
    slots: {
      default: `
        <option value="test">test</option>
        <option value="test2">test2</option>
      `,
    },
  });
};

describe('select unit tests', () => {
  it('select exists and has class and id', () => {
    const wrapper = createWrapper();
    const select = wrapper.find("[data-test='bl-select']");

    expect(select.exists()).toBe(true);
    expect(wrapper.vm.modelValue).toBe('10px');
    expect(select.element.getAttribute('class')).toContain('bl-select');
    expect(select.element.getAttribute('id')).toContain('test-id');
  });

  it('select has slot which changes value', async () => {
    const wrapper = createWrapper();
    const select = wrapper.find("[data-test='bl-select']");
    const options = wrapper.findAll('option');

    await options.at(0)?.setSelected();
    expect(select.element.value).toBe('test');
    await options.at(1)?.setSelected();
    expect(select.element.value).toBe('test2');
  });
});
