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
     * wrap given {@param callback} to new function and cache its return
     *
     * this more performant than {@link ./memoize.ts} but does not offer
     *
     * @param argument
     * used if cached return is not exits
     *
     * @callback
        * callback to be wrapped
     */
    function MemoizeStatic(callback, ...argument) {
        const fn = function () {
            if (fn.callback) {
                fn.return = fn.callback(...fn.argument);
                delete fn.callback;
                delete fn.argument;
            }
            return fn.return;
        };
        fn.callback = callback;
        fn.return = undefined;
        fn.argument = argument;
        return fn;
    }
    exports.default = MemoizeStatic;
});
//# sourceMappingURL=memoize-static.js.map