var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../assert/assertion"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const assertion_1 = __importDefault(require("../assert/assertion"));
    /**
     * return {@param value} if type is valid according to {@param validation} or
     * throw error from {@param error}
     */
    function Guard(value, validation, error) {
        assertion_1.default(value, validation, error);
        return value;
    }
    exports.default = Guard;
});
//# sourceMappingURL=guard.js.map