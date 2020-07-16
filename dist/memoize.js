var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./memoize-from-object"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const memoize_from_object_1 = __importDefault(require("./memoize-from-object"));
    /**
     * wrap given {@param callback} to new function and cache its return
     *
     * {@param argument} is used if cached return is not exits
     */
    function Memoize(callback, ...argument) {
        return memoize_from_object_1.default({
            callback: callback,
            argument: argument,
        });
    }
    exports.default = Memoize;
});
//# sourceMappingURL=memoize.js.map