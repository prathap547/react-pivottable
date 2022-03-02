'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) {descriptor.writable = true;} Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) {defineProperties(Constructor.prototype, protoProps);} if (staticProps) {defineProperties(Constructor, staticProps);} return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) {Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;} }

var SearchFilter = function (_React$PureComponent) {
  _inherits(SearchFilter, _React$PureComponent);

  function SearchFilter(props) {
    _classCallCheck(this, SearchFilter);

    var _this = _possibleConstructorReturn(this, (SearchFilter.__proto__ || Object.getPrototypeOf(SearchFilter)).call(this, props));

    _this.state = {
      searchValue: ""
    };
    return _this;
  }

  _createClass(SearchFilter, [{
    key: 'onSearchChange',
    value: function onSearchChange(s) {
      var closeIcon = document.querySelector('.close-icon');
      if (s.target.value.length > 1) {
        closeIcon.classList.add('close-icon-show');
      } else if (document.querySelector('.close-icon-show')) {
        closeIcon.classList.remove('close-icon-show');
      }
      if (s.target.value && s.target.value.length > 0) {
        this.props.onSearchChange(s.target.value);
      } else {
        this.props.onSearchChange(document.querySelector('.pvtSearch').value);
      }
    }
  }, {
    key: 'clearSearch',
    value: function clearSearch(evt) {
      if (evt.target.value && evt.target.value.length > 0) {
        // evt.target.value = "";
      } else {
        document.querySelector('.pvtSearch').value = "";
      }
    }
  }, {
    key: 'handleKeyUp',
    value: function handleKeyUp(evt) {
      var code = evt.charCode || evt.keyCode;
      if (code === 27) {
        this.clearSearch(evt);
        this.onSearchChange(evt);
      }
    }
  }, {
    key: 'handleOnChange',
    value: function handleOnChange(evt) {
      this.onSearchChange(evt);
    }
  }, {
    key: 'handleClose',
    value: function handleClose(evt) {
      this.clearSearch(evt);
      this.onSearchChange(evt);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'col-md-12 pull-left' },
          _react2.default.createElement('input', {
            value: this.props.searchValue,
            className: 'pvtDropdownValue pvtDropdownCurrent pvtSearch',
            placeholder: 'Search',
            onKeyUp: this.handleKeyUp.bind(this),
            onChange: this.handleOnChange.bind(this) }),
          _react2.default.createElement('button', { className: 'close-icon', type: 'reset', onClick: this.handleClose.bind(this) })
        )
      );
    }
  }]);

  return SearchFilter;
}(_react2.default.PureComponent);

exports.default = SearchFilter;
module.exports = exports.default;
// # sourceMappingURL=SearchFilterView.js.map