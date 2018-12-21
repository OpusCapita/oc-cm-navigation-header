var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  height: ', ';\n  width: ', ';\n  margin-right: ', ';\n  svg {\n    height: ', ';\n    width: ', ';\n  }\n'], ['\n  height: ', ';\n  width: ', ';\n  margin-right: ', ';\n  svg {\n    height: ', ';\n    width: ', ';\n  }\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ListItems from '@opuscapita/react-list-items';
import { DropdownMenu } from '@opuscapita/react-dropdown';
import { Icon } from '@opuscapita/react-icons';
import { Header, Primitive } from '@opuscapita/oc-cm-common-layouts';

var classPrefix = 'oc-common-layouts';

var BackButton = styled(Primitive.BorderlessButton)(_templateObject, function (props) {
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
          id = _this$props.id,
          rightContent = _this$props.rightContent;


      return React.createElement(
        React.Fragment,
        null,
        rightContent,
        dropdown.menuItems.length ? React.createElement(DropdownMenu, _extends({
          id: id + '-menu'
        }, dropdown)) : null
      );
    }, _this.renderLeftContent = function () {
      var _this$props2 = _this.props,
          onBackClick = _this$props2.onBackClick,
          title = _this$props2.title,
          id = _this$props2.id;


      return React.createElement(
        React.Fragment,
        null,
        typeof onBackClick === 'function' && React.createElement(
          BackButton,
          { id: id + '-back-button', onClick: onBackClick },
          React.createElement(Icon, { type: 'indicator', name: 'arrowLeft' })
        ),
        title && React.createElement(
          Primitive.Title,
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
      return React.createElement(ListItems, _extends({ id: id + '-pagination' }, paging));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  HeaderNavigation.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        id = _props.id,
        sideSectionBasis = _props.sideSectionBasis;

    return React.createElement(Header.Basic, {
      className: classPrefix + '_navigation-header ' + className,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWFkZXItbmF2aWdhdGlvbi5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwic3R5bGVkIiwiTGlzdEl0ZW1zIiwiRHJvcGRvd25NZW51IiwiSWNvbiIsIkhlYWRlciIsIlByaW1pdGl2ZSIsImNsYXNzUHJlZml4IiwiQmFja0J1dHRvbiIsIkJvcmRlcmxlc3NCdXR0b24iLCJwcm9wcyIsInRoZW1lIiwiaGVhZGVyIiwiYnV0dG9uIiwiaGVpZ2h0IiwiZ3V0dGVyV2lkdGgiLCJIZWFkZXJOYXZpZ2F0aW9uIiwiZ2V0UmlnaHRDb250ZW50IiwiZHJvcGRvd24iLCJpZCIsInJpZ2h0Q29udGVudCIsIm1lbnVJdGVtcyIsImxlbmd0aCIsInJlbmRlckxlZnRDb250ZW50Iiwib25CYWNrQ2xpY2siLCJ0aXRsZSIsInJlbmRlckNlbnRlckNvbnRlbnQiLCJwYWdpbmciLCJpdGVtSWRzIiwic2l6ZSIsInJlbmRlciIsImNsYXNzTmFtZSIsInNpZGVTZWN0aW9uQmFzaXMiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsbUJBQW5CO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQiw4QkFBdEI7QUFDQSxTQUFTQyxZQUFULFFBQTZCLDRCQUE3QjtBQUNBLFNBQVNDLElBQVQsUUFBcUIseUJBQXJCO0FBQ0EsU0FBU0MsTUFBVCxFQUFpQkMsU0FBakIsUUFBa0Msa0NBQWxDOztBQUVBLElBQU1DLGNBQWMsbUJBQXBCOztBQUVBLElBQU1DLGFBQWFQLE9BQU9LLFVBQVVHLGdCQUFqQixDQUFiLGtCQUNNO0FBQUEsU0FBU0MsTUFBTUMsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxNQUFuQixDQUEwQkMsTUFBbkM7QUFBQSxDQUROLEVBRUs7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aEIsZ0JBQWYiLCJmaWxlIjoiaGVhZGVyLW5hdmlnYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBMaXN0SXRlbXMgZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtbGlzdC1pdGVtcyc7XG5pbXBvcnQgeyBEcm9wZG93bk1lbnUgfSBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1kcm9wZG93bic7XG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtaWNvbnMnO1xuaW1wb3J0IHsgSGVhZGVyLCBQcmltaXRpdmUgfSBmcm9tICdAb3B1c2NhcGl0YS9vYy1jbS1jb21tb24tbGF5b3V0cyc7XG5cbmNvbnN0IGNsYXNzUHJlZml4ID0gJ29jLWNvbW1vbi1sYXlvdXRzJztcblxuY29uc3QgQmFja0J1dHRvbiA9IHN0eWxlZChQcmltaXRpdmUuQm9yZGVybGVzc0J1dHRvbilgXG4gIGhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5oZWFkZXIuYnV0dG9uLmhlaWdodH07XG4gIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhlYWRlci5idXR0b24uaGVpZ2h0fTtcbiAgbWFyZ2luLXJpZ2h0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmd1dHRlcldpZHRofTtcbiAgc3ZnIHtcbiAgICBoZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaGVhZGVyLmJ1dHRvbi5oZWlnaHR9O1xuICAgIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhlYWRlci5idXR0b24uaGVpZ2h0fTtcbiAgfVxuYDtcblxuY2xhc3MgSGVhZGVyTmF2aWdhdGlvbiBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBnZXRSaWdodENvbnRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBkcm9wZG93biwgaWQsIHJpZ2h0Q29udGVudCB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIHtyaWdodENvbnRlbnR9XG4gICAgICAgIHtkcm9wZG93bi5tZW51SXRlbXMubGVuZ3RoID9cbiAgICAgICAgICA8RHJvcGRvd25NZW51XG4gICAgICAgICAgICBpZD17YCR7aWR9LW1lbnVgfVxuICAgICAgICAgICAgey4uLmRyb3Bkb3dufVxuICAgICAgICAgIC8+XG4gICAgICAgIDogbnVsbH1cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfTtcblxuICByZW5kZXJMZWZ0Q29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCB7IG9uQmFja0NsaWNrLCB0aXRsZSwgaWQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICB7dHlwZW9mIG9uQmFja0NsaWNrID09PSAnZnVuY3Rpb24nICYmXG4gICAgICAgIDxCYWNrQnV0dG9uIGlkPXtgJHtpZH0tYmFjay1idXR0b25gfSBvbkNsaWNrPXtvbkJhY2tDbGlja30+XG4gICAgICAgICAgPEljb24gdHlwZT1cImluZGljYXRvclwiIG5hbWU9XCJhcnJvd0xlZnRcIiAvPlxuICAgICAgICA8L0JhY2tCdXR0b24+fVxuICAgICAgICB7dGl0bGUgJiYgPFByaW1pdGl2ZS5UaXRsZSBpZD17YCR7aWR9LXRpdGxlYH0+e3RpdGxlfTwvUHJpbWl0aXZlLlRpdGxlPn1cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfTtcblxuICByZW5kZXJDZW50ZXJDb250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcGFnaW5nLCBpZCB9ID0gdGhpcy5wcm9wcztcblxuICAgIC8vIElmIHRoZXJlJ3MgYW4gYXJyYXkgb2YgMSBvciBtb3JlIGl0ZW1zLCBPUiBJbW11dGFibGVKcyBMaXN0IHdpdGggMSBvciBtb3JlIGl0ZW1zXG4gICAgaWYgKCFwYWdpbmcuaXRlbUlkcy5sZW5ndGggJiYgIXBhZ2luZy5pdGVtSWRzLnNpemUpIHJldHVybiBudWxsO1xuICAgIHJldHVybiA8TGlzdEl0ZW1zIGlkPXtgJHtpZH0tcGFnaW5hdGlvbmB9IHsuLi5wYWdpbmd9IC8+O1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgaWQsIHNpZGVTZWN0aW9uQmFzaXMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxIZWFkZXIuQmFzaWNcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH1fbmF2aWdhdGlvbi1oZWFkZXIgJHtjbGFzc05hbWV9YH1cbiAgICAgICAgaWQ9e2lkfVxuICAgICAgICBsZWZ0PXt0aGlzLnJlbmRlckxlZnRDb250ZW50KCl9XG4gICAgICAgIGNlbnRlcj17dGhpcy5yZW5kZXJDZW50ZXJDb250ZW50KCl9XG4gICAgICAgIHJpZ2h0PXt0aGlzLmdldFJpZ2h0Q29udGVudCgpfVxuICAgICAgICBzaWRlU2VjdGlvbkJhc2lzPXtzaWRlU2VjdGlvbkJhc2lzfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG5cbkhlYWRlck5hdmlnYXRpb24ucHJvcFR5cGVzID0ge1xuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvbkJhY2tDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIHJpZ2h0Q29udGVudDogUHJvcFR5cGVzLm5vZGUsXG4gIHNpZGVTZWN0aW9uQmFzaXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgcGFnaW5nOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGl0ZW1JZHM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBdKSksXG4gICAgICBQcm9wVHlwZXMuc2hhcGUoe30pLFxuICAgIF0pLFxuICB9KSxcbiAgZHJvcGRvd246IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgbWVudUl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgUHJvcFR5cGVzLnNoYXBlKHt9KSxcbiAgICBdKSksXG4gIH0pLFxufTtcblxuSGVhZGVyTmF2aWdhdGlvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIHRpdGxlOiBudWxsLFxuICBjbGFzc05hbWU6IG51bGwsXG4gIG9uQmFja0NsaWNrOiBudWxsLFxuICBkcm9wZG93bjoge1xuICAgIG1lbnVJdGVtczogW10sXG4gIH0sXG4gIHBhZ2luZzoge1xuICAgIGl0ZW1JZHM6IFtdLFxuICB9LFxuICByaWdodENvbnRlbnQ6IG51bGwsXG4gIHNpZGVTZWN0aW9uQmFzaXM6ICcyMDBweCcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJOYXZpZ2F0aW9uO1xuIl19