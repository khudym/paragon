function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
const SvgPlumbing = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "m16.16 5.64 3.54 3.54a3 3 0 0 0 0-4.24L16.16 1.4l-4.24 4.24 2.12 2.12 2.12-2.12zM4.842 12.708l3.535-3.535 2.122 2.12-3.536 3.536z",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("path", {
  d: "m15.45 7.76-1.41 1.41-4.25-4.24-2.12 2.12 4.24 4.24-8.49 8.49 2.83 2.83L16.86 12l.71.71 1.41-1.41-3.53-3.54z",
  fill: "currentColor"
}));
export default SvgPlumbing;