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
          id = _this$props.id,
          rightContent = _this$props.rightContent;


      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        rightContent,
        dropdown.menuItems.length ? _react2.default.createElement(_reactDropdown.DropdownMenu, _extends({
          id: id + '-menu'
        }, dropdown)) : null
      );
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
        id = _props.id,
        sideSectionBasis = _props.sideSectionBasis;

    return _react2.default.createElement(_ocCmCommonLayouts.Header.Basic, {
      className: classPrefix + '_navigation-header ' + className,
      id: id,
      left: this.renderLeftContent(),
      center: this.renderCenterContent(),
      right: this.getRightContent(),
      sideSectionBasis: sideSectionBasis
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
  },
  rightContent: null,
  sideSectionBasis: '200px'
};

exports.default = HeaderNavigation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWFkZXItbmF2aWdhdGlvbi5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbImNsYXNzUHJlZml4IiwiQmFja0J1dHRvbiIsIlByaW1pdGl2ZSIsIkJvcmRlcmxlc3NCdXR0b24iLCJwcm9wcyIsInRoZW1lIiwiaGVhZGVyIiwiYnV0dG9uIiwiaGVpZ2h0IiwiZ3V0dGVyV2lkdGgiLCJIZWFkZXJOYXZpZ2F0aW9uIiwiZ2V0UmlnaHRDb250ZW50IiwiZHJvcGRvd24iLCJpZCIsInJpZ2h0Q29udGVudCIsIm1lbnVJdGVtcyIsImxlbmd0aCIsInJlbmRlckxlZnRDb250ZW50Iiwib25CYWNrQ2xpY2siLCJ0aXRsZSIsInJlbmRlckNlbnRlckNvbnRlbnQiLCJwYWdpbmciLCJpdGVtSWRzIiwic2l6ZSIsInJlbmRlciIsImNsYXNzTmFtZSIsInNpZGVTZWN0aW9uQmFzaXMiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsY0FBYyxtQkFBcEI7O0FBRUEsSUFBTUMsYUFBYSxnQ0FBT0MsNkJBQVVDLGdCQUFqQixDQUFiLGtCQUNNO0FBQUEsU0FBU0MsTUFBTUMsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxNQUFuQixDQUEwQkMsTUFBbkM7QUFBQSxDQUROLEVBRUs7QUFBQSxTQUFTSixNQUFNQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLE1BQW5CLENBQTBCQyxNQUFuQztBQUFBLENBRkwsRUFHWTtBQUFBLFNBQVNKLE1BQU1DLEtBQU4sQ0FBWUksV0FBckI7QUFBQSxDQUhaLEVBS1E7QUFBQSxTQUFTTCxNQUFNQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLE1BQW5CLENBQTBCQyxNQUFuQztBQUFBLENBTFIsRUFNTztBQUFBLFNBQVNKLE1BQU1DLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsTUFBbkIsQ0FBMEJDLE1BQW5DO0FBQUEsQ0FOUCxDQUFOOztJQVVNRSxnQjs7Ozs7Ozs7Ozs7O2dLQUNKQyxlLEdBQWtCLFlBQU07QUFBQSx3QkFDaUIsTUFBS1AsS0FEdEI7QUFBQSxVQUNkUSxRQURjLGVBQ2RBLFFBRGM7QUFBQSxVQUNKQyxFQURJLGVBQ0pBLEVBREk7QUFBQSxVQUNBQyxZQURBLGVBQ0FBLFlBREE7OztBQUd0QixhQUNFO0FBQUMsdUJBQUQsQ0FBTyxRQUFQO0FBQUE7QUFDR0Esb0JBREg7QUFFR0YsaUJBQVNHLFNBQVQsQ0FBbUJDLE1BQW5CLEdBQ0MsOEJBQUMsMkJBQUQ7QUFDRSxjQUFPSCxFQUFQO0FBREYsV0FFTUQsUUFGTixFQURELEdBS0M7QUFQSixPQURGO0FBV0QsSyxRQUVESyxpQixHQUFvQixZQUFNO0FBQUEseUJBQ1csTUFBS2IsS0FEaEI7QUFBQSxVQUNoQmMsV0FEZ0IsZ0JBQ2hCQSxXQURnQjtBQUFBLFVBQ0hDLEtBREcsZ0JBQ0hBLEtBREc7QUFBQSxVQUNJTixFQURKLGdCQUNJQSxFQURKOzs7QUFHeEIsYUFDRTtBQUFDLHVCQUFELENBQU8sUUFBUDtBQUFBO0FBQ0csZUFBT0ssV0FBUCxLQUF1QixVQUF2QixJQUNEO0FBQUMsb0JBQUQ7QUFBQSxZQUFZLElBQU9MLEVBQVAsaUJBQVosRUFBcUMsU0FBU0ssV0FBOUM7QUFDRSx3Q0FBQyxnQkFBRCxJQUFNLE1BQUssV0FBWCxFQUF1QixNQUFLLFdBQTVCO0FBREYsU0FGRjtBQUtHQyxpQkFBUztBQUFDLHNDQUFELENBQVcsS0FBWDtBQUFBLFlBQWlCLElBQU9OLEVBQVAsV0FBakI7QUFBcUNNO0FBQXJDO0FBTFosT0FERjtBQVNELEssUUFFREMsbUIsR0FBc0IsWUFBTTtBQUFBLHlCQUNILE1BQUtoQixLQURGO0FBQUEsVUFDbEJpQixNQURrQixnQkFDbEJBLE1BRGtCO0FBQUEsVUFDVlIsRUFEVSxnQkFDVkEsRUFEVTs7QUFHMUI7O0FBQ0EsVUFBSSxDQUFDUSxPQUFPQyxPQUFQLENBQWVOLE1BQWhCLElBQTBCLENBQUNLLE9BQU9DLE9BQVAsQ0FBZUMsSUFBOUMsRUFBb0QsT0FBTyxJQUFQO0FBQ3BELGFBQU8sOEJBQUMsd0JBQUQsYUFBVyxJQUFPVixFQUFQLGdCQUFYLElBQXVDUSxNQUF2QyxFQUFQO0FBQ0QsSzs7OzZCQUVERyxNLHFCQUFTO0FBQUEsaUJBQ3FDLEtBQUtwQixLQUQxQztBQUFBLFFBQ0NxQixTQURELFVBQ0NBLFNBREQ7QUFBQSxRQUNZWixFQURaLFVBQ1lBLEVBRFo7QUFBQSxRQUNnQmEsZ0JBRGhCLFVBQ2dCQSxnQkFEaEI7O0FBRVAsV0FDRSw4QkFBQyx5QkFBRCxDQUFRLEtBQVI7QUFDRSxpQkFBYzFCLFdBQWQsMkJBQStDeUIsU0FEakQ7QUFFRSxVQUFJWixFQUZOO0FBR0UsWUFBTSxLQUFLSSxpQkFBTCxFQUhSO0FBSUUsY0FBUSxLQUFLRyxtQkFBTCxFQUpWO0FBS0UsYUFBTyxLQUFLVCxlQUFMLEVBTFQ7QUFNRSx3QkFBa0JlO0FBTnBCLE1BREY7QUFVRCxHOzs7RUFuRDRCQyxnQkFBTUMsYTs7QUErRXJDbEIsaUJBQWlCbUIsWUFBakIsR0FBZ0M7QUFDOUJWLFNBQU8sSUFEdUI7QUFFOUJNLGFBQVcsSUFGbUI7QUFHOUJQLGVBQWEsSUFIaUI7QUFJOUJOLFlBQVU7QUFDUkcsZUFBVztBQURILEdBSm9CO0FBTzlCTSxVQUFRO0FBQ05DLGFBQVM7QUFESCxHQVBzQjtBQVU5QlIsZ0JBQWMsSUFWZ0I7QUFXOUJZLG9CQUFrQjtBQVhZLENBQWhDOztrQkFjZWhCLGdCIiwiZmlsZSI6ImhlYWRlci1uYXZpZ2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgTGlzdEl0ZW1zIGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LWxpc3QtaXRlbXMnO1xuaW1wb3J0IHsgRHJvcGRvd25NZW51IH0gZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtZHJvcGRvd24nO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LWljb25zJztcbmltcG9ydCB7IEhlYWRlciwgUHJpbWl0aXZlIH0gZnJvbSAnQG9wdXNjYXBpdGEvb2MtY20tY29tbW9uLWxheW91dHMnO1xuXG5jb25zdCBjbGFzc1ByZWZpeCA9ICdvYy1jb21tb24tbGF5b3V0cyc7XG5cbmNvbnN0IEJhY2tCdXR0b24gPSBzdHlsZWQoUHJpbWl0aXZlLkJvcmRlcmxlc3NCdXR0b24pYFxuICBoZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaGVhZGVyLmJ1dHRvbi5oZWlnaHR9O1xuICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5oZWFkZXIuYnV0dG9uLmhlaWdodH07XG4gIG1hcmdpbi1yaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ndXR0ZXJXaWR0aH07XG4gIHN2ZyB7XG4gICAgaGVpZ2h0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhlYWRlci5idXR0b24uaGVpZ2h0fTtcbiAgICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5oZWFkZXIuYnV0dG9uLmhlaWdodH07XG4gIH1cbmA7XG5cbmNsYXNzIEhlYWRlck5hdmlnYXRpb24gZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgZ2V0UmlnaHRDb250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgZHJvcGRvd24sIGlkLCByaWdodENvbnRlbnQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICB7cmlnaHRDb250ZW50fVxuICAgICAgICB7ZHJvcGRvd24ubWVudUl0ZW1zLmxlbmd0aCA/XG4gICAgICAgICAgPERyb3Bkb3duTWVudVxuICAgICAgICAgICAgaWQ9e2Ake2lkfS1tZW51YH1cbiAgICAgICAgICAgIHsuLi5kcm9wZG93bn1cbiAgICAgICAgICAvPlxuICAgICAgICA6IG51bGx9XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH07XG5cbiAgcmVuZGVyTGVmdENvbnRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBvbkJhY2tDbGljaywgdGl0bGUsIGlkIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAge3R5cGVvZiBvbkJhY2tDbGljayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgICA8QmFja0J1dHRvbiBpZD17YCR7aWR9LWJhY2stYnV0dG9uYH0gb25DbGljaz17b25CYWNrQ2xpY2t9PlxuICAgICAgICAgIDxJY29uIHR5cGU9XCJpbmRpY2F0b3JcIiBuYW1lPVwiYXJyb3dMZWZ0XCIgLz5cbiAgICAgICAgPC9CYWNrQnV0dG9uPn1cbiAgICAgICAge3RpdGxlICYmIDxQcmltaXRpdmUuVGl0bGUgaWQ9e2Ake2lkfS10aXRsZWB9Pnt0aXRsZX08L1ByaW1pdGl2ZS5UaXRsZT59XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH07XG5cbiAgcmVuZGVyQ2VudGVyQ29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCB7IHBhZ2luZywgaWQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAvLyBJZiB0aGVyZSdzIGFuIGFycmF5IG9mIDEgb3IgbW9yZSBpdGVtcywgT1IgSW1tdXRhYmxlSnMgTGlzdCB3aXRoIDEgb3IgbW9yZSBpdGVtc1xuICAgIGlmICghcGFnaW5nLml0ZW1JZHMubGVuZ3RoICYmICFwYWdpbmcuaXRlbUlkcy5zaXplKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gPExpc3RJdGVtcyBpZD17YCR7aWR9LXBhZ2luYXRpb25gfSB7Li4ucGFnaW5nfSAvPjtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGlkLCBzaWRlU2VjdGlvbkJhc2lzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8SGVhZGVyLkJhc2ljXG4gICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9X25hdmlnYXRpb24taGVhZGVyICR7Y2xhc3NOYW1lfWB9XG4gICAgICAgIGlkPXtpZH1cbiAgICAgICAgbGVmdD17dGhpcy5yZW5kZXJMZWZ0Q29udGVudCgpfVxuICAgICAgICBjZW50ZXI9e3RoaXMucmVuZGVyQ2VudGVyQ29udGVudCgpfVxuICAgICAgICByaWdodD17dGhpcy5nZXRSaWdodENvbnRlbnQoKX1cbiAgICAgICAgc2lkZVNlY3Rpb25CYXNpcz17c2lkZVNlY3Rpb25CYXNpc31cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuXG5IZWFkZXJOYXZpZ2F0aW9uLnByb3BUeXBlcyA9IHtcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25CYWNrQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICByaWdodENvbnRlbnQ6IFByb3BUeXBlcy5ub2RlLFxuICBzaWRlU2VjdGlvbkJhc2lzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIHBhZ2luZzogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBpdGVtSWRzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgXSkpLFxuICAgICAgUHJvcFR5cGVzLnNoYXBlKHt9KSxcbiAgICBdKSxcbiAgfSksXG4gIGRyb3Bkb3duOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIG1lbnVJdGVtczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIFByb3BUeXBlcy5zaGFwZSh7fSksXG4gICAgXSkpLFxuICB9KSxcbn07XG5cbkhlYWRlck5hdmlnYXRpb24uZGVmYXVsdFByb3BzID0ge1xuICB0aXRsZTogbnVsbCxcbiAgY2xhc3NOYW1lOiBudWxsLFxuICBvbkJhY2tDbGljazogbnVsbCxcbiAgZHJvcGRvd246IHtcbiAgICBtZW51SXRlbXM6IFtdLFxuICB9LFxuICBwYWdpbmc6IHtcbiAgICBpdGVtSWRzOiBbXSxcbiAgfSxcbiAgcmlnaHRDb250ZW50OiBudWxsLFxuICBzaWRlU2VjdGlvbkJhc2lzOiAnMjAwcHgnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyTmF2aWdhdGlvbjtcbiJdfQ==