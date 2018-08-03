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

      if (!paging.itemIds.length) return null;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWFkZXItbmF2aWdhdGlvbi5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiTGlzdEl0ZW1zIiwiRHJvcGRvd25NZW51IiwiSWNvbiIsIkhlYWRlciIsIlByaW1pdGl2ZSIsInRoZW1lIiwiY2xhc3NQcmVmaXgiLCJCYWNrQnV0dG9uIiwiQm9yZGVybGVzc0J1dHRvbiIsImV4dGVuZCIsImhlYWRlciIsImJ1dHRvbiIsImhlaWdodCIsIkhlYWRlck5hdmlnYXRpb24iLCJnZXRSaWdodENvbnRlbnQiLCJkcm9wZG93biIsInByb3BzIiwibWVudUl0ZW1zIiwibGVuZ3RoIiwicmVuZGVyTGVmdENvbnRlbnQiLCJvbkJhY2tDbGljayIsInRpdGxlIiwicmVuZGVyQ2VudGVyQ29udGVudCIsInBhZ2luZyIsIml0ZW1JZHMiLCJyZW5kZXIiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLFNBQVQsUUFBMEIsOEJBQTFCO0FBQ0EsU0FBU0MsWUFBVCxRQUE2Qiw0QkFBN0I7QUFDQSxTQUFTQyxJQUFULFFBQXFCLHlCQUFyQjtBQUNBLFNBQVNDLE1BQVQsRUFBaUJDLFNBQWpCLEVBQTRCQyxLQUE1QixRQUF5QyxrQ0FBekM7QUFDQTs7QUFFQSxJQUFNQyxjQUFjLG1CQUFwQjs7QUFFQSxJQUFNQyxhQUFhSCxVQUFVSSxnQkFBVixDQUEyQkMsTUFBeEMsa0JBQ01KLE1BQU1LLE1BQU4sQ0FBYUMsTUFBYixDQUFvQkMsTUFEMUIsRUFFS1AsTUFBTUssTUFBTixDQUFhQyxNQUFiLENBQW9CQyxNQUZ6QixDQUFOOztJQU1NQyxnQjs7Ozs7Ozs7Ozs7O2dLQUNKQyxlLEdBQWtCLFlBQU07QUFBQSxVQUNkQyxRQURjLEdBQ0QsTUFBS0MsS0FESixDQUNkRCxRQURjOztBQUV0QixVQUFJLENBQUNBLFNBQVNFLFNBQVQsQ0FBbUJDLE1BQXhCLEVBQWdDLE9BQU8sSUFBUDs7QUFFaEMsYUFDRSxvQkFBQyxZQUFEO0FBQ0UsWUFBT1osV0FBUDtBQURGLFNBRU1TLFFBRk4sRUFERjtBQU1ELEssUUFFREksaUIsR0FBb0IsWUFBTTtBQUFBLHdCQUNPLE1BQUtILEtBRFo7QUFBQSxVQUNoQkksV0FEZ0IsZUFDaEJBLFdBRGdCO0FBQUEsVUFDSEMsS0FERyxlQUNIQSxLQURHOztBQUV4QixhQUNFO0FBQUMsYUFBRCxDQUFPLFFBQVA7QUFBQTtBQUNHLGVBQU9ELFdBQVAsS0FBdUIsVUFBdkIsSUFDRDtBQUFDLG9CQUFEO0FBQUEsWUFBWSxTQUFTQSxXQUFyQjtBQUFrQyw4QkFBQyxJQUFELElBQU0sTUFBSyxXQUFYLEVBQXVCLE1BQUssV0FBNUI7QUFBbEMsU0FGRjtBQUdHQyxpQkFBUztBQUFDLG1CQUFELENBQVcsS0FBWDtBQUFBO0FBQWtCQTtBQUFsQjtBQUhaLE9BREY7QUFPRCxLLFFBRURDLG1CLEdBQXNCLFlBQU07QUFBQSxVQUNsQkMsTUFEa0IsR0FDUCxNQUFLUCxLQURFLENBQ2xCTyxNQURrQjs7QUFFMUIsVUFBSSxDQUFDQSxPQUFPQyxPQUFQLENBQWVOLE1BQXBCLEVBQTRCLE9BQU8sSUFBUDs7QUFFNUIsYUFDRSxvQkFBQyxTQUFEO0FBQ0UsWUFBT1osV0FBUDtBQURGLFNBRU1pQixNQUZOLEVBREY7QUFNRCxLOzs7NkJBRURFLE0scUJBQVM7QUFDUCxXQUNFLG9CQUFDLE1BQUQsQ0FBUSxLQUFSO0FBQ0UsaUJBQWNuQixXQUFkLHVCQURGO0FBRUUsWUFBTSxLQUFLYSxpQkFBTCxFQUZSO0FBR0UsY0FBUSxLQUFLRyxtQkFBTCxFQUhWO0FBSUUsYUFBTyxLQUFLUixlQUFMO0FBSlQsTUFERjtBQVFELEc7OztFQTdDNEJoQixNQUFNNEIsYTs7QUFrRXJDYixpQkFBaUJjLFlBQWpCLEdBQWdDO0FBQzlCTixTQUFPLElBRHVCO0FBRTlCRCxlQUFhLElBRmlCO0FBRzlCTCxZQUFVO0FBQ1JFLGVBQVc7QUFESCxHQUhvQjtBQU05Qk0sVUFBUTtBQUNOQyxhQUFTO0FBREg7QUFOc0IsQ0FBaEM7O0FBV0EsZUFBZVgsZ0JBQWYiLCJmaWxlIjoiaGVhZGVyLW5hdmlnYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBMaXN0SXRlbXMgfSBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1saXN0LWl0ZW1zJztcbmltcG9ydCB7IERyb3Bkb3duTWVudSB9IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LWRyb3Bkb3duJztcbmltcG9ydCB7IEljb24gfSBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1pY29ucyc7XG5pbXBvcnQgeyBIZWFkZXIsIFByaW1pdGl2ZSwgdGhlbWUgfSBmcm9tICdAb3B1c2NhcGl0YS9vYy1jbS1jb21tb24tbGF5b3V0cyc7XG4vLyBBcHAgaW1wb3J0c1xuXG5jb25zdCBjbGFzc1ByZWZpeCA9ICdvYy1jb21tb24tbGF5b3V0cyc7XG5cbmNvbnN0IEJhY2tCdXR0b24gPSBQcmltaXRpdmUuQm9yZGVybGVzc0J1dHRvbi5leHRlbmRgXG4gIGhlaWdodDogJHt0aGVtZS5oZWFkZXIuYnV0dG9uLmhlaWdodH07XG4gIHdpZHRoOiAke3RoZW1lLmhlYWRlci5idXR0b24uaGVpZ2h0fTtcbiAgZm9udC1zaXplOiAxNnB4O1xuYDtcblxuY2xhc3MgSGVhZGVyTmF2aWdhdGlvbiBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBnZXRSaWdodENvbnRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBkcm9wZG93biB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIWRyb3Bkb3duLm1lbnVJdGVtcy5sZW5ndGgpIHJldHVybiBudWxsO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxEcm9wZG93bk1lbnVcbiAgICAgICAgaWQ9e2Ake2NsYXNzUHJlZml4fV9uYXZpZ2F0aW9uLWhlYWRlci1tZW51YH1cbiAgICAgICAgey4uLmRyb3Bkb3dufVxuICAgICAgLz5cbiAgICApO1xuICB9O1xuXG4gIHJlbmRlckxlZnRDb250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgb25CYWNrQ2xpY2ssIHRpdGxlIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIHt0eXBlb2Ygb25CYWNrQ2xpY2sgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgICAgPEJhY2tCdXR0b24gb25DbGljaz17b25CYWNrQ2xpY2t9PjxJY29uIHR5cGU9XCJpbmRpY2F0b3JcIiBuYW1lPVwiYXJyb3dMZWZ0XCIgLz48L0JhY2tCdXR0b24+fVxuICAgICAgICB7dGl0bGUgJiYgPFByaW1pdGl2ZS5UaXRsZT57dGl0bGV9PC9QcmltaXRpdmUuVGl0bGU+fVxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9O1xuXG4gIHJlbmRlckNlbnRlckNvbnRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBwYWdpbmcgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCFwYWdpbmcuaXRlbUlkcy5sZW5ndGgpIHJldHVybiBudWxsO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxMaXN0SXRlbXNcbiAgICAgICAgaWQ9e2Ake2NsYXNzUHJlZml4fV9uYXZpZ2F0aW9uLWhlYWRlci1pdGVtc2B9XG4gICAgICAgIHsuLi5wYWdpbmd9XG4gICAgICAvPlxuICAgICk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8SGVhZGVyLkJhc2ljXG4gICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9X25hdmlnYXRpb24taGVhZGVyYH1cbiAgICAgICAgbGVmdD17dGhpcy5yZW5kZXJMZWZ0Q29udGVudCgpfVxuICAgICAgICBjZW50ZXI9e3RoaXMucmVuZGVyQ2VudGVyQ29udGVudCgpfVxuICAgICAgICByaWdodD17dGhpcy5nZXRSaWdodENvbnRlbnQoKX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuXG5IZWFkZXJOYXZpZ2F0aW9uLnByb3BUeXBlcyA9IHtcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uQmFja0NsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgcGFnaW5nOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGl0ZW1JZHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgXSkpLFxuICB9KSxcbiAgZHJvcGRvd246IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgbWVudUl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgUHJvcFR5cGVzLnNoYXBlKHt9KSxcbiAgICBdKSksXG4gIH0pLFxufTtcblxuSGVhZGVyTmF2aWdhdGlvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIHRpdGxlOiBudWxsLFxuICBvbkJhY2tDbGljazogbnVsbCxcbiAgZHJvcGRvd246IHtcbiAgICBtZW51SXRlbXM6IFtdLFxuICB9LFxuICBwYWdpbmc6IHtcbiAgICBpdGVtSWRzOiBbXSxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlck5hdmlnYXRpb247XG4iXX0=