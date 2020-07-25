var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./return/memoize-from-object", "./return/callback"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const memoize_from_object_1 = __importDefault(require("./return/memoize-from-object"));
    const callback_1 = __importDefault(require("./return/callback"));
    /**
     * wrap given {@param data} {@link Callback} to new function and cache its return
     *
     * {@param data} {@link Argument} is used if cached return is not exits
     */
    function MemoizeFromObject(data) {
        let merged;
        let callback = new callback_1.default(data);
        let memoize = new memoize_from_object_1.default(callback);
        let fn = function () {
            return memoize.return;
        };
        merged = fn;
        merged.container = memoize;
        return merged;
    }
    exports.default = MemoizeFromObject;
});
//# sourceMappingURL=memoize-from-object.js.map