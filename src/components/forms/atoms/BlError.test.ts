import { mount } from '@vue/test-utils';
import BlError from './BlError.vue';
import { describe, it, expect } from 'vitest';

const createWrapper = () => {
  return mount(BlError, {
    props: {
      errors: [
        {
          message: 'Error message',
        },
      ],
    },
  });
};

describe('error unit tests', () => {
  it('displays a class and a style', async () => {
    const wrapper = createWrapper();
    const error = wrapper.find("[data-test='bl-error']");

    expect(error.exists()).toBe(true);
    expect(error.element.getAttribute('class')).toContain('bl-error');
  });

  it('displays an error', async () => {
    const wrapper = createWrapper();
    const error = wrapper.find("[data-test='bl-error']");
    expect(error.text()).toContain('Error message');
  });
});
