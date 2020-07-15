var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../assert/parameter-arguments"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const parameter_arguments_1 = __importDefault(require("../assert/parameter-arguments"));
    /**
     * Throw exception from {@param error} if given {@param value} is not valid according
     * to {@param validation}
     *
     * This can be use to create type assertion
     */
    function CallbackArguments(value, validation, error, extras) {
        parameter_arguments_1.default(value, validation, error, extras);
        return value;
    }
    exports.default = CallbackArguments;
});
//# sourceMappingURL=callback-arguments.js.map