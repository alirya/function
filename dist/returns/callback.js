var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../any/call"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const call_1 = __importDefault(require("../any/call"));
    class Callback {
        constructor(value, argument) {
            this.value = value;
            this.argument = argument;
        }
        get return() {
            return call_1.default(this);
        }
    }
    exports.default = Callback;
});
//# sourceMappingURL=callback.js.map