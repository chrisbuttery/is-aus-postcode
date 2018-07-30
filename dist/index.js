"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pattern = /(^0(2|8|9){1}[0-9]{2})|(^[1-9]{1}[0-9]{3})$/;
var isAusPostcode = function (postcode) { return pattern.test(postcode); };
exports.default = isAusPostcode;
