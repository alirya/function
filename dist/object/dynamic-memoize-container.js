import Find from "@dikac/t-iterable/value/find";
export class DynamicMemoizeContainerParameter {
    constructor(callback, validation) {
        this.callback = callback;
        this.validation = validation;
        this.memoized = [];
    }
    call(argument) {
        return {
            argument: argument,
            return: this.callback(...argument)
        };
    }
    memoize(argument) {
        let memoized = this.get(argument);
        if (!memoized) {
            memoized = this.call(argument);
            this.memoized.push(memoized);
        }
        return memoized;
    }
    get(argument) {
        return Find(this.memoized, (memoized) => this.validation(argument, memoized.argument), null);
    }
}
export class DynamicMemoizeContainerObject extends DynamicMemoizeContainerParameter {
    constructor({ callback, validation }) {
        super(callback, validation);
    }
}
var DynamicMemoizeContainer;
(function (DynamicMemoizeContainer) {
    DynamicMemoizeContainer.Parameter = DynamicMemoizeContainerParameter;
    DynamicMemoizeContainer.Object = DynamicMemoizeContainerObject;
})(DynamicMemoizeContainer || (DynamicMemoizeContainer = {}));
export default DynamicMemoizeContainer;
//# sourceMappingURL=dynamic-memoize-container.js.map