import React from 'react';
import PropTypes from 'prop-types';
import { ListItems } from '@opuscapita/react-list-items';
import { DropdownMenu } from '@opuscapita/react-dropdown';
import { Icon } from '@opuscapita/react-icons';
import { Header, Primitive, theme } from '@opuscapita/oc-cm-common-layouts';
// App imports

const classPrefix = 'oc-common-layouts';

const BackButton = Primitive.BorderlessButton.extend`
  height: ${theme.header.button.height};
  width: ${theme.header.button.height};
  font-size: 16px;
`;

class HeaderNavigation extends React.PureComponent {
  getRightContent = () => {
    const { dropdown } = this.props;
    if (!dropdown.menuItems.length) return null;

    return (
      <DropdownMenu
        id={`${classPrefix}_navigation-header-menu`}
        {...dropdown}
      />
    );
  };

  renderLeftContent = () => {
    const { onBackClick, title } = this.props;
    return (
      <React.Fragment>
        {typeof onBackClick === 'function' &&
        <BackButton onClick={onBackClick}><Icon type="indicator" name="arrowLeft" /></BackButton>}
        {title && <Primitive.Title>{title}</Primitive.Title>}
      </React.Fragment>
    );
  };

  renderCenterContent = () => {
    const { paging } = this.props;
    if (!paging.itemIds.length || !paging.itemIds.size) return null;

    return (
      <ListItems
        id={`${classPrefix}_navigation-header-items`}
        {...paging}
      />
    );
  };

  render() {
    return (
      <Header.Basic
        className={`${classPrefix}_navigation-header`}
        left={this.renderLeftContent()}
        center={this.renderCenterContent()}
        right={this.getRightContent()}
      />
    );
  }
}

HeaderNavigation.propTypes = {
  title: PropTypes.string,
  onBackClick: PropTypes.func,
  paging: PropTypes.shape({
    itemIds: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ])),
      PropTypes.shape({}),
    ]),
  }),
  dropdown: PropTypes.shape({
    menuItems: PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.shape({}),
    ])),
  }),
};

HeaderNavigation.defaultProps = {
  title: null,
  onBackClick: null,
  dropdown: {
    menuItems: [],
  },
  paging: {
    itemIds: [],
  },
};

export default HeaderNavigation;
