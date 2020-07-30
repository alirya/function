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
    function Callback(argument, message, error = (string) => new Error(string)) {
        return error(message(false, ...argument));
    }
    exports.default = Callback;
});
//# sourceMappingURL=callback.js.map