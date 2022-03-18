"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
require("./index.scss");
var App_1 = require("./App");
var reportWebVitals_1 = require("./reportWebVitals");
react_dom_1["default"].render(<react_1["default"].StrictMode>
		<App_1["default"] />
	</react_1["default"].StrictMode>, document.getElementById('root'));
reportWebVitals_1["default"]();
