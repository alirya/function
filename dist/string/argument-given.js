var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./argument"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const argument_1 = __importDefault(require("./argument"));
    /**
     * create string message suitable for function argument, including given value
     */
    function ArgumentGiven(info) {
        return argument_1.default(info) + `given '${info.value}'`;
    }
    exports.default = ArgumentGiven;
});
//# sourceMappingURL=argument-given.js.map