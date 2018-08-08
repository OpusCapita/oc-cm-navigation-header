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

      if (!paging.itemIds.length || !paging.itemIds.size) return null;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWFkZXItbmF2aWdhdGlvbi5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbImNsYXNzUHJlZml4IiwiQmFja0J1dHRvbiIsIlByaW1pdGl2ZSIsIkJvcmRlcmxlc3NCdXR0b24iLCJleHRlbmQiLCJ0aGVtZSIsImhlYWRlciIsImJ1dHRvbiIsImhlaWdodCIsIkhlYWRlck5hdmlnYXRpb24iLCJnZXRSaWdodENvbnRlbnQiLCJkcm9wZG93biIsInByb3BzIiwibWVudUl0ZW1zIiwibGVuZ3RoIiwicmVuZGVyTGVmdENvbnRlbnQiLCJvbkJhY2tDbGljayIsInRpdGxlIiwicmVuZGVyQ2VudGVyQ29udGVudCIsInBhZ2luZyIsIml0ZW1JZHMiLCJzaXplIiwicmVuZGVyIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBRUEsSUFBTUEsY0FBYyxtQkFBcEI7O0FBRUEsSUFBTUMsYUFBYUMsNkJBQVVDLGdCQUFWLENBQTJCQyxNQUF4QyxrQkFDTUMseUJBQU1DLE1BQU4sQ0FBYUMsTUFBYixDQUFvQkMsTUFEMUIsRUFFS0gseUJBQU1DLE1BQU4sQ0FBYUMsTUFBYixDQUFvQkMsTUFGekIsQ0FBTjs7SUFNTUMsZ0I7Ozs7Ozs7Ozs7OztnS0FDSkMsZSxHQUFrQixZQUFNO0FBQUEsVUFDZEMsUUFEYyxHQUNELE1BQUtDLEtBREosQ0FDZEQsUUFEYzs7QUFFdEIsVUFBSSxDQUFDQSxTQUFTRSxTQUFULENBQW1CQyxNQUF4QixFQUFnQyxPQUFPLElBQVA7O0FBRWhDLGFBQ0UsOEJBQUMsMkJBQUQ7QUFDRSxZQUFPZCxXQUFQO0FBREYsU0FFTVcsUUFGTixFQURGO0FBTUQsSyxRQUVESSxpQixHQUFvQixZQUFNO0FBQUEsd0JBQ08sTUFBS0gsS0FEWjtBQUFBLFVBQ2hCSSxXQURnQixlQUNoQkEsV0FEZ0I7QUFBQSxVQUNIQyxLQURHLGVBQ0hBLEtBREc7O0FBRXhCLGFBQ0U7QUFBQyx1QkFBRCxDQUFPLFFBQVA7QUFBQTtBQUNHLGVBQU9ELFdBQVAsS0FBdUIsVUFBdkIsSUFDRDtBQUFDLG9CQUFEO0FBQUEsWUFBWSxTQUFTQSxXQUFyQjtBQUFrQyx3Q0FBQyxnQkFBRCxJQUFNLE1BQUssV0FBWCxFQUF1QixNQUFLLFdBQTVCO0FBQWxDLFNBRkY7QUFHR0MsaUJBQVM7QUFBQyxzQ0FBRCxDQUFXLEtBQVg7QUFBQTtBQUFrQkE7QUFBbEI7QUFIWixPQURGO0FBT0QsSyxRQUVEQyxtQixHQUFzQixZQUFNO0FBQUEsVUFDbEJDLE1BRGtCLEdBQ1AsTUFBS1AsS0FERSxDQUNsQk8sTUFEa0I7O0FBRTFCLFVBQUksQ0FBQ0EsT0FBT0MsT0FBUCxDQUFlTixNQUFoQixJQUEwQixDQUFDSyxPQUFPQyxPQUFQLENBQWVDLElBQTlDLEVBQW9ELE9BQU8sSUFBUDs7QUFFcEQsYUFDRSw4QkFBQyx5QkFBRDtBQUNFLFlBQU9yQixXQUFQO0FBREYsU0FFTW1CLE1BRk4sRUFERjtBQU1ELEs7Ozs2QkFFREcsTSxxQkFBUztBQUNQLFdBQ0UsOEJBQUMseUJBQUQsQ0FBUSxLQUFSO0FBQ0UsaUJBQWN0QixXQUFkLHVCQURGO0FBRUUsWUFBTSxLQUFLZSxpQkFBTCxFQUZSO0FBR0UsY0FBUSxLQUFLRyxtQkFBTCxFQUhWO0FBSUUsYUFBTyxLQUFLUixlQUFMO0FBSlQsTUFERjtBQVFELEc7OztFQTdDNEJhLGdCQUFNQyxhOztBQXFFckNmLGlCQUFpQmdCLFlBQWpCLEdBQWdDO0FBQzlCUixTQUFPLElBRHVCO0FBRTlCRCxlQUFhLElBRmlCO0FBRzlCTCxZQUFVO0FBQ1JFLGVBQVc7QUFESCxHQUhvQjtBQU05Qk0sVUFBUTtBQUNOQyxhQUFTO0FBREg7QUFOc0IsQ0FBaEM7O2tCQVdlWCxnQiIsImZpbGUiOiJoZWFkZXItbmF2aWdhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IExpc3RJdGVtcyB9IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LWxpc3QtaXRlbXMnO1xuaW1wb3J0IHsgRHJvcGRvd25NZW51IH0gZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtZHJvcGRvd24nO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LWljb25zJztcbmltcG9ydCB7IEhlYWRlciwgUHJpbWl0aXZlLCB0aGVtZSB9IGZyb20gJ0BvcHVzY2FwaXRhL29jLWNtLWNvbW1vbi1sYXlvdXRzJztcbi8vIEFwcCBpbXBvcnRzXG5cbmNvbnN0IGNsYXNzUHJlZml4ID0gJ29jLWNvbW1vbi1sYXlvdXRzJztcblxuY29uc3QgQmFja0J1dHRvbiA9IFByaW1pdGl2ZS5Cb3JkZXJsZXNzQnV0dG9uLmV4dGVuZGBcbiAgaGVpZ2h0OiAke3RoZW1lLmhlYWRlci5idXR0b24uaGVpZ2h0fTtcbiAgd2lkdGg6ICR7dGhlbWUuaGVhZGVyLmJ1dHRvbi5oZWlnaHR9O1xuICBmb250LXNpemU6IDE2cHg7XG5gO1xuXG5jbGFzcyBIZWFkZXJOYXZpZ2F0aW9uIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIGdldFJpZ2h0Q29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCB7IGRyb3Bkb3duIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICghZHJvcGRvd24ubWVudUl0ZW1zLmxlbmd0aCkgcmV0dXJuIG51bGw7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPERyb3Bkb3duTWVudVxuICAgICAgICBpZD17YCR7Y2xhc3NQcmVmaXh9X25hdmlnYXRpb24taGVhZGVyLW1lbnVgfVxuICAgICAgICB7Li4uZHJvcGRvd259XG4gICAgICAvPlxuICAgICk7XG4gIH07XG5cbiAgcmVuZGVyTGVmdENvbnRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBvbkJhY2tDbGljaywgdGl0bGUgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAge3R5cGVvZiBvbkJhY2tDbGljayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgICA8QmFja0J1dHRvbiBvbkNsaWNrPXtvbkJhY2tDbGlja30+PEljb24gdHlwZT1cImluZGljYXRvclwiIG5hbWU9XCJhcnJvd0xlZnRcIiAvPjwvQmFja0J1dHRvbj59XG4gICAgICAgIHt0aXRsZSAmJiA8UHJpbWl0aXZlLlRpdGxlPnt0aXRsZX08L1ByaW1pdGl2ZS5UaXRsZT59XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH07XG5cbiAgcmVuZGVyQ2VudGVyQ29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCB7IHBhZ2luZyB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIXBhZ2luZy5pdGVtSWRzLmxlbmd0aCB8fCAhcGFnaW5nLml0ZW1JZHMuc2l6ZSkgcmV0dXJuIG51bGw7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPExpc3RJdGVtc1xuICAgICAgICBpZD17YCR7Y2xhc3NQcmVmaXh9X25hdmlnYXRpb24taGVhZGVyLWl0ZW1zYH1cbiAgICAgICAgey4uLnBhZ2luZ31cbiAgICAgIC8+XG4gICAgKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxIZWFkZXIuQmFzaWNcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH1fbmF2aWdhdGlvbi1oZWFkZXJgfVxuICAgICAgICBsZWZ0PXt0aGlzLnJlbmRlckxlZnRDb250ZW50KCl9XG4gICAgICAgIGNlbnRlcj17dGhpcy5yZW5kZXJDZW50ZXJDb250ZW50KCl9XG4gICAgICAgIHJpZ2h0PXt0aGlzLmdldFJpZ2h0Q29udGVudCgpfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG5cbkhlYWRlck5hdmlnYXRpb24ucHJvcFR5cGVzID0ge1xuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25CYWNrQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICBwYWdpbmc6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgaXRlbUlkczogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIF0pKSxcbiAgICAgIFByb3BUeXBlcy5zaGFwZSh7fSksXG4gICAgXSksXG4gIH0pLFxuICBkcm9wZG93bjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBtZW51SXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBQcm9wVHlwZXMuc2hhcGUoe30pLFxuICAgIF0pKSxcbiAgfSksXG59O1xuXG5IZWFkZXJOYXZpZ2F0aW9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgdGl0bGU6IG51bGwsXG4gIG9uQmFja0NsaWNrOiBudWxsLFxuICBkcm9wZG93bjoge1xuICAgIG1lbnVJdGVtczogW10sXG4gIH0sXG4gIHBhZ2luZzoge1xuICAgIGl0ZW1JZHM6IFtdLFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyTmF2aWdhdGlvbjtcbiJdfQ==