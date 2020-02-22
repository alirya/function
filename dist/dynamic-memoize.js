var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-array/boolean/equal"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const equal_1 = __importDefault(require("@dikac/t-array/boolean/equal"));
    function DynamicMemoize(callable, compareArguments = equal_1.default) {
        let container = new Container(compareArguments);
        let fn = function (...argument) {
            return container.call(callable, argument).return;
        };
        return Object.assign(fn, container, { call: container.call, get: container.get });
    }
    exports.default = DynamicMemoize;
    class Container {
        constructor(compare) {
            this.compare = compare;
            this.ios = [];
        }
        call(fn, argument) {
            let io = this.get(argument);
            if (io === null) {
                io = {
                    argument: argument,
                    return: fn(...argument)
                };
                this.ios.push(io);
            }
            return io;
        }
        get(argument) {
            for (let io of this.ios) {
                if (this.compare(io.argument, argument)) {
                    return io;
                }
            }
            return null;
        }
    }
    exports.Container = Container;
});
//# sourceMappingURL=dynamic-memoize.js.map