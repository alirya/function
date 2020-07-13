(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function Function(value, valid) {
        let string = value.toString();
        if (valid) {
            return `value "${string}" is function`;
        }
        else {
            return `value "${string}" is not function`;
        }
    }
    exports.default = Function;
});
//# sourceMappingURL=function.js.map