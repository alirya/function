var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../guard/type", "../throwable/type", "./callback"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const type_1 = __importDefault(require("../guard/type"));
    const type_2 = __importDefault(require("../throwable/type"));
    const callback_1 = __importDefault(require("./callback"));
    /**
     * return {@param value} if type is function or
     * throw error from {@param error}
     */
    function Type(value, error = type_2.default) {
        callback_1.default(value, type_1.default, error);
        return value;
    }
    exports.default = Type;
});
//# sourceMappingURL=type.js.map