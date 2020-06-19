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
     * Find match {@param argument} in {@param list} value according
     * to {@param validation}
     *
     * return {@param defaults} if no match found
     */
    function Find(list, argument, validation, defaults) {
        for (let object of list) {
            if (validation(object.argument, argument)) {
                return object;
            }
        }
        return defaults;
    }
    exports.default = Find;
});
//# sourceMappingURL=find.js.map