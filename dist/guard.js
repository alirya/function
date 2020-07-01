var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./assert/type", "./throwable/type", "./any/guard"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const type_1 = __importDefault(require("./assert/type"));
    const type_2 = __importDefault(require("./throwable/type"));
    const guard_1 = __importDefault(require("./any/guard"));
    /**
     * return {@param value} if type is function or
     * throw error from {@param error}
     */
    function Guard(value, error = type_2.default) {
        guard_1.default(value, type_1.default, error);
        return value;
    }
    exports.default = Guard;
});
//# sourceMappingURL=guard.js.map