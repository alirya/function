var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "is-function"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const is_function_1 = __importDefault(require("is-function"));
    /**
     * check if {@param value} type is function
     */
    function Function(value) {
        return is_function_1.default(value);
    }
    exports.default = Function;
});
//# sourceMappingURL=function.js.map