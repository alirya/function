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
    function Function(valid, value) {
        if (valid) {
            return `value is function`;
        }
        else {
            return `value is not function`;
        }
    }
    exports.default = Function;
});
//# sourceMappingURL=function.js.map