import React from 'react';
import Header from '../../src/header-navigation.component';

export default class ComponentView extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentId: 1,
    };
  }

  onBackClick = () => {
    alert('Back clicked');
  };

  onPageChange = (newId) => {
    this.setState({ currentId: newId });
  };

  getItemIds = () => [1, 2, 3, 4, 5, 6];

  getDropdownMenu = () => ({
    menuItems: [
      { id: 1, title: 'Item 1' },
      { id: 2, title: 'Item 2' },
      { id: 3, title: 'Item 3' }],
  });

  getPaging = () => ({
    goToItem: this.onPageChange,
    itemIds: this.getItemIds(),
    itemId: this.state.currentId,
  });

  render() {
    return (
      <div style={{ padding: '20px' }}>
        <Header
          title="This is the title"
          dropdown={this.getDropdownMenu()}
          onBackClick={this.onBackClick}
          paging={this.getPaging()}
        />
      </div>
    );
  }
}
