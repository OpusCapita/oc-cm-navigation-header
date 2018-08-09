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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWFkZXItbmF2aWdhdGlvbi5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiTGlzdEl0ZW1zIiwiRHJvcGRvd25NZW51IiwiSWNvbiIsIkhlYWRlciIsIlByaW1pdGl2ZSIsInRoZW1lIiwiY2xhc3NQcmVmaXgiLCJCYWNrQnV0dG9uIiwiQm9yZGVybGVzc0J1dHRvbiIsImV4dGVuZCIsImhlYWRlciIsImJ1dHRvbiIsImhlaWdodCIsIkhlYWRlck5hdmlnYXRpb24iLCJnZXRSaWdodENvbnRlbnQiLCJwcm9wcyIsImRyb3Bkb3duIiwiaWQiLCJtZW51SXRlbXMiLCJsZW5ndGgiLCJyZW5kZXJMZWZ0Q29udGVudCIsIm9uQmFja0NsaWNrIiwidGl0bGUiLCJyZW5kZXJDZW50ZXJDb250ZW50IiwicGFnaW5nIiwiaXRlbUlkcyIsInNpemUiLCJyZW5kZXIiLCJjbGFzc05hbWUiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLFNBQVQsUUFBMEIsOEJBQTFCO0FBQ0EsU0FBU0MsWUFBVCxRQUE2Qiw0QkFBN0I7QUFDQSxTQUFTQyxJQUFULFFBQXFCLHlCQUFyQjtBQUNBLFNBQVNDLE1BQVQsRUFBaUJDLFNBQWpCLEVBQTRCQyxLQUE1QixRQUF5QyxrQ0FBekM7QUFDQTs7QUFFQSxJQUFNQyxjQUFjLG1CQUFwQjs7QUFFQSxJQUFNQyxhQUFhSCxVQUFVSSxnQkFBVixDQUEyQkMsTUFBeEMsa0JBQ01KLE1BQU1LLE1BQU4sQ0FBYUMsTUFBYixDQUFvQkMsTUFEMUIsRUFFS1AsTUFBTUssTUFBTixDQUFhQyxNQUFiLENBQW9CQyxNQUZ6QixDQUFOOztJQU1NQyxnQjs7Ozs7Ozs7Ozs7O2dLQUNKQyxlLEdBQWtCLFlBQU07QUFBQSx3QkFDRyxNQUFLQyxLQURSO0FBQUEsVUFDZEMsUUFEYyxlQUNkQSxRQURjO0FBQUEsVUFDSkMsRUFESSxlQUNKQSxFQURJOztBQUV0QixVQUFJLENBQUNELFNBQVNFLFNBQVQsQ0FBbUJDLE1BQXhCLEVBQWdDLE9BQU8sSUFBUDs7QUFFaEMsYUFDRSxvQkFBQyxZQUFEO0FBQ0UsWUFBT0YsRUFBUDtBQURGLFNBRU1ELFFBRk4sRUFERjtBQU1ELEssUUFFREksaUIsR0FBb0IsWUFBTTtBQUFBLHlCQUNXLE1BQUtMLEtBRGhCO0FBQUEsVUFDaEJNLFdBRGdCLGdCQUNoQkEsV0FEZ0I7QUFBQSxVQUNIQyxLQURHLGdCQUNIQSxLQURHO0FBQUEsVUFDSUwsRUFESixnQkFDSUEsRUFESjs7O0FBR3hCLGFBQ0U7QUFBQyxhQUFELENBQU8sUUFBUDtBQUFBO0FBQ0csZUFBT0ksV0FBUCxLQUF1QixVQUF2QixJQUNEO0FBQUMsb0JBQUQ7QUFBQSxZQUFZLElBQU9KLEVBQVAsaUJBQVosRUFBcUMsU0FBU0ksV0FBOUM7QUFDRSw4QkFBQyxJQUFELElBQU0sTUFBSyxXQUFYLEVBQXVCLE1BQUssV0FBNUI7QUFERixTQUZGO0FBS0dDLGlCQUFTO0FBQUMsbUJBQUQsQ0FBVyxLQUFYO0FBQUEsWUFBaUIsSUFBT0wsRUFBUCxXQUFqQjtBQUFxQ0s7QUFBckM7QUFMWixPQURGO0FBU0QsSyxRQUVEQyxtQixHQUFzQixZQUFNO0FBQUEseUJBQ0gsTUFBS1IsS0FERjtBQUFBLFVBQ2xCUyxNQURrQixnQkFDbEJBLE1BRGtCO0FBQUEsVUFDVlAsRUFEVSxnQkFDVkEsRUFEVTs7QUFHMUI7O0FBQ0EsVUFBSSxDQUFDTyxPQUFPQyxPQUFQLENBQWVOLE1BQWhCLElBQTBCLENBQUNLLE9BQU9DLE9BQVAsQ0FBZUMsSUFBOUMsRUFBb0QsT0FBTyxJQUFQO0FBQ3BELGFBQU8sb0JBQUMsU0FBRCxhQUFXLElBQU9ULEVBQVAsZ0JBQVgsSUFBdUNPLE1BQXZDLEVBQVA7QUFDRCxLOzs7NkJBRURHLE0scUJBQVM7QUFBQSxpQkFDbUIsS0FBS1osS0FEeEI7QUFBQSxRQUNDYSxTQURELFVBQ0NBLFNBREQ7QUFBQSxRQUNZWCxFQURaLFVBQ1lBLEVBRFo7O0FBRVAsV0FDRSxvQkFBQyxNQUFELENBQVEsS0FBUjtBQUNFLGlCQUFjWCxXQUFkLDJCQUErQ3NCLFNBRGpEO0FBRUUsVUFBSVgsRUFGTjtBQUdFLFlBQU0sS0FBS0csaUJBQUwsRUFIUjtBQUlFLGNBQVEsS0FBS0csbUJBQUwsRUFKVjtBQUtFLGFBQU8sS0FBS1QsZUFBTDtBQUxULE1BREY7QUFTRCxHOzs7RUE5QzRCaEIsTUFBTStCLGE7O0FBd0VyQ2hCLGlCQUFpQmlCLFlBQWpCLEdBQWdDO0FBQzlCUixTQUFPLElBRHVCO0FBRTlCTSxhQUFXLElBRm1CO0FBRzlCUCxlQUFhLElBSGlCO0FBSTlCTCxZQUFVO0FBQ1JFLGVBQVc7QUFESCxHQUpvQjtBQU85Qk0sVUFBUTtBQUNOQyxhQUFTO0FBREg7QUFQc0IsQ0FBaEM7O0FBWUEsZUFBZVosZ0JBQWYiLCJmaWxlIjoiaGVhZGVyLW5hdmlnYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBMaXN0SXRlbXMgfSBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1saXN0LWl0ZW1zJztcbmltcG9ydCB7IERyb3Bkb3duTWVudSB9IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LWRyb3Bkb3duJztcbmltcG9ydCB7IEljb24gfSBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1pY29ucyc7XG5pbXBvcnQgeyBIZWFkZXIsIFByaW1pdGl2ZSwgdGhlbWUgfSBmcm9tICdAb3B1c2NhcGl0YS9vYy1jbS1jb21tb24tbGF5b3V0cyc7XG4vLyBBcHAgaW1wb3J0c1xuXG5jb25zdCBjbGFzc1ByZWZpeCA9ICdvYy1jb21tb24tbGF5b3V0cyc7XG5cbmNvbnN0IEJhY2tCdXR0b24gPSBQcmltaXRpdmUuQm9yZGVybGVzc0J1dHRvbi5leHRlbmRgXG4gIGhlaWdodDogJHt0aGVtZS5oZWFkZXIuYnV0dG9uLmhlaWdodH07XG4gIHdpZHRoOiAke3RoZW1lLmhlYWRlci5idXR0b24uaGVpZ2h0fTtcbiAgZm9udC1zaXplOiAxNnB4O1xuYDtcblxuY2xhc3MgSGVhZGVyTmF2aWdhdGlvbiBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBnZXRSaWdodENvbnRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBkcm9wZG93biwgaWQgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCFkcm9wZG93bi5tZW51SXRlbXMubGVuZ3RoKSByZXR1cm4gbnVsbDtcblxuICAgIHJldHVybiAoXG4gICAgICA8RHJvcGRvd25NZW51XG4gICAgICAgIGlkPXtgJHtpZH0tbWVudWB9XG4gICAgICAgIHsuLi5kcm9wZG93bn1cbiAgICAgIC8+XG4gICAgKTtcbiAgfTtcblxuICByZW5kZXJMZWZ0Q29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCB7IG9uQmFja0NsaWNrLCB0aXRsZSwgaWQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICB7dHlwZW9mIG9uQmFja0NsaWNrID09PSAnZnVuY3Rpb24nICYmXG4gICAgICAgIDxCYWNrQnV0dG9uIGlkPXtgJHtpZH0tYmFjay1idXR0b25gfSBvbkNsaWNrPXtvbkJhY2tDbGlja30+XG4gICAgICAgICAgPEljb24gdHlwZT1cImluZGljYXRvclwiIG5hbWU9XCJhcnJvd0xlZnRcIiAvPlxuICAgICAgICA8L0JhY2tCdXR0b24+fVxuICAgICAgICB7dGl0bGUgJiYgPFByaW1pdGl2ZS5UaXRsZSBpZD17YCR7aWR9LXRpdGxlYH0+e3RpdGxlfTwvUHJpbWl0aXZlLlRpdGxlPn1cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfTtcblxuICByZW5kZXJDZW50ZXJDb250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcGFnaW5nLCBpZCB9ID0gdGhpcy5wcm9wcztcblxuICAgIC8vIElmIHRoZXJlJ3MgYW4gYXJyYXkgb2YgMSBvciBtb3JlIGl0ZW1zLCBPUiBJbW11dGFibGVKcyBMaXN0IHdpdGggMSBvciBtb3JlIGl0ZW1zXG4gICAgaWYgKCFwYWdpbmcuaXRlbUlkcy5sZW5ndGggJiYgIXBhZ2luZy5pdGVtSWRzLnNpemUpIHJldHVybiBudWxsO1xuICAgIHJldHVybiA8TGlzdEl0ZW1zIGlkPXtgJHtpZH0tcGFnaW5hdGlvbmB9IHsuLi5wYWdpbmd9IC8+XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBpZCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPEhlYWRlci5CYXNpY1xuICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fV9uYXZpZ2F0aW9uLWhlYWRlciAke2NsYXNzTmFtZX1gfVxuICAgICAgICBpZD17aWR9XG4gICAgICAgIGxlZnQ9e3RoaXMucmVuZGVyTGVmdENvbnRlbnQoKX1cbiAgICAgICAgY2VudGVyPXt0aGlzLnJlbmRlckNlbnRlckNvbnRlbnQoKX1cbiAgICAgICAgcmlnaHQ9e3RoaXMuZ2V0UmlnaHRDb250ZW50KCl9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cblxuSGVhZGVyTmF2aWdhdGlvbi5wcm9wVHlwZXMgPSB7XG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uQmFja0NsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgcGFnaW5nOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGl0ZW1JZHM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBdKSksXG4gICAgICBQcm9wVHlwZXMuc2hhcGUoe30pLFxuICAgIF0pLFxuICB9KSxcbiAgZHJvcGRvd246IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgbWVudUl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgUHJvcFR5cGVzLnNoYXBlKHt9KSxcbiAgICBdKSksXG4gIH0pLFxufTtcblxuSGVhZGVyTmF2aWdhdGlvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIHRpdGxlOiBudWxsLFxuICBjbGFzc05hbWU6IG51bGwsXG4gIG9uQmFja0NsaWNrOiBudWxsLFxuICBkcm9wZG93bjoge1xuICAgIG1lbnVJdGVtczogW10sXG4gIH0sXG4gIHBhZ2luZzoge1xuICAgIGl0ZW1JZHM6IFtdLFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyTmF2aWdhdGlvbjtcbiJdfQ==