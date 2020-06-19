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
    /**
     * Wrap {@link Returns} and cache its value
     *
     * suitable to cached value from heave operation
     */
    class Memoize {
        constructor(subject) {
            this.subject = subject;
            this.clear();
        }
        get valid() {
            return this.memoized !== undefined;
        }
        /**
         * clear cached value
         */
        clear() {
            this.memoized = undefined;
        }
        get return() {
            if (!this.valid) {
                this.memoized = {
                    return: this.subject.return
                };
            }
            return this.memoized.return;
        }
    }
    exports.default = Memoize;
});
//# sourceMappingURL=memoize.js.map