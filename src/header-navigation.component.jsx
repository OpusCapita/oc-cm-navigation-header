import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ListItems from '@opuscapita/react-list-items';
import { DropdownMenu } from '@opuscapita/react-dropdown';
import { Icon } from '@opuscapita/react-icons';
import { Header, Primitive } from '@opuscapita/oc-cm-common-layouts';

const classPrefix = 'oc-common-layouts';

const BackButton = styled(Primitive.BorderlessButton)`
  height: ${(props) => props.theme.header.button.height};
  width: ${(props) => props.theme.header.button.height};
  margin-right: ${(props) => props.theme.gutterWidth};
  svg {
    height: ${(props) => props.theme.header.button.height};
    width: ${(props) => props.theme.header.button.height};
  }
`;

class HeaderNavigation extends React.PureComponent {
  getRightContent = () => {
    const { dropdown, id, rightContent } = this.props;

    return (
      <>
        {rightContent}
        {dropdown.menuItems.length
          ? (
            <DropdownMenu
              id={`${id}-menu`}
              {...dropdown}
            />
          ) : null}
      </>
    );
  };

  renderLeftContent = () => {
    const { onBackClick, title, id } = this.props;

    return (
      <>
        {typeof onBackClick === 'function'
        && (
          <BackButton id={`${id}-back-button`} onClick={onBackClick}>
            <Icon type="indicator" name="arrowLeft" />
          </BackButton>
        )}
        {title
        && (
          <Primitive.Title id={`${id}-title`}>
            {title}
          </Primitive.Title>
        )}
      </>
    );
  };

  renderCenterContent = () => {
    const { paging, id } = this.props;

    // If there's an array of 1 or more items, OR ImmutableJs List with 1 or more items
    if (!paging.itemIds.length && !paging.itemIds.size) return null;
    return <ListItems id={`${id}-pagination`} {...paging} />;
  };

  render() {
    const { className, id, sideSectionBasis } = this.props;
    return (
      <Header.Basic
        className={`${classPrefix}_navigation-header ${className}`}
        id={id}
        left={this.renderLeftContent()}
        center={this.renderCenterContent()}
        right={this.getRightContent()}
        sideSectionBasis={sideSectionBasis}
      />
    );
  }
}

HeaderNavigation.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  onBackClick: PropTypes.func,
  rightContent: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  sideSectionBasis: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
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
  rightContent: null,
  sideSectionBasis: '200px',
};

export default HeaderNavigation;
