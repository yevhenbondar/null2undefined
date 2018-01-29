"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * null2undefined
 * @param {*} [val]
 */
function null2undefined(val) {
    function convert(value) {
        var hasParentAndParentIsArray = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        if (value instanceof Object) {
            hasParentAndParentIsArray = Array.isArray(value);
            var clone = hasParentAndParentIsArray ? [].concat(_toConsumableArray(value)) : _extends({}, value);
            for (var property in clone) {
                clone[property] = convert(clone[property], hasParentAndParentIsArray);
            }
            hasParentAndParentIsArray = false;
            return clone;
        }
        if (value === null && !hasParentAndParentIsArray) {
            return undefined;
        }
        return value;
    }
    return convert(val);
}

exports.default = null2undefined;