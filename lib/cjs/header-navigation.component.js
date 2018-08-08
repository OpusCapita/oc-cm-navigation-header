'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  height: ', ';\n  width: ', ';\n  font-size: 16px;\n'], ['\n  height: ', ';\n  width: ', ';\n  font-size: 16px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactListItems = require('@opuscapita/react-list-items');

var _reactDropdown = require('@opuscapita/react-dropdown');

var _reactIcons = require('@opuscapita/react-icons');

var _ocCmCommonLayouts = require('@opuscapita/oc-cm-common-layouts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

// App imports

var classPrefix = 'oc-common-layouts';

var BackButton = _ocCmCommonLayouts.Primitive.BorderlessButton.extend(_templateObject, _ocCmCommonLayouts.theme.header.button.height, _ocCmCommonLayouts.theme.header.button.height);

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

      return _react2.default.createElement(_reactDropdown.DropdownMenu, _extends({
        id: classPrefix + '_navigation-header-menu'
      }, dropdown));
    }, _this.renderLeftContent = function () {
      var _this$props = _this.props,
          onBackClick = _this$props.onBackClick,
          title = _this$props.title;

      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        typeof onBackClick === 'function' && _react2.default.createElement(
          BackButton,
          { onClick: onBackClick },
          _react2.default.createElement(_reactIcons.Icon, { type: 'indicator', name: 'arrowLeft' })
        ),
        title && _react2.default.createElement(
          _ocCmCommonLayouts.Primitive.Title,
          null,
          title
        )
      );
    }, _this.renderCenterContent = function () {
      var paging = _this.props.paging;

      if (!paging.itemIds.length && !paging.itemIds.size) return null;

      return _react2.default.createElement(_reactListItems.ListItems, _extends({
        id: classPrefix + '_navigation-header-items'
      }, paging));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  HeaderNavigation.prototype.render = function render() {
    return _react2.default.createElement(_ocCmCommonLayouts.Header.Basic, {
      className: classPrefix + '_navigation-header',
      left: this.renderLeftContent(),
      center: this.renderCenterContent(),
      right: this.getRightContent()
    });
  };

  return HeaderNavigation;
}(_react2.default.PureComponent);

HeaderNavigation.propTypes = {
  title: _propTypes2.default.string,
  onBackClick: _propTypes2.default.func,
  paging: _propTypes2.default.shape({
    itemIds: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])), _propTypes2.default.shape({})])
  }),
  dropdown: _propTypes2.default.shape({
    menuItems: _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.shape({})]))
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

exports.default = HeaderNavigation;