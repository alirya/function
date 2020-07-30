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
    function Callback(value, validation, error, ...extras) {
        if (!validation(value, ...extras)) {
            throw error(value, ...extras);
        }
    }
    exports.default = Callback;
});
//# sourceMappingURL=callback.js.map