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
      var _this$props = _this.props,
          dropdown = _this$props.dropdown,
          id = _this$props.id;

      if (!dropdown.menuItems.length) return null;

      return _react2.default.createElement(_reactDropdown.DropdownMenu, _extends({
        id: id + '-menu'
      }, dropdown));
    }, _this.renderLeftContent = function () {
      var _this$props2 = _this.props,
          onBackClick = _this$props2.onBackClick,
          title = _this$props2.title,
          id = _this$props2.id;


      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        typeof onBackClick === 'function' && _react2.default.createElement(
          BackButton,
          { id: id + '-back-button', onClick: onBackClick },
          _react2.default.createElement(_reactIcons.Icon, { type: 'indicator', name: 'arrowLeft' })
        ),
        title && _react2.default.createElement(
          _ocCmCommonLayouts.Primitive.Title,
          { id: id + '-title' },
          title
        )
      );
    }, _this.renderCenterContent = function () {
      var _this$props3 = _this.props,
          paging = _this$props3.paging,
          id = _this$props3.id;

      // If there's an array of 1 or more items, OR ImmutableJs List with 1 or more items

      if (!paging.itemIds.length && !paging.itemIds.size) return null;
      return _react2.default.createElement(_reactListItems.ListItems, _extends({ id: id + '-pagination' }, paging));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  HeaderNavigation.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        id = _props.id;

    return _react2.default.createElement(_ocCmCommonLayouts.Header.Basic, {
      className: classPrefix + '_navigation-header ' + className,
      id: id,
      left: this.renderLeftContent(),
      center: this.renderCenterContent(),
      right: this.getRightContent()
    });
  };

  return HeaderNavigation;
}(_react2.default.PureComponent);

HeaderNavigation.defaultProps = {
  title: null,
  className: null,
  onBackClick: null,
  dropdown: {
    menuItems: []
  },
  paging: {
    itemIds: []
  }
};

