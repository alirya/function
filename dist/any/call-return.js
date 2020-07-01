var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./call"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const call_1 = __importDefault(require("./call"));
    /**
     * Use {@link Argument} as argument to call function form {@link Value}
     * and set return value to {@link Returns}
     */
    function CallReturn(object) {
        object.return = call_1.default(object);
        return object.return;
    }
    exports.default = CallReturn;
});
//# sourceMappingURL=call-return.js.map