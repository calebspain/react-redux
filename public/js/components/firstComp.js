webpackJsonp([0],{

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(100);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(101);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    _classCallCheck(this, Layout);

    var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this));

    _this.state = {
      name: 'Caleb',
      health: 100,
      level: 2,
      lowLevelClass: 'danger-red'
    };
    _this.clickedButton = _this.clickedButton.bind(_this);
    return _this;
  }

  _createClass(Layout, [{
    key: 'clickedButton',
    value: function clickedButton() {
      this.setState({
        health: this.state.health - 25
      }, function () {
        console.log(this.state.health);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'parent' },
        _react2.default.createElement(Header, null),
        _react2.default.createElement(
          'div',
          { className: this.state.health < 55 ? this.state.lowLevelClass : 'blue-bg' },
          _react2.default.createElement(
            'div',
            { className: 'user-info' },
            _react2.default.createElement(
              'h3',
              null,
              'Name: ',
              this.state.name
            ),
            _react2.default.createElement(
              'h3',
              null,
              'Level: ',
              this.state.level
            )
          ),
          _react2.default.createElement(LogoImage, { mickeyMouse: this.clickedButton, health: this.state.health })
        )
      );
    }
  }]);

  return Layout;
}(_react.Component);

var LogoImage = function (_Component2) {
  _inherits(LogoImage, _Component2);

  function LogoImage() {
    _classCallCheck(this, LogoImage);

    var _this2 = _possibleConstructorReturn(this, (LogoImage.__proto__ || Object.getPrototypeOf(LogoImage)).call(this));

    _this2.state = {
      gameOver: 'Sorry You Lost...'
    };
    return _this2;
  }

  _createClass(LogoImage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'logoImageComp' },
        _react2.default.createElement('img', { src: '/img/logo.png', alt: 'girl with bape', onClick: this.props.mickeyMouse }),
        _react2.default.createElement(
          'h3',
          null,
          'Health: ',
          this.props.health <= 0 ? this.state.gameOver : this.props.health
        )
      );
    }
  }]);

  return LogoImage;
}(_react.Component);

var Header = function Header() {
  return _react2.default.createElement(
    'header',
    null,
    _react2.default.createElement(
      'ul',
      null,
      _react2.default.createElement(
        'li',
        null,
        'Home'
      ),
      _react2.default.createElement(
        'li',
        null,
        'About'
      ),
      _react2.default.createElement(
        'li',
        null,
        'Contact'
      )
    )
  );
};

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(Layout, null), app);

/***/ })

},[233]);