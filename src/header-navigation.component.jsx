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
    const { dropdown, id } = this.props;
    if (!dropdown.menuItems.length) return null;

    return (
      <DropdownMenu
        id={`${id}-menu`}
        {...dropdown}
      />
    );
  };

  renderLeftContent = () => {
    const { onBackClick, title, id } = this.props;

    return (
      <React.Fragment>
        {typeof onBackClick === 'function' &&
        <BackButton id={`${id}-back-button`} onClick={onBackClick}>
          <Icon type="indicator" name="arrowLeft" />
        </BackButton>}
        {title && <Primitive.Title id={`${id}-title`}>{title}</Primitive.Title>}
      </React.Fragment>
    );
  };

  renderCenterContent = () => {
    const { paging, id } = this.props;

    // If there's an array of 1 or more items, OR ImmutableJs List with 1 or more items
    if (!paging.itemIds.length && !paging.itemIds.size) return null;
    return <ListItems id={`${id}-pagination`} {...paging} />
  };

  render() {
    const { className, id } = this.props;
    return (
      <Header.Basic
        className={`${classPrefix}_navigation-header ${className}`}
        id={id}
        left={this.renderLeftContent()}
        center={this.renderCenterContent()}
        right={this.getRightContent()}
      />
    );
  }
}

HeaderNavigation.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
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
  className: null,
  onBackClick: null,
  dropdown: {
    menuItems: [],
  },
  paging: {
    itemIds: [],
  },
};

export default HeaderNavigation;
