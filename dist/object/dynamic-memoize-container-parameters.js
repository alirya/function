import Find from "@dikac/t-iterable/value/find-parameters";
export default class DynamicMemoizeContainerParameters {
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
//# sourceMappingURL=dynamic-memoize-container-parameters.js.map