exports.default = HeaderNavigation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWFkZXItbmF2aWdhdGlvbi5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbImNsYXNzUHJlZml4IiwiQmFja0J1dHRvbiIsIlByaW1pdGl2ZSIsIkJvcmRlcmxlc3NCdXR0b24iLCJleHRlbmQiLCJ0aGVtZSIsImhlYWRlciIsImJ1dHRvbiIsImhlaWdodCIsIkhlYWRlck5hdmlnYXRpb24iLCJnZXRSaWdodENvbnRlbnQiLCJwcm9wcyIsImRyb3Bkb3duIiwiaWQiLCJtZW51SXRlbXMiLCJsZW5ndGgiLCJyZW5kZXJMZWZ0Q29udGVudCIsIm9uQmFja0NsaWNrIiwidGl0bGUiLCJyZW5kZXJDZW50ZXJDb250ZW50IiwicGFnaW5nIiwiaXRlbUlkcyIsInNpemUiLCJyZW5kZXIiLCJjbGFzc05hbWUiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxjQUFjLG1CQUFwQjs7QUFFQSxJQUFNQyxhQUFhQyw2QkFBVUMsZ0JBQVYsQ0FBMkJDLE1BQXhDLGtCQUNNQyx5QkFBTUMsTUFBTixDQUFhQyxNQUFiLENBQW9CQyxNQUQxQixFQUVLSCx5QkFBTUMsTUFBTixDQUFhQyxNQUFiLENBQW9CQyxNQUZ6QixDQUFOOztJQU1NQyxnQjs7Ozs7Ozs7Ozs7O2dLQUNKQyxlLEdBQWtCLFlBQU07QUFBQSx3QkFDRyxNQUFLQyxLQURSO0FBQUEsVUFDZEMsUUFEYyxlQUNkQSxRQURjO0FBQUEsVUFDSkMsRUFESSxlQUNKQSxFQURJOztBQUV0QixVQUFJLENBQUNELFNBQVNFLFNBQVQsQ0FBbUJDLE1BQXhCLEVBQWdDLE9BQU8sSUFBUDs7QUFFaEMsYUFDRSw4QkFBQywyQkFBRDtBQUNFLFlBQU9GLEVBQVA7QUFERixTQUVNRCxRQUZOLEVBREY7QUFNRCxLLFFBRURJLGlCLEdBQW9CLFlBQU07QUFBQSx5QkFDVyxNQUFLTCxLQURoQjtBQUFBLFVBQ2hCTSxXQURnQixnQkFDaEJBLFdBRGdCO0FBQUEsVUFDSEMsS0FERyxnQkFDSEEsS0FERztBQUFBLFVBQ0lMLEVBREosZ0JBQ0lBLEVBREo7OztBQUd4QixhQUNFO0FBQUMsdUJBQUQsQ0FBTyxRQUFQO0FBQUE7QUFDRyxlQUFPSSxXQUFQLEtBQXVCLFVBQXZCLElBQ0Q7QUFBQyxvQkFBRDtBQUFBLFlBQVksSUFBT0osRUFBUCxpQkFBWixFQUFxQyxTQUFTSSxXQUE5QztBQUNFLHdDQUFDLGdCQUFELElBQU0sTUFBSyxXQUFYLEVBQXVCLE1BQUssV0FBNUI7QUFERixTQUZGO0FBS0dDLGlCQUFTO0FBQUMsc0NBQUQsQ0FBVyxLQUFYO0FBQUEsWUFBaUIsSUFBT0wsRUFBUCxXQUFqQjtBQUFxQ0s7QUFBckM7QUFMWixPQURGO0FBU0QsSyxRQUVEQyxtQixHQUFzQixZQUFNO0FBQUEseUJBQ0gsTUFBS1IsS0FERjtBQUFBLFVBQ2xCUyxNQURrQixnQkFDbEJBLE1BRGtCO0FBQUEsVUFDVlAsRUFEVSxnQkFDVkEsRUFEVTs7QUFHMUI7O0FBQ0EsVUFBSSxDQUFDTyxPQUFPQyxPQUFQLENBQWVOLE1BQWhCLElBQTBCLENBQUNLLE9BQU9DLE9BQVAsQ0FBZUMsSUFBOUMsRUFBb0QsT0FBTyxJQUFQO0FBQ3BELGFBQU8sOEJBQUMseUJBQUQsYUFBVyxJQUFPVCxFQUFQLGdCQUFYLElBQXVDTyxNQUF2QyxFQUFQO0FBQ0QsSzs7OzZCQUVERyxNLHFCQUFTO0FBQUEsaUJBQ21CLEtBQUtaLEtBRHhCO0FBQUEsUUFDQ2EsU0FERCxVQUNDQSxTQUREO0FBQUEsUUFDWVgsRUFEWixVQUNZQSxFQURaOztBQUVQLFdBQ0UsOEJBQUMseUJBQUQsQ0FBUSxLQUFSO0FBQ0UsaUJBQWNiLFdBQWQsMkJBQStDd0IsU0FEakQ7QUFFRSxVQUFJWCxFQUZOO0FBR0UsWUFBTSxLQUFLRyxpQkFBTCxFQUhSO0FBSUUsY0FBUSxLQUFLRyxtQkFBTCxFQUpWO0FBS0UsYUFBTyxLQUFLVCxlQUFMO0FBTFQsTUFERjtBQVNELEc7OztFQTlDNEJlLGdCQUFNQyxhOztBQXdFckNqQixpQkFBaUJrQixZQUFqQixHQUFnQztBQUM5QlQsU0FBTyxJQUR1QjtBQUU5Qk0sYUFBVyxJQUZtQjtBQUc5QlAsZUFBYSxJQUhpQjtBQUk5QkwsWUFBVTtBQUNSRSxlQUFXO0FBREgsR0FKb0I7QUFPOUJNLFVBQVE7QUFDTkMsYUFBUztBQURIO0FBUHNCLENBQWhDOztrQkFZZVosZ0IiLCJmaWxlIjoiaGVhZGVyLW5hdmlnYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBMaXN0SXRlbXMgfSBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1saXN0LWl0ZW1zJztcbmltcG9ydCB7IERyb3Bkb3duTWVudSB9IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LWRyb3Bkb3duJztcbmltcG9ydCB7IEljb24gfSBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1pY29ucyc7XG5pbXBvcnQgeyBIZWFkZXIsIFByaW1pdGl2ZSwgdGhlbWUgfSBmcm9tICdAb3B1c2NhcGl0YS9vYy1jbS1jb21tb24tbGF5b3V0cyc7XG5cbmNvbnN0IGNsYXNzUHJlZml4ID0gJ29jLWNvbW1vbi1sYXlvdXRzJztcblxuY29uc3QgQmFja0J1dHRvbiA9IFByaW1pdGl2ZS5Cb3JkZXJsZXNzQnV0dG9uLmV4dGVuZGBcbiAgaGVpZ2h0OiAke3RoZW1lLmhlYWRlci5idXR0b24uaGVpZ2h0fTtcbiAgd2lkdGg6ICR7dGhlbWUuaGVhZGVyLmJ1dHRvbi5oZWlnaHR9O1xuICBmb250LXNpemU6IDE2cHg7XG5gO1xuXG5jbGFzcyBIZWFkZXJOYXZpZ2F0aW9uIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIGdldFJpZ2h0Q29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCB7IGRyb3Bkb3duLCBpZCB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIWRyb3Bkb3duLm1lbnVJdGVtcy5sZW5ndGgpIHJldHVybiBudWxsO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxEcm9wZG93bk1lbnVcbiAgICAgICAgaWQ9e2Ake2lkfS1tZW51YH1cbiAgICAgICAgey4uLmRyb3Bkb3dufVxuICAgICAgLz5cbiAgICApO1xuICB9O1xuXG4gIHJlbmRlckxlZnRDb250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgb25CYWNrQ2xpY2ssIHRpdGxlLCBpZCB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIHt0eXBlb2Ygb25CYWNrQ2xpY2sgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgICAgPEJhY2tCdXR0b24gaWQ9e2Ake2lkfS1iYWNrLWJ1dHRvbmB9IG9uQ2xpY2s9e29uQmFja0NsaWNrfT5cbiAgICAgICAgICA8SWNvbiB0eXBlPVwiaW5kaWNhdG9yXCIgbmFtZT1cImFycm93TGVmdFwiIC8+XG4gICAgICAgIDwvQmFja0J1dHRvbj59XG4gICAgICAgIHt0aXRsZSAmJiA8UHJpbWl0aXZlLlRpdGxlIGlkPXtgJHtpZH0tdGl0bGVgfT57dGl0bGV9PC9QcmltaXRpdmUuVGl0bGU+fVxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9O1xuXG4gIHJlbmRlckNlbnRlckNvbnRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBwYWdpbmcsIGlkIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgLy8gSWYgdGhlcmUncyBhbiBhcnJheSBvZiAxIG9yIG1vcmUgaXRlbXMsIE9SIEltbXV0YWJsZUpzIExpc3Qgd2l0aCAxIG9yIG1vcmUgaXRlbXNcbiAgICBpZiAoIXBhZ2luZy5pdGVtSWRzLmxlbmd0aCAmJiAhcGFnaW5nLml0ZW1JZHMuc2l6ZSkgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIDxMaXN0SXRlbXMgaWQ9e2Ake2lkfS1wYWdpbmF0aW9uYH0gey4uLnBhZ2luZ30gLz47XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBpZCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPEhlYWRlci5CYXNpY1xuICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fV9uYXZpZ2F0aW9uLWhlYWRlciAke2NsYXNzTmFtZX1gfVxuICAgICAgICBpZD17aWR9XG4gICAgICAgIGxlZnQ9e3RoaXMucmVuZGVyTGVmdENvbnRlbnQoKX1cbiAgICAgICAgY2VudGVyPXt0aGlzLnJlbmRlckNlbnRlckNvbnRlbnQoKX1cbiAgICAgICAgcmlnaHQ9e3RoaXMuZ2V0UmlnaHRDb250ZW50KCl9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cblxuSGVhZGVyTmF2aWdhdGlvbi5wcm9wVHlwZXMgPSB7XG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uQmFja0NsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgcGFnaW5nOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGl0ZW1JZHM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBdKSksXG4gICAgICBQcm9wVHlwZXMuc2hhcGUoe30pLFxuICAgIF0pLFxuICB9KSxcbiAgZHJvcGRvd246IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgbWVudUl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgUHJvcFR5cGVzLnNoYXBlKHt9KSxcbiAgICBdKSksXG4gIH0pLFxufTtcblxuSGVhZGVyTmF2aWdhdGlvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIHRpdGxlOiBudWxsLFxuICBjbGFzc05hbWU6IG51bGwsXG4gIG9uQmFja0NsaWNrOiBudWxsLFxuICBkcm9wZG93bjoge1xuICAgIG1lbnVJdGVtczogW10sXG4gIH0sXG4gIHBhZ2luZzoge1xuICAgIGl0ZW1JZHM6IFtdLFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyTmF2aWdhdGlvbjtcbiJdfQ==