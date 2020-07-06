var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../guard/function", "../throwable/type", "./callback"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const function_1 = __importDefault(require("../guard/function"));
    const type_1 = __importDefault(require("../throwable/type"));
    const callback_1 = __importDefault(require("./callback"));
    /**
     * return {@param value} if type is function or
     * throw error from {@param error}
     */
    function Function(value, error = type_1.default) {
        callback_1.default(value, function_1.default, error);
        return value;
    }
    exports.default = Function;
});
//# sourceMappingURL=function.js.map