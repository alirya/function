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
     * Construct {@link Argument} with compatible object
     * @param data
     */
    function ArgumentObject(data) {
        return argument_1.default(data.parameter, data.type);
    }
    exports.default = ArgumentObject;
});
//# sourceMappingURL=argument-object.js.map