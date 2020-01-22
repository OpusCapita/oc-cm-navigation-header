function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  height: ", ";\n  width: ", ";\n  margin-right: ", ";\n  svg {\n    height: ", ";\n    width: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ListItems from '@opuscapita/react-list-items';
import { DropdownMenu } from '@opuscapita/react-dropdown';
import { Icon } from '@opuscapita/react-icons';
import { Header, Primitive } from '@opuscapita/oc-cm-common-layouts';
var classPrefix = 'oc-common-layouts';
var BackButton = styled(Primitive.BorderlessButton)(_templateObject(), function (props) {
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

var HeaderNavigation =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(HeaderNavigation, _React$PureComponent);

  function HeaderNavigation() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "getRightContent", function () {
      var _this$props = _this.props,
          dropdown = _this$props.dropdown,
          id = _this$props.id,
          rightContent = _this$props.rightContent;
      return React.createElement(React.Fragment, null, rightContent, dropdown.menuItems.length ? React.createElement(DropdownMenu, _extends({
        id: id + "-menu"
      }, dropdown)) : null);
    });

    _defineProperty(_assertThisInitialized(_this), "renderLeftContent", function () {
      var _this$props2 = _this.props,
          onBackClick = _this$props2.onBackClick,
          title = _this$props2.title,
          id = _this$props2.id;
      return React.createElement(React.Fragment, null, typeof onBackClick === 'function' && React.createElement(BackButton, {
        id: id + "-back-button",
        onClick: onBackClick
      }, React.createElement(Icon, {
        type: "indicator",
        name: "arrowLeft"
      })), title && React.createElement(Primitive.Title, {
        id: id + "-title"
      }, title));
    });

    _defineProperty(_assertThisInitialized(_this), "renderCenterContent", function () {
      var _this$props3 = _this.props,
          paging = _this$props3.paging,
          id = _this$props3.id; // If there's an array of 1 or more items, OR ImmutableJs List with 1 or more items

      if (!paging.itemIds.length && !paging.itemIds.size) return null;
      return React.createElement(ListItems, _extends({
        id: id + "-pagination"
      }, paging));
    });

    return _this;
  }

  var _proto = HeaderNavigation.prototype;

  _proto.render = function render() {
    var _this$props4 = this.props,
        className = _this$props4.className,
        id = _this$props4.id,
        sideSectionBasis = _this$props4.sideSectionBasis;
    return React.createElement(Header.Basic, {
      className: classPrefix + "_navigation-header " + className,
      id: id,
      left: this.renderLeftContent(),
      center: this.renderCenterContent(),
      right: this.getRightContent(),
      sideSectionBasis: sideSectionBasis
    });
  };

  return HeaderNavigation;
}(React.PureComponent);

