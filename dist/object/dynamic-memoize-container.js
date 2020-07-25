var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../argument/find"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const find_1 = __importDefault(require("../argument/find"));
    class DynamicMemoizeContainer {
        constructor(functions, compare) {
            this.functions = functions;
            this.compare = compare;
            this.memoized = [];
        }
        call(argument) {
            return {
                argument: argument,
                return: this.functions(...argument)
            };
        }
        get(argument) {
            return find_1.default(this.memoized, argument, this.compare, null);
        }
    }
    exports.default = DynamicMemoizeContainer;
});
//# sourceMappingURL=dynamic-memoize-container.js.map