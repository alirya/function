var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../assert/callback"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const callback_1 = __importDefault(require("../assert/callback"));
    /**
     * Throw exception from {@param error} if given {@param value} is not valid according
     * to {@param validation}
     *
     * This can be use to create type assertion
     */
    function Callback(value, validation, error) {
        callback_1.default(value, validation, error);
        return value;
    }
    exports.default = Callback;
});
//# sourceMappingURL=callback.js.map