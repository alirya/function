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
     * Assert if {@param argument} valid according to {@param validation}
     *
     * Throw exception from {@param error} if not valid
     */
    function Callback(argument, validation, error) {
        if (!validation(...argument)) {
            throw error(...argument);
        }
    }
    exports.default = Callback;
});
//# sourceMappingURL=callback.js.map