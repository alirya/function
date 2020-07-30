var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../boolean/string/function", "./callback"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const function_1 = __importDefault(require("../../boolean/string/function"));
    const callback_1 = __importDefault(require("./callback"));
    function Function(value) {
        return callback_1.default([value], function_1.default);
    }
    exports.default = Function;
});
//# sourceMappingURL=function.js.map