HeaderNavigation.defaultProps = {
  title: null,
  className: null,
  onBackClick: null,
  dropdown: {
    menuItems: []
  },
  paging: {
    itemIds: []
  },
  rightContent: null,
  sideSectionBasis: '200px'
};
export default HeaderNavigation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWFkZXItbmF2aWdhdGlvbi5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwic3R5bGVkIiwiTGlzdEl0ZW1zIiwiRHJvcGRvd25NZW51IiwiSWNvbiIsIkhlYWRlciIsIlByaW1pdGl2ZSIsImNsYXNzUHJlZml4IiwiQmFja0J1dHRvbiIsIkJvcmRlcmxlc3NCdXR0b24iLCJwcm9wcyIsInRoZW1lIiwiaGVhZGVyIiwiYnV0dG9uIiwiaGVpZ2h0IiwiZ3V0dGVyV2lkdGgiLCJIZWFkZXJOYXZpZ2F0aW9uIiwiZHJvcGRvd24iLCJpZCIsInJpZ2h0Q29udGVudCIsIm1lbnVJdGVtcyIsImxlbmd0aCIsIm9uQmFja0NsaWNrIiwidGl0bGUiLCJwYWdpbmciLCJpdGVtSWRzIiwic2l6ZSIsInJlbmRlciIsImNsYXNzTmFtZSIsInNpZGVTZWN0aW9uQmFzaXMiLCJyZW5kZXJMZWZ0Q29udGVudCIsInJlbmRlckNlbnRlckNvbnRlbnQiLCJnZXRSaWdodENvbnRlbnQiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixtQkFBbkI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLDhCQUF0QjtBQUNBLFNBQVNDLFlBQVQsUUFBNkIsNEJBQTdCO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQix5QkFBckI7QUFDQSxTQUFTQyxNQUFULEVBQWlCQyxTQUFqQixRQUFrQyxrQ0FBbEM7QUFFQSxJQUFNQyxXQUFXLEdBQUcsbUJBQXBCO0FBRUEsSUFBTUMsVUFBVSxHQUFHUCxNQUFNLENBQUNLLFNBQVMsQ0FBQ0csZ0JBQVgsQ0FBVCxvQkFDSixVQUFDQyxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVos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QixHQUFnQztBQUM5QlgsRUFBQUEsS0FBSyxFQUFFLElBRHVCO0FBRTlCSyxFQUFBQSxTQUFTLEVBQUUsSUFGbUI7QUFHOUJOLEVBQUFBLFdBQVcsRUFBRSxJQUhpQjtBQUk5QkwsRUFBQUEsUUFBUSxFQUFFO0FBQ1JHLElBQUFBLFNBQVMsRUFBRTtBQURILEdBSm9CO0FBTzlCSSxFQUFBQSxNQUFNLEVBQUU7QUFDTkMsSUFBQUEsT0FBTyxFQUFFO0FBREgsR0FQc0I7QUFVOUJOLEVBQUFBLFlBQVksRUFBRSxJQVZnQjtBQVc5QlUsRUFBQUEsZ0JBQWdCLEVBQUU7QUFYWSxDQUFoQztBQWNBLGVBQWViLGdCQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBMaXN0SXRlbXMgZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtbGlzdC1pdGVtcyc7XG5pbXBvcnQgeyBEcm9wZG93bk1lbnUgfSBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1kcm9wZG93bic7XG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtaWNvbnMnO1xuaW1wb3J0IHsgSGVhZGVyLCBQcmltaXRpdmUgfSBmcm9tICdAb3B1c2NhcGl0YS9vYy1jbS1jb21tb24tbGF5b3V0cyc7XG5cbmNvbnN0IGNsYXNzUHJlZml4ID0gJ29jLWNvbW1vbi1sYXlvdXRzJztcblxuY29uc3QgQmFja0J1dHRvbiA9IHN0eWxlZChQcmltaXRpdmUuQm9yZGVybGVzc0J1dHRvbilgXG4gIGhlaWdodDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmhlYWRlci5idXR0b24uaGVpZ2h0fTtcbiAgd2lkdGg6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5oZWFkZXIuYnV0dG9uLmhlaWdodH07XG4gIG1hcmdpbi1yaWdodDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmd1dHRlcldpZHRofTtcbiAgc3ZnIHtcbiAgICBoZWlnaHQ6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5oZWFkZXIuYnV0dG9uLmhlaWdodH07XG4gICAgd2lkdGg6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5oZWFkZXIuYnV0dG9uLmhlaWdodH07XG4gIH1cbmA7XG5cbmNsYXNzIEhlYWRlck5hdmlnYXRpb24gZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgZ2V0UmlnaHRDb250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgZHJvcGRvd24sIGlkLCByaWdodENvbnRlbnQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAge3JpZ2h0Q29udGVudH1cbiAgICAgICAge2Ryb3Bkb3duLm1lbnVJdGVtcy5sZW5ndGhcbiAgICAgICAgICA/IChcbiAgICAgICAgICAgIDxEcm9wZG93bk1lbnVcbiAgICAgICAgICAgICAgaWQ9e2Ake2lkfS1tZW51YH1cbiAgICAgICAgICAgICAgey4uLmRyb3Bkb3dufVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvPlxuICAgICk7XG4gIH07XG5cbiAgcmVuZGVyTGVmdENvbnRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBvbkJhY2tDbGljaywgdGl0bGUsIGlkIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIHt0eXBlb2Ygb25CYWNrQ2xpY2sgPT09ICdmdW5jdGlvbidcbiAgICAgICAgJiYgKFxuICAgICAgICAgIDxCYWNrQnV0dG9uIGlkPXtgJHtpZH0tYmFjay1idXR0b25gfSBvbkNsaWNrPXtvbkJhY2tDbGlja30+XG4gICAgICAgICAgICA8SWNvbiB0eXBlPVwiaW5kaWNhdG9yXCIgbmFtZT1cImFycm93TGVmdFwiIC8+XG4gICAgICAgICAgPC9CYWNrQnV0dG9uPlxuICAgICAgICApfVxuICAgICAgICB7dGl0bGVcbiAgICAgICAgJiYgKFxuICAgICAgICAgIDxQcmltaXRpdmUuVGl0bGUgaWQ9e2Ake2lkfS10aXRsZWB9PlxuICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgIDwvUHJpbWl0aXZlLlRpdGxlPlxuICAgICAgICApfVxuICAgICAgPC8+XG4gICAgKTtcbiAgfTtcblxuICByZW5kZXJDZW50ZXJDb250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcGFnaW5nLCBpZCB9ID0gdGhpcy5wcm9wcztcblxuICAgIC8vIElmIHRoZXJlJ3MgYW4gYXJyYXkgb2YgMSBvciBtb3JlIGl0ZW1zLCBPUiBJbW11dGFibGVKcyBMaXN0IHdpdGggMSBvciBtb3JlIGl0ZW1zXG4gICAgaWYgKCFwYWdpbmcuaXRlbUlkcy5sZW5ndGggJiYgIXBhZ2luZy5pdGVtSWRzLnNpemUpIHJldHVybiBudWxsO1xuICAgIHJldHVybiA8TGlzdEl0ZW1zIGlkPXtgJHtpZH0tcGFnaW5hdGlvbmB9IHsuLi5wYWdpbmd9IC8+O1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgaWQsIHNpZGVTZWN0aW9uQmFzaXMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxIZWFkZXIuQmFzaWNcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH1fbmF2aWdhdGlvbi1oZWFkZXIgJHtjbGFzc05hbWV9YH1cbiAgICAgICAgaWQ9e2lkfVxuICAgICAgICBsZWZ0PXt0aGlzLnJlbmRlckxlZnRDb250ZW50KCl9XG4gICAgICAgIGNlbnRlcj17dGhpcy5yZW5kZXJDZW50ZXJDb250ZW50KCl9XG4gICAgICAgIHJpZ2h0PXt0aGlzLmdldFJpZ2h0Q29udGVudCgpfVxuICAgICAgICBzaWRlU2VjdGlvbkJhc2lzPXtzaWRlU2VjdGlvbkJhc2lzfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG5cbkhlYWRlck5hdmlnYXRpb24ucHJvcFR5cGVzID0ge1xuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvbkJhY2tDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIHJpZ2h0Q29udGVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm5vZGUsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgc2lkZVNlY3Rpb25CYXNpczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBwYWdpbmc6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgaXRlbUlkczogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIF0pKSxcbiAgICAgIFByb3BUeXBlcy5zaGFwZSh7fSksXG4gICAgXSksXG4gIH0pLFxuICBkcm9wZG93bjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBtZW51SXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBQcm9wVHlwZXMuc2hhcGUoe30pLFxuICAgIF0pKSxcbiAgfSksXG59O1xuXG5IZWFkZXJOYXZpZ2F0aW9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgdGl0bGU6IG51bGwsXG4gIGNsYXNzTmFtZTogbnVsbCxcbiAgb25CYWNrQ2xpY2s6IG51bGwsXG4gIGRyb3Bkb3duOiB7XG4gICAgbWVudUl0ZW1zOiBbXSxcbiAgfSxcbiAgcGFnaW5nOiB7XG4gICAgaXRlbUlkczogW10sXG4gIH0sXG4gIHJpZ2h0Q29udGVudDogbnVsbCxcbiAgc2lkZVNlY3Rpb25CYXNpczogJzIwMHB4Jyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlck5hdmlnYXRpb247XG4iXX0=