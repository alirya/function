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
     * Wrap {@link Return} and cache its value
     */
    class MemoizeFromObject {
        constructor(subject) {
            this.subject = subject;
            this.clear();
        }
        get memoized() {
            return this.memoize !== undefined;
        }
        /**
         * clear cached return
         */
        clear() {
            this.memoize = undefined;
        }
        get return() {
            if (!this.memoized) {
                this.memoize = {
                    return: this.subject.return
                };
            }
            return this.memoize.return;
        }
    }
    exports.default = MemoizeFromObject;
});
//# sourceMappingURL=memoize-from-object.js.map