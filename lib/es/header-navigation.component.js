var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  height: ', ';\n  width: ', ';\n  font-size: 16px;\n'], ['\n  height: ', ';\n  width: ', ';\n  font-size: 16px;\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import PropTypes from 'prop-types';
import { ListItems } from '@opuscapita/react-list-items';
import { DropdownMenu } from '@opuscapita/react-dropdown';
import { Icon } from '@opuscapita/react-icons';
import { Header, Primitive, theme } from '@opuscapita/oc-cm-common-layouts';
// App imports

var classPrefix = 'oc-common-layouts';

var BackButton = Primitive.BorderlessButton.extend(_templateObject, theme.header.button.height, theme.header.button.height);

var HeaderNavigation = function (_React$PureComponent) {
  _inherits(HeaderNavigation, _React$PureComponent);

  function HeaderNavigation() {
    var _temp, _this, _ret;

    _classCallCheck(this, HeaderNavigation);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args))), _this), _this.getRightContent = function () {
      var dropdown = _this.props.dropdown;

      if (!dropdown.menuItems.length) return null;

      return React.createElement(DropdownMenu, _extends({
        id: classPrefix + '_navigation-header-menu'
      }, dropdown));
    }, _this.renderLeftContent = function () {
      var _this$props = _this.props,
          onBackClick = _this$props.onBackClick,
          title = _this$props.title;

      return React.createElement(
        React.Fragment,
        null,
        typeof onBackClick === 'function' && React.createElement(
          BackButton,
          { onClick: onBackClick },
          React.createElement(Icon, { type: 'indicator', name: 'arrowLeft' })
        ),
        title && React.createElement(
          Primitive.Title,
          null,
          title
        )
      );
    }, _this.renderCenterContent = function () {
      var paging = _this.props.paging;

      if (!paging.itemIds.length && !paging.itemIds.size) return null;

      return React.createElement(ListItems, _extends({
        id: classPrefix + '_navigation-header-items'
      }, paging));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  HeaderNavigation.prototype.render = function render() {
    return React.createElement(Header.Basic, {
      className: classPrefix + '_navigation-header',
      left: this.renderLeftContent(),
      center: this.renderCenterContent(),
      right: this.getRightContent()
    });
  };

  return HeaderNavigation;
}(React.PureComponent);

HeaderNavigation.propTypes = {
  title: PropTypes.string,
  onBackClick: PropTypes.func,
  paging: PropTypes.shape({
    itemIds: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])), PropTypes.shape({})])
  }),
  dropdown: PropTypes.shape({
    menuItems: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.shape({})]))
  })
};

HeaderNavigation.defaultProps = {
  title: null,
  onBackClick: null,
  dropdown: {
    menuItems: []
  },
  paging: {
    itemIds: []
  }
};

export default HeaderNavigation;