var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./value/memoize", "@dikac/t-object/merge"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const memoize_1 = __importDefault(require("./value/memoize"));
    const merge_1 = __importDefault(require("@dikac/t-object/merge"));
    function Memoize(callable, ...argument) {
        let merged;
        let memoize = new memoize_1.default(callable, argument);
        let fn = function () {
            return merged.value;
        };
        merged = merge_1.default(fn, memoize);
        return merged;
    }
    exports.default = Memoize;
});
//# sourceMappingURL=memoize.js.map