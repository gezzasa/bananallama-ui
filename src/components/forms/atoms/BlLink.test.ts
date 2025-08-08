import { mount } from '@vue/test-utils';
import BlLink from './BlLink.vue';
import { describe, it, expect } from 'vitest';

import type { LinkTarget } from '@/types/global';

type PropTypes = {
  href: string
  text: string
  target: LinkTarget
}

const props: PropTypes = {
  href: 'https://www.google.com',
  target: '_blank',
  text: 'Test copy',
};

const createWrapper = () => {
  return mount(BlLink, {
    props,
    attrs: {
      style: {display: 'none'},
    },
  });
};

describe('link unit tests', () => {
  it('displays a label, class, type and style', () => {
    const wrapper = createWrapper();
    const link = wrapper.find("[data-test='bl-link']");

    expect(link.exists()).toBe(true);
    expect(link.text()).toContain('Test copy');
    expect(link.element.getAttribute('class')).toContain('bl-link');
    expect(link.element.getAttribute('href')).toContain('https://www.google.com');
    expect(link.element.getAttribute('style')).toContain('display: none;');
  });
});
