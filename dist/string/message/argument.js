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
     * create string message suitable for function argument
     */
    function Argument(parameter, type) {
        return `argument '${parameter}' expect '${type}'`;
    }
    exports.default = Argument;
});
//# sourceMappingURL=argument.js.map