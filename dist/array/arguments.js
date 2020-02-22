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
    function Arguments(argument) {
        let array = [];
        for (let i = 0; i < argument.length; i++) {
            array.push(argument[i]);
        }
        return array;
    }
    exports.default = Arguments;
});
//# sourceMappingURL=arguments.js.map