function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
function SvgNoTransfer(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M5.78 2.95C7.24 2.16 9.48 2 12 2c4.42 0 8 .5 8 4v10c0 .35-.08.67-.19.98L13.83 11H18V6H8.83L5.78 2.95zm14 19.66L18.17 21H16v-2H8v2H5v-2.78c-.61-.55-1-1.34-1-2.22V6.83L1.39 4.22 2.8 2.81l18.38 18.38-1.4 1.42zM9 15.5c0-.83-.67-1.5-1.5-1.5S6 14.67 6 15.5 6.67 17 7.5 17 9 16.33 9 15.5zM8.17 11L6 8.83V11h2.17z",
    fill: "currentColor"
  }));
}
export default SvgNoTransfer;