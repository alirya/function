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
    class Call {
        constructor(messageFactory, argument) {
            this.messageFactory = messageFactory;
            this.argument = argument;
        }
        get message() {
            return this.messageFactory(...this.argument);
        }
    }
    exports.default = Call;
});
//# sourceMappingURL=call.js.map