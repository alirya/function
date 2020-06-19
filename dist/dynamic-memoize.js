var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-array/boolean/equal", "./argument/find", "./object/dynamic-memoize-container", "@dikac/t-object/merge"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const equal_1 = __importDefault(require("@dikac/t-array/boolean/equal"));
    const find_1 = __importDefault(require("./argument/find"));
    const dynamic_memoize_container_1 = require("./object/dynamic-memoize-container");
    const merge_1 = __importDefault(require("@dikac/t-object/merge"));
    function DynamicMemoize(callable, compareArguments = equal_1.default) {
        let container = new dynamic_memoize_container_1.DynamicMemoizeContainer(callable, compareArguments);
        let merged;
        let fn = function (...argument) {
            let object = merged.get(argument);
            if (!object) {
                object = merged.call(argument);
                merged.memoized.push(object);
            }
            return object.return;
        };
        merged = merge_1.default(fn, container);
        return merged;
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
            return find_1.default(this.ios, argument, this.compare, null);
            //
            // for(let io of this.ios) {
            //
            //     if(this.compare(io.argument, argument)) {
            //
            //         return io;
            //     }
            // }
            //
            // return null;
        }
    }
    exports.Container = Container;
});
//# sourceMappingURL=dynamic-memoize.js.map