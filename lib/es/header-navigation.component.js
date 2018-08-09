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
      var _this$props = _this.props,
          dropdown = _this$props.dropdown,
          id = _this$props.id;

      if (!dropdown.menuItems.length) return null;

      return React.createElement(DropdownMenu, _extends({
        id: id + '-menu'
      }, dropdown));
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
        id = _props.id;

    return React.createElement(Header.Basic, {
      className: classPrefix + '_navigation-header ' + className,
      id: id,
      left: this.renderLeftContent(),
      center: this.renderCenterContent(),
      right: this.getRightContent()
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
  }
};

export default HeaderNavigation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWFkZXItbmF2aWdhdGlvbi5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiTGlzdEl0ZW1zIiwiRHJvcGRvd25NZW51IiwiSWNvbiIsIkhlYWRlciIsIlByaW1pdGl2ZSIsInRoZW1lIiwiY2xhc3NQcmVmaXgiLCJCYWNrQnV0dG9uIiwiQm9yZGVybGVzc0J1dHRvbiIsImV4dGVuZCIsImhlYWRlciIsImJ1dHRvbiIsImhlaWdodCIsIkhlYWRlck5hdmlnYXRpb24iLCJnZXRSaWdodENvbnRlbnQiLCJwcm9wcyIsImRyb3Bkb3duIiwiaWQiLCJtZW51SXRlbXMiLCJsZW5ndGgiLCJyZW5kZXJMZWZ0Q29udGVudCIsIm9uQmFja0NsaWNrIiwidGl0bGUiLCJyZW5kZXJDZW50ZXJDb250ZW50IiwicGFnaW5nIiwiaXRlbUlkcyIsInNpemUiLCJyZW5kZXIiLCJjbGFzc05hbWUiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLFNBQVQsUUFBMEIsOEJBQTFCO0FBQ0EsU0FBU0MsWUFBVCxRQUE2Qiw0QkFBN0I7QUFDQSxTQUFTQyxJQUFULFFBQXFCLHlCQUFyQjtBQUNBLFNBQVNDLE1BQVQsRUFBaUJDLFNBQWpCLEVBQTRCQyxLQUE1QixRQUF5QyxrQ0FBekM7O0FBRUEsSUFBTUMsY0FBYyxtQkFBcEI7O0FBRUEsSUFBTUMsYUFBYUgsVUFBVUksZ0JBQVYsQ0FBMkJDLE1BQXhDLGtCQUNNSixNQUFNSyxNQUFOLENBQWFDLE1BQWIsQ0FBb0JDLE1BRDFCLEVBRUtQLE1BQU1LLE1BQU4sQ0FBYUMsTUFBYixDQUFvQkMsTUFGekIsQ0FBTjs7SUFNTUMsZ0I7Ozs7Ozs7Ozs7OztnS0FDSkMsZSxHQUFrQixZQUFNO0FBQUEsd0JBQ0csTUFBS0MsS0FEUjtBQUFBLFVBQ2RDLFFBRGMsZUFDZEEsUUFEYztBQUFBLFVBQ0pDLEVBREksZUFDSkEsRUFESTs7QUFFdEIsVUFBSSxDQUFDRCxTQUFTRSxTQUFULENBQW1CQyxNQUF4QixFQUFnQyxPQUFPLElBQVA7O0FBRWhDLGFBQ0Usb0JBQUMsWUFBRDtBQUNFLFlBQU9GLEVBQVA7QUFERixTQUVNRCxRQUZOLEVBREY7QUFNRCxLLFFBRURJLGlCLEdBQW9CLFlBQU07QUFBQSx5QkFDVyxNQUFLTCxLQURoQjtBQUFBLFVBQ2hCTSxXQURnQixnQkFDaEJBLFdBRGdCO0FBQUEsVUFDSEMsS0FERyxnQkFDSEEsS0FERztBQUFBLFVBQ0lMLEVBREosZ0JBQ0lBLEVBREo7OztBQUd4QixhQUNFO0FBQUMsYUFBRCxDQUFPLFFBQVA7QUFBQTtBQUNHLGVBQU9JLFdBQVAsS0FBdUIsVUFBdkIsSUFDRDtBQUFDLG9CQUFEO0FBQUEsWUFBWSxJQUFPSixFQUFQLGlCQUFaLEVBQXFDLFNBQVNJLFdBQTlDO0FBQ0UsOEJBQUMsSUFBRCxJQUFNLE1BQUssV0FBWCxFQUF1QixNQUFLLFdBQTVCO0FBREYsU0FGRjtBQUtHQyxpQkFBUztBQUFDLG1CQUFELENBQVcsS0FBWDtBQUFBLFlBQWlCLElBQU9MLEVBQVAsV0FBakI7QUFBcUNLO0FBQXJDO0FBTFosT0FERjtBQVNELEssUUFFREMsbUIsR0FBc0IsWUFBTTtBQUFBLHlCQUNILE1BQUtSLEtBREY7QUFBQSxVQUNsQlMsTUFEa0IsZ0JBQ2xCQSxNQURrQjtBQUFBLFVBQ1ZQLEVBRFUsZ0JBQ1ZBLEVBRFU7O0FBRzFCOztBQUNBLFVBQUksQ0FBQ08sT0FBT0MsT0FBUCxDQUFlTixNQUFoQixJQUEwQixDQUFDSyxPQUFPQyxPQUFQLENBQWVDLElBQTlDLEVBQW9ELE9BQU8sSUFBUDtBQUNwRCxhQUFPLG9CQUFDLFNBQUQsYUFBVyxJQUFPVCxFQUFQLGdCQUFYLElBQXVDTyxNQUF2QyxFQUFQO0FBQ0QsSzs7OzZCQUVERyxNLHFCQUFTO0FBQUEsaUJBQ21CLEtBQUtaLEtBRHhCO0FBQUEsUUFDQ2EsU0FERCxVQUNDQSxTQUREO0FBQUEsUUFDWVgsRUFEWixVQUNZQSxFQURaOztBQUVQLFdBQ0Usb0JBQUMsTUFBRCxDQUFRLEtBQVI7QUFDRSxpQkFBY1gsV0FBZCwyQkFBK0NzQixTQURqRDtBQUVFLFVBQUlYLEVBRk47QUFHRSxZQUFNLEtBQUtHLGlCQUFMLEVBSFI7QUFJRSxjQUFRLEtBQUtHLG1CQUFMLEVBSlY7QUFLRSxhQUFPLEtBQUtULGVBQUw7QUFMVCxNQURGO0FBU0QsRzs7O0VBOUM0QmhCLE1BQU0rQixhOztBQXdFckNoQixpQkFBaUJpQixZQUFqQixHQUFnQztBQUM5QlIsU0FBTyxJQUR1QjtBQUU5Qk0sYUFBVyxJQUZtQjtBQUc5QlAsZUFBYSxJQUhpQjtBQUk5QkwsWUFBVTtBQUNSRSxlQUFXO0FBREgsR0FKb0I7QUFPOUJNLFVBQVE7QUFDTkMsYUFBUztBQURIO0FBUHNCLENBQWhDOztBQVlBLGVBQWVaLGdCQUFmIiwiZmlsZSI6ImhlYWRlci1uYXZpZ2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgTGlzdEl0ZW1zIH0gZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtbGlzdC1pdGVtcyc7XG5pbXBvcnQgeyBEcm9wZG93bk1lbnUgfSBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1kcm9wZG93bic7XG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtaWNvbnMnO1xuaW1wb3J0IHsgSGVhZGVyLCBQcmltaXRpdmUsIHRoZW1lIH0gZnJvbSAnQG9wdXNjYXBpdGEvb2MtY20tY29tbW9uLWxheW91dHMnO1xuXG5jb25zdCBjbGFzc1ByZWZpeCA9ICdvYy1jb21tb24tbGF5b3V0cyc7XG5cbmNvbnN0IEJhY2tCdXR0b24gPSBQcmltaXRpdmUuQm9yZGVybGVzc0J1dHRvbi5leHRlbmRgXG4gIGhlaWdodDogJHt0aGVtZS5oZWFkZXIuYnV0dG9uLmhlaWdodH07XG4gIHdpZHRoOiAke3RoZW1lLmhlYWRlci5idXR0b24uaGVpZ2h0fTtcbiAgZm9udC1zaXplOiAxNnB4O1xuYDtcblxuY2xhc3MgSGVhZGVyTmF2aWdhdGlvbiBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBnZXRSaWdodENvbnRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBkcm9wZG93biwgaWQgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCFkcm9wZG93bi5tZW51SXRlbXMubGVuZ3RoKSByZXR1cm4gbnVsbDtcblxuICAgIHJldHVybiAoXG4gICAgICA8RHJvcGRvd25NZW51XG4gICAgICAgIGlkPXtgJHtpZH0tbWVudWB9XG4gICAgICAgIHsuLi5kcm9wZG93bn1cbiAgICAgIC8+XG4gICAgKTtcbiAgfTtcblxuICByZW5kZXJMZWZ0Q29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCB7IG9uQmFja0NsaWNrLCB0aXRsZSwgaWQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICB7dHlwZW9mIG9uQmFja0NsaWNrID09PSAnZnVuY3Rpb24nICYmXG4gICAgICAgIDxCYWNrQnV0dG9uIGlkPXtgJHtpZH0tYmFjay1idXR0b25gfSBvbkNsaWNrPXtvbkJhY2tDbGlja30+XG4gICAgICAgICAgPEljb24gdHlwZT1cImluZGljYXRvclwiIG5hbWU9XCJhcnJvd0xlZnRcIiAvPlxuICAgICAgICA8L0JhY2tCdXR0b24+fVxuICAgICAgICB7dGl0bGUgJiYgPFByaW1pdGl2ZS5UaXRsZSBpZD17YCR7aWR9LXRpdGxlYH0+e3RpdGxlfTwvUHJpbWl0aXZlLlRpdGxlPn1cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfTtcblxuICByZW5kZXJDZW50ZXJDb250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcGFnaW5nLCBpZCB9ID0gdGhpcy5wcm9wcztcblxuICAgIC8vIElmIHRoZXJlJ3MgYW4gYXJyYXkgb2YgMSBvciBtb3JlIGl0ZW1zLCBPUiBJbW11dGFibGVKcyBMaXN0IHdpdGggMSBvciBtb3JlIGl0ZW1zXG4gICAgaWYgKCFwYWdpbmcuaXRlbUlkcy5sZW5ndGggJiYgIXBhZ2luZy5pdGVtSWRzLnNpemUpIHJldHVybiBudWxsO1xuICAgIHJldHVybiA8TGlzdEl0ZW1zIGlkPXtgJHtpZH0tcGFnaW5hdGlvbmB9IHsuLi5wYWdpbmd9IC8+O1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgaWQgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxIZWFkZXIuQmFzaWNcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH1fbmF2aWdhdGlvbi1oZWFkZXIgJHtjbGFzc05hbWV9YH1cbiAgICAgICAgaWQ9e2lkfVxuICAgICAgICBsZWZ0PXt0aGlzLnJlbmRlckxlZnRDb250ZW50KCl9XG4gICAgICAgIGNlbnRlcj17dGhpcy5yZW5kZXJDZW50ZXJDb250ZW50KCl9XG4gICAgICAgIHJpZ2h0PXt0aGlzLmdldFJpZ2h0Q29udGVudCgpfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG5cbkhlYWRlck5hdmlnYXRpb24ucHJvcFR5cGVzID0ge1xuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvbkJhY2tDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIHBhZ2luZzogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBpdGVtSWRzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgXSkpLFxuICAgICAgUHJvcFR5cGVzLnNoYXBlKHt9KSxcbiAgICBdKSxcbiAgfSksXG4gIGRyb3Bkb3duOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIG1lbnVJdGVtczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIFByb3BUeXBlcy5zaGFwZSh7fSksXG4gICAgXSkpLFxuICB9KSxcbn07XG5cbkhlYWRlck5hdmlnYXRpb24uZGVmYXVsdFByb3BzID0ge1xuICB0aXRsZTogbnVsbCxcbiAgY2xhc3NOYW1lOiBudWxsLFxuICBvbkJhY2tDbGljazogbnVsbCxcbiAgZHJvcGRvd246IHtcbiAgICBtZW51SXRlbXM6IFtdLFxuICB9LFxuICBwYWdpbmc6IHtcbiAgICBpdGVtSWRzOiBbXSxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlck5hdmlnYXRpb247XG4iXX0=