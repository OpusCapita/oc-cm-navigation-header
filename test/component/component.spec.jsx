/* eslint-disable no-unused-expressions */
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { theme } from '@opuscapita/oc-cm-common-layouts';

import Example from '../../src/index';

describe('Example component', () => {
  const mountWithTheme = comp => mount(<ThemeProvider theme={theme}>{comp}</ThemeProvider>);

  it('is rendered', () => {
    const wrapper = mountWithTheme(<Example />);
    expect(wrapper).to.exist;
  });
});
