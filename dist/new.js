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
     * transform class constructor to function
     * '
     * @param constructor
      */
    function New(constructor) {
        return function (...argument) {
            return new constructor(...argument);
        };
    }
    exports.default = New;
});
//# sourceMappingURL=new.js.map