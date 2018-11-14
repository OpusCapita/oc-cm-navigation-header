'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  height: ', ';\n  width: ', ';\n  margin-right: ', ';\n  svg {\n    height: ', ';\n    width: ', ';\n  }\n'], ['\n  height: ', ';\n  width: ', ';\n  margin-right: ', ';\n  svg {\n    height: ', ';\n    width: ', ';\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactListItems = require('@opuscapita/react-list-items');

var _reactListItems2 = _interopRequireDefault(_reactListItems);

var _reactDropdown = require('@opuscapita/react-dropdown');

var _reactIcons = require('@opuscapita/react-icons');

var _ocCmCommonLayouts = require('@opuscapita/oc-cm-common-layouts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var classPrefix = 'oc-common-layouts';

var BackButton = (0, _styledComponents2.default)(_ocCmCommonLayouts.Primitive.BorderlessButton)(_templateObject, function (props) {
  return props.theme.header.button.height;
}, function (props) {
  return props.theme.header.button.height;
}, function (props) {
  return props.theme.gutterWidth;
}, function (props) {
  return props.theme.header.button.height;
}, function (props) {
  return props.theme.header.button.height;
});

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
      return _react2.default.createElement(_reactListItems2.default, _extends({ id: id + '-pagination' }, paging));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWFkZXItbmF2aWdhdGlvbi5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbImNsYXNzUHJlZml4IiwiQmFja0J1dHRvbiIsIlByaW1pdGl2ZSIsIkJvcmRlcmxlc3NCdXR0b24iLCJwcm9wcyIsInRoZW1lIiwiaGVhZGVyIiwiYnV0dG9uIiwiaGVpZ2h0IiwiZ3V0dGVyV2lkdGgiLCJIZWFkZXJOYXZpZ2F0aW9uIiwiZ2V0UmlnaHRDb250ZW50IiwiZHJvcGRvd24iLCJpZCIsIm1lbnVJdGVtcyIsImxlbmd0aCIsInJlbmRlckxlZnRDb250ZW50Iiwib25CYWNrQ2xpY2siLCJ0aXRsZSIsInJlbmRlckNlbnRlckNvbnRlbnQiLCJwYWdpbmciLCJpdGVtSWRzIiwic2l6ZSIsInJlbmRlciIsImNsYXNzTmFtZSIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxjQUFjLG1CQUFwQjs7QUFFQSxJQUFNQyxhQUFhLGdDQUFPQyw2QkFBVUMsZ0JBQWpCLENBQWIsa0JBQ007QUFBQSxTQUFTQyxNQUFNQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLE1BQW5CLENBQTBCQyxNQUFuQztBQUFBLENBRE4sRUFFSztBQUFBLFNBQVNKLE1BQU1DLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsTUFBbkIsQ0FBMEJDLE1BQW5DO0FBQUEsQ0FGTCxFQUdZO0FBQUEsU0FBU0osTUFBTUMsS0FBTixDQUFZSSxXQUFyQjtBQUFBLENBSFosRUFLUTtBQUFBLFNBQVNMLE1BQU1DLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsTUFBbkIsQ0FBMEJDLE1BQW5DO0FBQUEsQ0FMUixFQU1PO0FBQUEsU0FBU0osTUFBTUMsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxNQUFuQixDQUEwQkMsTUFBbkM7QUFBQSxDQU5QLENBQU47O0lBVU1FLGdCOzs7Ozs7Ozs7Ozs7Z0tBQ0pDLGUsR0FBa0IsWUFBTTtBQUFBLHdCQUNHLE1BQUtQLEtBRFI7QUFBQSxVQUNkUSxRQURjLGVBQ2RBLFFBRGM7QUFBQSxVQUNKQyxFQURJLGVBQ0pBLEVBREk7O0FBRXRCLFVBQUksQ0FBQ0QsU0FBU0UsU0FBVCxDQUFtQkMsTUFBeEIsRUFBZ0MsT0FBTyxJQUFQOztBQUVoQyxhQUNFLDhCQUFDLDJCQUFEO0FBQ0UsWUFBT0YsRUFBUDtBQURGLFNBRU1ELFFBRk4sRUFERjtBQU1ELEssUUFFREksaUIsR0FBb0IsWUFBTTtBQUFBLHlCQUNXLE1BQUtaLEtBRGhCO0FBQUEsVUFDaEJhLFdBRGdCLGdCQUNoQkEsV0FEZ0I7QUFBQSxVQUNIQyxLQURHLGdCQUNIQSxLQURHO0FBQUEsVUFDSUwsRUFESixnQkFDSUEsRUFESjs7O0FBR3hCLGFBQ0U7QUFBQyx1QkFBRCxDQUFPLFFBQVA7QUFBQTtBQUNHLGVBQU9JLFdBQVAsS0FBdUIsVUFBdkIsSUFDRDtBQUFDLG9CQUFEO0FBQUEsWUFBWSxJQUFPSixFQUFQLGlCQUFaLEVBQXFDLFNBQVNJLFdBQTlDO0FBQ0Usd0NBQUMsZ0JBQUQsSUFBTSxNQUFLLFdBQVgsRUFBdUIsTUFBSyxXQUE1QjtBQURGLFNBRkY7QUFLR0MsaUJBQVM7QUFBQyxzQ0FBRCxDQUFXLEtBQVg7QUFBQSxZQUFpQixJQUFPTCxFQUFQLFdBQWpCO0FBQXFDSztBQUFyQztBQUxaLE9BREY7QUFTRCxLLFFBRURDLG1CLEdBQXNCLFlBQU07QUFBQSx5QkFDSCxNQUFLZixLQURGO0FBQUEsVUFDbEJnQixNQURrQixnQkFDbEJBLE1BRGtCO0FBQUEsVUFDVlAsRUFEVSxnQkFDVkEsRUFEVTs7QUFHMUI7O0FBQ0EsVUFBSSxDQUFDTyxPQUFPQyxPQUFQLENBQWVOLE1BQWhCLElBQTBCLENBQUNLLE9BQU9DLE9BQVAsQ0FBZUMsSUFBOUMsRUFBb0QsT0FBTyxJQUFQO0FBQ3BELGFBQU8sOEJBQUMsd0JBQUQsYUFBVyxJQUFPVCxFQUFQLGdCQUFYLElBQXVDTyxNQUF2QyxFQUFQO0FBQ0QsSzs7OzZCQUVERyxNLHFCQUFTO0FBQUEsaUJBQ21CLEtBQUtuQixLQUR4QjtBQUFBLFFBQ0NvQixTQURELFVBQ0NBLFNBREQ7QUFBQSxRQUNZWCxFQURaLFVBQ1lBLEVBRFo7O0FBRVAsV0FDRSw4QkFBQyx5QkFBRCxDQUFRLEtBQVI7QUFDRSxpQkFBY2IsV0FBZCwyQkFBK0N3QixTQURqRDtBQUVFLFVBQUlYLEVBRk47QUFHRSxZQUFNLEtBQUtHLGlCQUFMLEVBSFI7QUFJRSxjQUFRLEtBQUtHLG1CQUFMLEVBSlY7QUFLRSxhQUFPLEtBQUtSLGVBQUw7QUFMVCxNQURGO0FBU0QsRzs7O0VBOUM0QmMsZ0JBQU1DLGE7O0FBd0VyQ2hCLGlCQUFpQmlCLFlBQWpCLEdBQWdDO0FBQzlCVCxTQUFPLElBRHVCO0FBRTlCTSxhQUFXLElBRm1CO0FBRzlCUCxlQUFhLElBSGlCO0FBSTlCTCxZQUFVO0FBQ1JFLGVBQVc7QUFESCxHQUpvQjtBQU85Qk0sVUFBUTtBQUNOQyxhQUFTO0FBREg7QUFQc0IsQ0FBaEM7O2tCQVllWCxnQiIsImZpbGUiOiJoZWFkZXItbmF2aWdhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IExpc3RJdGVtcyBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1saXN0LWl0ZW1zJztcbmltcG9ydCB7IERyb3Bkb3duTWVudSB9IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LWRyb3Bkb3duJztcbmltcG9ydCB7IEljb24gfSBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1pY29ucyc7XG5pbXBvcnQgeyBIZWFkZXIsIFByaW1pdGl2ZSB9IGZyb20gJ0BvcHVzY2FwaXRhL29jLWNtLWNvbW1vbi1sYXlvdXRzJztcblxuY29uc3QgY2xhc3NQcmVmaXggPSAnb2MtY29tbW9uLWxheW91dHMnO1xuXG5jb25zdCBCYWNrQnV0dG9uID0gc3R5bGVkKFByaW1pdGl2ZS5Cb3JkZXJsZXNzQnV0dG9uKWBcbiAgaGVpZ2h0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhlYWRlci5idXR0b24uaGVpZ2h0fTtcbiAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaGVhZGVyLmJ1dHRvbi5oZWlnaHR9O1xuICBtYXJnaW4tcmlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZ3V0dGVyV2lkdGh9O1xuICBzdmcge1xuICAgIGhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5oZWFkZXIuYnV0dG9uLmhlaWdodH07XG4gICAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaGVhZGVyLmJ1dHRvbi5oZWlnaHR9O1xuICB9XG5gO1xuXG5jbGFzcyBIZWFkZXJOYXZpZ2F0aW9uIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIGdldFJpZ2h0Q29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCB7IGRyb3Bkb3duLCBpZCB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIWRyb3Bkb3duLm1lbnVJdGVtcy5sZW5ndGgpIHJldHVybiBudWxsO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxEcm9wZG93bk1lbnVcbiAgICAgICAgaWQ9e2Ake2lkfS1tZW51YH1cbiAgICAgICAgey4uLmRyb3Bkb3dufVxuICAgICAgLz5cbiAgICApO1xuICB9O1xuXG4gIHJlbmRlckxlZnRDb250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgb25CYWNrQ2xpY2ssIHRpdGxlLCBpZCB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIHt0eXBlb2Ygb25CYWNrQ2xpY2sgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgICAgPEJhY2tCdXR0b24gaWQ9e2Ake2lkfS1iYWNrLWJ1dHRvbmB9IG9uQ2xpY2s9e29uQmFja0NsaWNrfT5cbiAgICAgICAgICA8SWNvbiB0eXBlPVwiaW5kaWNhdG9yXCIgbmFtZT1cImFycm93TGVmdFwiIC8+XG4gICAgICAgIDwvQmFja0J1dHRvbj59XG4gICAgICAgIHt0aXRsZSAmJiA8UHJpbWl0aXZlLlRpdGxlIGlkPXtgJHtpZH0tdGl0bGVgfT57dGl0bGV9PC9QcmltaXRpdmUuVGl0bGU+fVxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9O1xuXG4gIHJlbmRlckNlbnRlckNvbnRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBwYWdpbmcsIGlkIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgLy8gSWYgdGhlcmUncyBhbiBhcnJheSBvZiAxIG9yIG1vcmUgaXRlbXMsIE9SIEltbXV0YWJsZUpzIExpc3Qgd2l0aCAxIG9yIG1vcmUgaXRlbXNcbiAgICBpZiAoIXBhZ2luZy5pdGVtSWRzLmxlbmd0aCAmJiAhcGFnaW5nLml0ZW1JZHMuc2l6ZSkgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIDxMaXN0SXRlbXMgaWQ9e2Ake2lkfS1wYWdpbmF0aW9uYH0gey4uLnBhZ2luZ30gLz47XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBpZCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPEhlYWRlci5CYXNpY1xuICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fV9uYXZpZ2F0aW9uLWhlYWRlciAke2NsYXNzTmFtZX1gfVxuICAgICAgICBpZD17aWR9XG4gICAgICAgIGxlZnQ9e3RoaXMucmVuZGVyTGVmdENvbnRlbnQoKX1cbiAgICAgICAgY2VudGVyPXt0aGlzLnJlbmRlckNlbnRlckNvbnRlbnQoKX1cbiAgICAgICAgcmlnaHQ9e3RoaXMuZ2V0UmlnaHRDb250ZW50KCl9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cblxuSGVhZGVyTmF2aWdhdGlvbi5wcm9wVHlwZXMgPSB7XG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uQmFja0NsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgcGFnaW5nOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGl0ZW1JZHM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBdKSksXG4gICAgICBQcm9wVHlwZXMuc2hhcGUoe30pLFxuICAgIF0pLFxuICB9KSxcbiAgZHJvcGRvd246IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgbWVudUl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgUHJvcFR5cGVzLnNoYXBlKHt9KSxcbiAgICBdKSksXG4gIH0pLFxufTtcblxuSGVhZGVyTmF2aWdhdGlvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIHRpdGxlOiBudWxsLFxuICBjbGFzc05hbWU6IG51bGwsXG4gIG9uQmFja0NsaWNrOiBudWxsLFxuICBkcm9wZG93bjoge1xuICAgIG1lbnVJdGVtczogW10sXG4gIH0sXG4gIHBhZ2luZzoge1xuICAgIGl0ZW1JZHM6IFtdLFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyTmF2aWdhdGlvbjtcbiJdfQ==