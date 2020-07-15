var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/function", "../assert/throwable/function", "./parameter"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const function_1 = __importDefault(require("../boolean/function"));
    const function_2 = __importDefault(require("../assert/throwable/function"));
    const parameter_1 = __importDefault(require("./parameter"));
    /**
     * Throw exception from {@param error} if given {@param value} is no callable type
     */
    function Function(value, error = function_2.default) {
        parameter_1.default(value, function_1.default, error);
    }
    exports.default = Function;
});
//# sourceMappingURL=function.js.map