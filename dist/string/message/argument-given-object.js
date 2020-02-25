var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./argument-given"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const argument_given_1 = __importDefault(require("./argument-given"));
    /**
     * Construct {@link ArgumentGiven} with compatible object
     * @param data
     */
    function ArgumentGivenObject(data) {
        return argument_given_1.default(data.parameter, data.type, data.value);
    }
    exports.default = ArgumentGivenObject;
});
//# sourceMappingURL=argument-given-object.js.map