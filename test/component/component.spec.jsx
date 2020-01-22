/* eslint-disable no-unused-expressions, prefer-arrow-callback, func-names */
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { theme } from '@opuscapita/oc-cm-common-layouts';

import Example from '../../src/index';

describe('Example component', function () {
  const mountWithTheme = (comp) => mount(<ThemeProvider theme={theme}>{comp}</ThemeProvider>);

  it('is rendered', function () {
    const wrapper = mountWithTheme(<Example />);
    expect(wrapper).to.exist;
  });
});
