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
     * Throw exception from {@param errorFactory}if given {@param value} is not valid accoding
     * to {@param validation}
     *
     * This can be use to create type assertion
     */
    function Assertion(value, validation, errorFactory) {
        if (!validation(value)) {
            throw errorFactory(value);
        }
    }
    exports.default = Assertion;
});
//# sourceMappingURL=assertion.js.map