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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWFkZXItbmF2aWdhdGlvbi5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwic3R5bGVkIiwiTGlzdEl0ZW1zIiwiRHJvcGRvd25NZW51IiwiSWNvbiIsIkhlYWRlciIsIlByaW1pdGl2ZSIsImNsYXNzUHJlZml4IiwiQmFja0J1dHRvbiIsIkJvcmRlcmxlc3NCdXR0b24iLCJwcm9wcyIsInRoZW1lIiwiaGVhZGVyIiwiYnV0dG9uIiwiaGVpZ2h0IiwiZ3V0dGVyV2lkdGgiLCJIZWFkZXJOYXZpZ2F0aW9uIiwiZ2V0UmlnaHRDb250ZW50IiwiZHJvcGRvd24iLCJpZCIsIm1lbnVJdGVtcyIsImxlbmd0aCIsInJlbmRlckxlZnRDb250ZW50Iiwib25CYWNrQ2xpY2siLCJ0aXRsZSIsInJlbmRlckNlbnRlckNvbnRlbnQiLCJwYWdpbmciLCJpdGVtSWRzIiwic2l6ZSIsInJlbmRlciIsImNsYXNzTmFtZSIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixtQkFBbkI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLDhCQUF0QjtBQUNBLFNBQVNDLFlBQVQsUUFBNkIsNEJBQTdCO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQix5QkFBckI7QUFDQSxTQUFTQyxNQUFULEVBQWlCQyxTQUFqQixRQUFrQyxrQ0FBbEM7O0FBRUEsSUFBTUMsY0FBYyxtQkFBcEI7O0FBRUEsSUFBTUMsYUFBYVAsT0FBT0ssVUFBVUcsZ0JBQWpCLENBQWIsa0JBQ007QUFBQSxTQUFTQyxNQUFNQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLE1BQW5CLENBQTBCQyxNQUFuQztBQUFBLENBRE4sRUFFSztBQUFBLFNBQVNKLE1BQU1DLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsTUFBbkIsQ0FBMEJDLE1BQW5DO0FBQUEsQ0FGTCxFQUdZO0FBQUEsU0FBU0osTUFBTUMsS0FBTixDQUFZSSxXQUFyQjtBQUFBLENBSFosRUFLUTtBQUFBLFNBQVNMLE1BQU1DLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsTUFBbkIsQ0FBMEJDLE1BQW5DO0FBQUEsQ0FMUixFQU1PO0FBQUEsU0FBU0osTUFBTUMsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxNQUFuQixDQUEwQkMsTUFBbkM7QUFBQSxDQU5QLENBQU47O0lBVU1FLGdCOzs7Ozs7Ozs7Ozs7Z0tBQ0pDLGUsR0FBa0IsWUFBTTtBQUFBLHdCQUNHLE1BQUtQLEtBRFI7QUFBQSxVQUNkUSxRQURjLGVBQ2RBLFFBRGM7QUFBQSxVQUNKQyxFQURJLGVBQ0pBLEVBREk7O0FBRXRCLFVBQUksQ0FBQ0QsU0FBU0UsU0FBVCxDQUFtQkMsTUFBeEIsRUFBZ0MsT0FBTyxJQUFQOztBQUVoQyxhQUNFLG9CQUFDLFlBQUQ7QUFDRSxZQUFPRixFQUFQO0FBREYsU0FFTUQsUUFGTixFQURGO0FBTUQsSyxRQUVESSxpQixHQUFvQixZQUFNO0FBQUEseUJBQ1csTUFBS1osS0FEaEI7QUFBQSxVQUNoQmEsV0FEZ0IsZ0JBQ2hCQSxXQURnQjtBQUFBLFVBQ0hDLEtBREcsZ0JBQ0hBLEtBREc7QUFBQSxVQUNJTCxFQURKLGdCQUNJQSxFQURKOzs7QUFHeEIsYUFDRTtBQUFDLGFBQUQsQ0FBTyxRQUFQO0FBQUE7QUFDRyxlQUFPSSxXQUFQLEtBQXVCLFVBQXZCLElBQ0Q7QUFBQyxvQkFBRDtBQUFBLFlBQVksSUFBT0osRUFBUCxpQkFBWixFQUFxQyxTQUFTSSxXQUE5QztBQUNFLDhCQUFDLElBQUQsSUFBTSxNQUFLLFdBQVgsRUFBdUIsTUFBSyxXQUE1QjtBQURGLFNBRkY7QUFLR0MsaUJBQVM7QUFBQyxtQkFBRCxDQUFXLEtBQVg7QUFBQSxZQUFpQixJQUFPTCxFQUFQLFdBQWpCO0FBQXFDSztBQUFyQztBQUxaLE9BREY7QUFTRCxLLFFBRURDLG1CLEdBQXNCLFlBQU07QUFBQSx5QkFDSCxNQUFLZixLQURGO0FBQUEsVUFDbEJnQixNQURrQixnQkFDbEJBLE1BRGtCO0FBQUEsVUFDVlAsRUFEVSxnQkFDVkEsRUFEVTs7QUFHMUI7O0FBQ0EsVUFBSSxDQUFDTyxPQUFPQyxPQUFQLENBQWVOLE1BQWhCLElBQTBCLENBQUNLLE9BQU9DLE9BQVAsQ0FBZUMsSUFBOUMsRUFBb0QsT0FBTyxJQUFQO0FBQ3BELGFBQU8sb0JBQUMsU0FBRCxhQUFXLElBQU9ULEVBQVAsZ0JBQVgsSUFBdUNPLE1BQXZDLEVBQVA7QUFDRCxLOzs7NkJBRURHLE0scUJBQVM7QUFBQSxpQkFDbUIsS0FBS25CLEtBRHhCO0FBQUEsUUFDQ29CLFNBREQsVUFDQ0EsU0FERDtBQUFBLFFBQ1lYLEVBRFosVUFDWUEsRUFEWjs7QUFFUCxXQUNFLG9CQUFDLE1BQUQsQ0FBUSxLQUFSO0FBQ0UsaUJBQWNaLFdBQWQsMkJBQStDdUIsU0FEakQ7QUFFRSxVQUFJWCxFQUZOO0FBR0UsWUFBTSxLQUFLRyxpQkFBTCxFQUhSO0FBSUUsY0FBUSxLQUFLRyxtQkFBTCxFQUpWO0FBS0UsYUFBTyxLQUFLUixlQUFMO0FBTFQsTUFERjtBQVNELEc7OztFQTlDNEJsQixNQUFNZ0MsYTs7QUF3RXJDZixpQkFBaUJnQixZQUFqQixHQUFnQztBQUM5QlIsU0FBTyxJQUR1QjtBQUU5Qk0sYUFBVyxJQUZtQjtBQUc5QlAsZUFBYSxJQUhpQjtBQUk5QkwsWUFBVTtBQUNSRSxlQUFXO0FBREgsR0FKb0I7QUFPOUJNLFVBQVE7QUFDTkMsYUFBUztBQURIO0FBUHNCLENBQWhDOztBQVlBLGVBQWVYLGdCQUFmIiwiZmlsZSI6ImhlYWRlci1uYXZpZ2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgTGlzdEl0ZW1zIGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LWxpc3QtaXRlbXMnO1xuaW1wb3J0IHsgRHJvcGRvd25NZW51IH0gZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtZHJvcGRvd24nO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LWljb25zJztcbmltcG9ydCB7IEhlYWRlciwgUHJpbWl0aXZlIH0gZnJvbSAnQG9wdXNjYXBpdGEvb2MtY20tY29tbW9uLWxheW91dHMnO1xuXG5jb25zdCBjbGFzc1ByZWZpeCA9ICdvYy1jb21tb24tbGF5b3V0cyc7XG5cbmNvbnN0IEJhY2tCdXR0b24gPSBzdHlsZWQoUHJpbWl0aXZlLkJvcmRlcmxlc3NCdXR0b24pYFxuICBoZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaGVhZGVyLmJ1dHRvbi5oZWlnaHR9O1xuICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5oZWFkZXIuYnV0dG9uLmhlaWdodH07XG4gIG1hcmdpbi1yaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ndXR0ZXJXaWR0aH07XG4gIHN2ZyB7XG4gICAgaGVpZ2h0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhlYWRlci5idXR0b24uaGVpZ2h0fTtcbiAgICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5oZWFkZXIuYnV0dG9uLmhlaWdodH07XG4gIH1cbmA7XG5cbmNsYXNzIEhlYWRlck5hdmlnYXRpb24gZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgZ2V0UmlnaHRDb250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgZHJvcGRvd24sIGlkIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICghZHJvcGRvd24ubWVudUl0ZW1zLmxlbmd0aCkgcmV0dXJuIG51bGw7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPERyb3Bkb3duTWVudVxuICAgICAgICBpZD17YCR7aWR9LW1lbnVgfVxuICAgICAgICB7Li4uZHJvcGRvd259XG4gICAgICAvPlxuICAgICk7XG4gIH07XG5cbiAgcmVuZGVyTGVmdENvbnRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBvbkJhY2tDbGljaywgdGl0bGUsIGlkIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAge3R5cGVvZiBvbkJhY2tDbGljayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgICA8QmFja0J1dHRvbiBpZD17YCR7aWR9LWJhY2stYnV0dG9uYH0gb25DbGljaz17b25CYWNrQ2xpY2t9PlxuICAgICAgICAgIDxJY29uIHR5cGU9XCJpbmRpY2F0b3JcIiBuYW1lPVwiYXJyb3dMZWZ0XCIgLz5cbiAgICAgICAgPC9CYWNrQnV0dG9uPn1cbiAgICAgICAge3RpdGxlICYmIDxQcmltaXRpdmUuVGl0bGUgaWQ9e2Ake2lkfS10aXRsZWB9Pnt0aXRsZX08L1ByaW1pdGl2ZS5UaXRsZT59XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH07XG5cbiAgcmVuZGVyQ2VudGVyQ29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCB7IHBhZ2luZywgaWQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAvLyBJZiB0aGVyZSdzIGFuIGFycmF5IG9mIDEgb3IgbW9yZSBpdGVtcywgT1IgSW1tdXRhYmxlSnMgTGlzdCB3aXRoIDEgb3IgbW9yZSBpdGVtc1xuICAgIGlmICghcGFnaW5nLml0ZW1JZHMubGVuZ3RoICYmICFwYWdpbmcuaXRlbUlkcy5zaXplKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gPExpc3RJdGVtcyBpZD17YCR7aWR9LXBhZ2luYXRpb25gfSB7Li4ucGFnaW5nfSAvPjtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGlkIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8SGVhZGVyLkJhc2ljXG4gICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9X25hdmlnYXRpb24taGVhZGVyICR7Y2xhc3NOYW1lfWB9XG4gICAgICAgIGlkPXtpZH1cbiAgICAgICAgbGVmdD17dGhpcy5yZW5kZXJMZWZ0Q29udGVudCgpfVxuICAgICAgICBjZW50ZXI9e3RoaXMucmVuZGVyQ2VudGVyQ29udGVudCgpfVxuICAgICAgICByaWdodD17dGhpcy5nZXRSaWdodENvbnRlbnQoKX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuXG5IZWFkZXJOYXZpZ2F0aW9uLnByb3BUeXBlcyA9IHtcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25CYWNrQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICBwYWdpbmc6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgaXRlbUlkczogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIF0pKSxcbiAgICAgIFByb3BUeXBlcy5zaGFwZSh7fSksXG4gICAgXSksXG4gIH0pLFxuICBkcm9wZG93bjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBtZW51SXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBQcm9wVHlwZXMuc2hhcGUoe30pLFxuICAgIF0pKSxcbiAgfSksXG59O1xuXG5IZWFkZXJOYXZpZ2F0aW9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgdGl0bGU6IG51bGwsXG4gIGNsYXNzTmFtZTogbnVsbCxcbiAgb25CYWNrQ2xpY2s6IG51bGwsXG4gIGRyb3Bkb3duOiB7XG4gICAgbWVudUl0ZW1zOiBbXSxcbiAgfSxcbiAgcGFnaW5nOiB7XG4gICAgaXRlbUlkczogW10sXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJOYXZpZ2F0aW9uO1xuIl19