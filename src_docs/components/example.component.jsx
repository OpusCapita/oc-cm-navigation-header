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
    alert('Back clicked'); // eslint-disable-line no-alert
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

  getPaging = () => {
    const { currentId } = this.state;
    return {
      goToItem: this.onPageChange,
      itemIds: this.getItemIds(),
      itemId: currentId,
    };
  }

  render() {
    return (
      <div style={{ padding: '20px' }}>
        <Header
          id="example"
          className="example-cls"
          title="This is the title"
          dropdown={this.getDropdownMenu()}
          onBackClick={this.onBackClick}
          paging={this.getPaging()}
        />
      </div>
    );
  }
}
