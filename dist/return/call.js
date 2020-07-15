var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../argument/any/call"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const call_1 = __importDefault(require("../argument/any/call"));
    /**
     * Use {@link ArgumentInterface} as argument to call function form {@link Value}
     * and set return value to {@link Return}
     */
    function Call(object) {
        object.return = call_1.default(object);
        return object;
    }
    exports.default = Call;
});
//# sourceMappingURL=call.js.map