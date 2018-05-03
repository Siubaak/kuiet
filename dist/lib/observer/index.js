"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../util");
var hasOwnProperty = Object.prototype.hasOwnProperty;
var Observer = (function () {
    function Observer(value) {
        this.value = value;
        if (!util_1.is.object(value) && !util_1.is.array(value)) {
            return;
        }
        Object.defineProperty(value, '__ob__', {
            value: this,
            enumerable: false,
            writable: true,
            configurable: true,
        });
        if (util_1.is.object(value)) {
            var keys = Object.keys(value);
            for (var i = 0; i < keys.length; i++) {
                this._defineReactive(value, keys[i], value[keys[i]]);
            }
        }
        else {
            for (var i = 0; i < value.length; i++) {
                this._observe(value[i]);
            }
        }
    }
    Observer.prototype._observe = function (value) {
        if (hasOwnProperty.call(value, '__ob__')
            && value.__ob__ instanceof Observer) {
            return value.__ob__;
        }
        else {
            return new Observer(value);
        }
    };
    Observer.prototype._defineReactive = function (obj, key, val) {
        var descriptor = Object.getOwnPropertyDescriptor(obj, key);
        if (descriptor && !descriptor.configurable) {
            return;
        }
        var childOb = this._observe(val);
        var getter = descriptor && descriptor.get;
        var setter = descriptor && descriptor.set;
        Object.defineProperty(obj, key, {
            enumerable: true,
            configurable: true,
            get: function () {
                var value = getter ? getter.call(obj) : val;
                return value;
            },
            set: function (nextVal) {
                var value = getter ? getter.call(obj) : val;
                if (value === nextVal) {
                    return;
                }
                if (setter) {
                    setter.call(obj, nextVal);
                }
                else {
                    val = nextVal;
                }
            },
        });
    };
    return Observer;
}());
exports.default = Observer;
//# sourceMappingURL=index.js.map