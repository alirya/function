(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Memoize {
        constructor(functions, argument) {
            this.functions = functions;
            this.argument = argument;
            this.clear();
        }
        clear() {
            this.memoized = undefined;
        }
        get valid() {
            return this.memoized !== undefined;
        }
        get value() {
            if (!this.valid) {
                this.memoized = {
                    value: this.functions(...this.argument)
                };
            }
            return this.memoized.value;
        }
    }
    exports.default = Memoize;
});
//# sourceMappingURL=memoize.js.map