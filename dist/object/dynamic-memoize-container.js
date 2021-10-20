import Find from "@dikac/t-iterable/value/find";
export default class DynamicMemoizeContainer {
    constructor(functions, compare) {
        this.functions = functions;
        this.compare = compare;
        this.memoized = [];
    }
    call(argument) {
        return {
            argument: argument,
            return: this.functions(...argument)
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
        return Find(this.memoized, (memoized) => this.compare(argument, memoized.argument), null);
    }
}
//# sourceMappingURL=dynamic-memoize-container.js.map