var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-array/boolean/equal", "./object/dynamic-memoize-container"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const equal_1 = __importDefault(require("@dikac/t-array/boolean/equal"));
    const dynamic_memoize_container_1 = __importDefault(require("./object/dynamic-memoize-container"));
    function DynamicMemoize(callable, compareArguments = equal_1.default) {
        let container = new dynamic_memoize_container_1.default(callable, compareArguments);
        let merged;
        let fn = function (...argument) {
            let object = container.get(argument);
            if (!object) {
                object = container.call(argument);
                container.memoized.push(object);
            }
            return object.return;
        };
        merged = fn;
        merged.container = container;
        return merged;
    }
    exports.default = DynamicMemoize;
});
//# sourceMappingURL=dynamic-memoize.js.map