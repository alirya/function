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
     * Throw exception from {@param error} if given {@param value} is not valid according
     * to {@param validation}
     *
     * This can be use to create type assertion
     */
    function CallbackArguments(value, validation, error, extras) {
        // @ts-ignore
        if (!validation(value, ...extras)) {
            // @ts-ignore
            throw error(value, ...extras);
        }
    }
    exports.default = CallbackArguments;
});
//# sourceMappingURL=callback-arguments.js.map