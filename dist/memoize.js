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
    function Memoize(callable, ...argument) {
        let data;
        return function () {
            if (data === undefined) {
                data = { return: callable(...argument) };
            }
            return data.return;
        };
    }
    exports.default = Memoize;
});
//# sourceMappingURL=memoize.js.map