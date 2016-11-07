'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loading = function Loading(props) {
  var view = props.pending ? _react2.default.createElement(_reactFontawesome2.default, { name: 'spinner',
    spin: true, size: '2x' }) : _react2.default.createElement(
    'div',
    null,
    ' ',
    props.children,
    ' '
  );
  return view;
};

exports.default = Loading;