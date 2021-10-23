import Find from "@dikac/t-iterable/value/find";
export default class DynamicMemoizeContainer {
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
class DynamicMemoizeContainerObject extends DynamicMemoizeContainer {
    constructor({ callback, validation }) {
        super(callback, validation);
    }
}
DynamicMemoizeContainer.object = DynamicMemoizeContainerObject;
//# sourceMappingURL=dynamic-memoize-container.js.map