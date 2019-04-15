import React from 'react';
import { storiesOf } from '@storybook/react';
import { object, text } from '@storybook/addon-knobs';
import { theme } from '@opuscapita/oc-cm-common-layouts';
import { ThemeProvider } from 'styled-components';
import { Store, StateDecorator } from '@sambego/storybook-state';

// Application
import './scss/app.component.scss';
import NavigationHeader from '../src/header-navigation.component';

const pagingItemIds = ['item-1', 'item-2', 'item-3', 'item-4'];
const store = new Store({ itemId: pagingItemIds[0] });

/* eslint-disable no-alert */
const onBackClick = () => {
  alert('Clicked back');
};

const dropdownMenuItems = [{
  title: '#1',
  id: 'dropdown-item-1',
  disabled: true,
}, {
  title: '#2',
  id: 'dropdown-item-2',
  disabled: false,
}];

storiesOf('@opuscapita/oc-cm-navigation-header', module)
  .addDecorator(StateDecorator(store))
  .add('Navigation header', () => (state) => {
    const knobs = {
      title: text('Title', 'Demo title'),
      rightContent: text('Right side content', 'This can be node/string'),
      sideSectionBasis: text('Side section basis', '200px'),
    };

    const onPaginationArrowClick = (id) => {
      store.set({ itemId: id });
    };

    const dropdownKnobs = {
      menuItems: object('Menu items', dropdownMenuItems),
    };

    const getPaginationKnobs = () => ({
      itemIds: object('Paging item IDs', pagingItemIds),
      goToItem: onPaginationArrowClick,
      itemId: state.itemId,
    });

    return (
      <ThemeProvider theme={theme}>
        <NavigationHeader
          id="demo-header"
          {...knobs}
          dropdown={dropdownKnobs}
          paging={getPaginationKnobs()}
          onBackClick={onBackClick}
        />
      </ThemeProvider>
    );
  });

