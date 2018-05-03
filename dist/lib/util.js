"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _defineProperty = Object.defineProperty;
function defineProperty(obj, key, value, enumerable) {
    if (enumerable === void 0) { enumerable = false; }
    _defineProperty(obj, key, {
        value: value,
        enumerable: enumerable,
        writable: true,
        configurable: true,
    });
}
exports.defineProperty = defineProperty;
var _hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwnProperty(obj, key) {
    return _hasOwnProperty.call(obj, key);
}
exports.hasOwnProperty = hasOwnProperty;
var _toString = Object.prototype.toString;
exports.is = {
    undefined: function (val) { return _toString.call(val) === '[object Undefined]'; },
    null: function (val) { return _toString.call(val) === '[object Null]'; },
    number: function (val) { return _toString.call(val) === '[object Number]'; },
    string: function (val) { return _toString.call(val) === '[object String]'; },
    boolean: function (val) { return _toString.call(val) === '[object Boolean]'; },
    symbol: function (val) { return _toString.call(val) === '[object Symbol]'; },
    object: function (val) { return _toString.call(val) === '[object Object]'; },
    array: function (val) { return _toString.call(val) === '[object Array]'; },
    function: function (val) { return _toString.call(val) === '[object Function]'; },
};
//# sourceMappingURL=util.js.map