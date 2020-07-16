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
    /**
     * container for function argument & function
     */
    class Value {
        constructor(argument, callback) {
            this.argument = argument;
            this.callback = callback;
        }
    }
    exports.default = Value;
});
//# sourceMappingURL=value.js.map