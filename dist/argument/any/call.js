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
     * Use {@link Argument} as argument to call function form {@link Value}
     */
    function Call(object) {
        return object.value(...object.argument);
    }
    exports.default = Call;
});
//# sourceMappingURL=call.js.map