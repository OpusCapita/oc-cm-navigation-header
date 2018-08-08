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

      if (!paging.itemIds.length || !paging.itemIds.size) return null;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWFkZXItbmF2aWdhdGlvbi5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiTGlzdEl0ZW1zIiwiRHJvcGRvd25NZW51IiwiSWNvbiIsIkhlYWRlciIsIlByaW1pdGl2ZSIsInRoZW1lIiwiY2xhc3NQcmVmaXgiLCJCYWNrQnV0dG9uIiwiQm9yZGVybGVzc0J1dHRvbiIsImV4dGVuZCIsImhlYWRlciIsImJ1dHRvbiIsImhlaWdodCIsIkhlYWRlck5hdmlnYXRpb24iLCJnZXRSaWdodENvbnRlbnQiLCJkcm9wZG93biIsInByb3BzIiwibWVudUl0ZW1zIiwibGVuZ3RoIiwicmVuZGVyTGVmdENvbnRlbnQiLCJvbkJhY2tDbGljayIsInRpdGxlIiwicmVuZGVyQ2VudGVyQ29udGVudCIsInBhZ2luZyIsIml0ZW1JZHMiLCJzaXplIiwicmVuZGVyIiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxTQUFULFFBQTBCLDhCQUExQjtBQUNBLFNBQVNDLFlBQVQsUUFBNkIsNEJBQTdCO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQix5QkFBckI7QUFDQSxTQUFTQyxNQUFULEVBQWlCQyxTQUFqQixFQUE0QkMsS0FBNUIsUUFBeUMsa0NBQXpDO0FBQ0E7O0FBRUEsSUFBTUMsY0FBYyxtQkFBcEI7O0FBRUEsSUFBTUMsYUFBYUgsVUFBVUksZ0JBQVYsQ0FBMkJDLE1BQXhDLGtCQUNNSixNQUFNSyxNQUFOLENBQWFDLE1BQWIsQ0FBb0JDLE1BRDFCLEVBRUtQLE1BQU1LLE1BQU4sQ0FBYUMsTUFBYixDQUFvQkMsTUFGekIsQ0FBTjs7SUFNTUMsZ0I7Ozs7Ozs7Ozs7OztnS0FDSkMsZSxHQUFrQixZQUFNO0FBQUEsVUFDZEMsUUFEYyxHQUNELE1BQUtDLEtBREosQ0FDZEQsUUFEYzs7QUFFdEIsVUFBSSxDQUFDQSxTQUFTRSxTQUFULENBQW1CQyxNQUF4QixFQUFnQyxPQUFPLElBQVA7O0FBRWhDLGFBQ0Usb0JBQUMsWUFBRDtBQUNFLFlBQU9aLFdBQVA7QUFERixTQUVNUyxRQUZOLEVBREY7QUFNRCxLLFFBRURJLGlCLEdBQW9CLFlBQU07QUFBQSx3QkFDTyxNQUFLSCxLQURaO0FBQUEsVUFDaEJJLFdBRGdCLGVBQ2hCQSxXQURnQjtBQUFBLFVBQ0hDLEtBREcsZUFDSEEsS0FERzs7QUFFeEIsYUFDRTtBQUFDLGFBQUQsQ0FBTyxRQUFQO0FBQUE7QUFDRyxlQUFPRCxXQUFQLEtBQXVCLFVBQXZCLElBQ0Q7QUFBQyxvQkFBRDtBQUFBLFlBQVksU0FBU0EsV0FBckI7QUFBa0MsOEJBQUMsSUFBRCxJQUFNLE1BQUssV0FBWCxFQUF1QixNQUFLLFdBQTVCO0FBQWxDLFNBRkY7QUFHR0MsaUJBQVM7QUFBQyxtQkFBRCxDQUFXLEtBQVg7QUFBQTtBQUFrQkE7QUFBbEI7QUFIWixPQURGO0FBT0QsSyxRQUVEQyxtQixHQUFzQixZQUFNO0FBQUEsVUFDbEJDLE1BRGtCLEdBQ1AsTUFBS1AsS0FERSxDQUNsQk8sTUFEa0I7O0FBRTFCLFVBQUksQ0FBQ0EsT0FBT0MsT0FBUCxDQUFlTixNQUFoQixJQUEwQixDQUFDSyxPQUFPQyxPQUFQLENBQWVDLElBQTlDLEVBQW9ELE9BQU8sSUFBUDs7QUFFcEQsYUFDRSxvQkFBQyxTQUFEO0FBQ0UsWUFBT25CLFdBQVA7QUFERixTQUVNaUIsTUFGTixFQURGO0FBTUQsSzs7OzZCQUVERyxNLHFCQUFTO0FBQ1AsV0FDRSxvQkFBQyxNQUFELENBQVEsS0FBUjtBQUNFLGlCQUFjcEIsV0FBZCx1QkFERjtBQUVFLFlBQU0sS0FBS2EsaUJBQUwsRUFGUjtBQUdFLGNBQVEsS0FBS0csbUJBQUwsRUFIVjtBQUlFLGFBQU8sS0FBS1IsZUFBTDtBQUpULE1BREY7QUFRRCxHOzs7RUE3QzRCaEIsTUFBTTZCLGE7O0FBcUVyQ2QsaUJBQWlCZSxZQUFqQixHQUFnQztBQUM5QlAsU0FBTyxJQUR1QjtBQUU5QkQsZUFBYSxJQUZpQjtBQUc5QkwsWUFBVTtBQUNSRSxlQUFXO0FBREgsR0FIb0I7QUFNOUJNLFVBQVE7QUFDTkMsYUFBUztBQURIO0FBTnNCLENBQWhDOztBQVdBLGVBQWVYLGdCQUFmIiwiZmlsZSI6ImhlYWRlci1uYXZpZ2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgTGlzdEl0ZW1zIH0gZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtbGlzdC1pdGVtcyc7XG5pbXBvcnQgeyBEcm9wZG93bk1lbnUgfSBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1kcm9wZG93bic7XG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtaWNvbnMnO1xuaW1wb3J0IHsgSGVhZGVyLCBQcmltaXRpdmUsIHRoZW1lIH0gZnJvbSAnQG9wdXNjYXBpdGEvb2MtY20tY29tbW9uLWxheW91dHMnO1xuLy8gQXBwIGltcG9ydHNcblxuY29uc3QgY2xhc3NQcmVmaXggPSAnb2MtY29tbW9uLWxheW91dHMnO1xuXG5jb25zdCBCYWNrQnV0dG9uID0gUHJpbWl0aXZlLkJvcmRlcmxlc3NCdXR0b24uZXh0ZW5kYFxuICBoZWlnaHQ6ICR7dGhlbWUuaGVhZGVyLmJ1dHRvbi5oZWlnaHR9O1xuICB3aWR0aDogJHt0aGVtZS5oZWFkZXIuYnV0dG9uLmhlaWdodH07XG4gIGZvbnQtc2l6ZTogMTZweDtcbmA7XG5cbmNsYXNzIEhlYWRlck5hdmlnYXRpb24gZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgZ2V0UmlnaHRDb250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgZHJvcGRvd24gfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCFkcm9wZG93bi5tZW51SXRlbXMubGVuZ3RoKSByZXR1cm4gbnVsbDtcblxuICAgIHJldHVybiAoXG4gICAgICA8RHJvcGRvd25NZW51XG4gICAgICAgIGlkPXtgJHtjbGFzc1ByZWZpeH1fbmF2aWdhdGlvbi1oZWFkZXItbWVudWB9XG4gICAgICAgIHsuLi5kcm9wZG93bn1cbiAgICAgIC8+XG4gICAgKTtcbiAgfTtcblxuICByZW5kZXJMZWZ0Q29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCB7IG9uQmFja0NsaWNrLCB0aXRsZSB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICB7dHlwZW9mIG9uQmFja0NsaWNrID09PSAnZnVuY3Rpb24nICYmXG4gICAgICAgIDxCYWNrQnV0dG9uIG9uQ2xpY2s9e29uQmFja0NsaWNrfT48SWNvbiB0eXBlPVwiaW5kaWNhdG9yXCIgbmFtZT1cImFycm93TGVmdFwiIC8+PC9CYWNrQnV0dG9uPn1cbiAgICAgICAge3RpdGxlICYmIDxQcmltaXRpdmUuVGl0bGU+e3RpdGxlfTwvUHJpbWl0aXZlLlRpdGxlPn1cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfTtcblxuICByZW5kZXJDZW50ZXJDb250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcGFnaW5nIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICghcGFnaW5nLml0ZW1JZHMubGVuZ3RoIHx8ICFwYWdpbmcuaXRlbUlkcy5zaXplKSByZXR1cm4gbnVsbDtcblxuICAgIHJldHVybiAoXG4gICAgICA8TGlzdEl0ZW1zXG4gICAgICAgIGlkPXtgJHtjbGFzc1ByZWZpeH1fbmF2aWdhdGlvbi1oZWFkZXItaXRlbXNgfVxuICAgICAgICB7Li4ucGFnaW5nfVxuICAgICAgLz5cbiAgICApO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEhlYWRlci5CYXNpY1xuICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fV9uYXZpZ2F0aW9uLWhlYWRlcmB9XG4gICAgICAgIGxlZnQ9e3RoaXMucmVuZGVyTGVmdENvbnRlbnQoKX1cbiAgICAgICAgY2VudGVyPXt0aGlzLnJlbmRlckNlbnRlckNvbnRlbnQoKX1cbiAgICAgICAgcmlnaHQ9e3RoaXMuZ2V0UmlnaHRDb250ZW50KCl9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cblxuSGVhZGVyTmF2aWdhdGlvbi5wcm9wVHlwZXMgPSB7XG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvbkJhY2tDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIHBhZ2luZzogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBpdGVtSWRzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgXSkpLFxuICAgICAgUHJvcFR5cGVzLnNoYXBlKHt9KSxcbiAgICBdKSxcbiAgfSksXG4gIGRyb3Bkb3duOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIG1lbnVJdGVtczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIFByb3BUeXBlcy5zaGFwZSh7fSksXG4gICAgXSkpLFxuICB9KSxcbn07XG5cbkhlYWRlck5hdmlnYXRpb24uZGVmYXVsdFByb3BzID0ge1xuICB0aXRsZTogbnVsbCxcbiAgb25CYWNrQ2xpY2s6IG51bGwsXG4gIGRyb3Bkb3duOiB7XG4gICAgbWVudUl0ZW1zOiBbXSxcbiAgfSxcbiAgcGFnaW5nOiB7XG4gICAgaXRlbUlkczogW10sXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJOYXZpZ2F0aW9uO1xuIl19