"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NumberField(props) {
  var StringField = props.registry.fields.StringField;

  return _react2.default.createElement(StringField, (0, _extends3.default)({}, props, {
    onChange: function onChange(value) {
      return props.onChange((0, _utils.asNumber)(value));
    }
  }));
}

if (process.env.NODE_ENV !== "production") {
  NumberField.propTypes = {
    schema: _propTypes2.default.object.isRequired,
    uiSchema: _propTypes2.default.object,
    idSchema: _propTypes2.default.object,
    onChange: _propTypes2.default.func.isRequired,
    formData: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    required: _propTypes2.default.bool,
    formContext: _propTypes2.default.object.isRequired
  };
}

NumberField.defaultProps = {
  uiSchema: {}
};

exports.default = NumberField;