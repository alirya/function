var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-value/object-property", "@dikac/t-value/memoize"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const object_property_1 = __importDefault(require("@dikac/t-value/object-property"));
    const memoize_1 = __importDefault(require("@dikac/t-value/memoize"));
    /**
     * Wrap {@link Return} and cache its value
     *
     * suitable to cached value from heave operation
     */
    class Memoize {
        constructor(subject) {
            this.subject = subject;
            let value = new object_property_1.default(subject, 'return');
            this.memoize = new memoize_1.default(value);
        }
        get return() {
            return this.memoize.value;
        }
    }
    exports.default = Memoize;
});
//# sourceMappingURL=memoize.js.map