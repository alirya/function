import Find from "../argument/find";
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
    get(argument) {
        return Find(this.memoized, argument, this.compare, null);
    }
}
//# sourceMappingURL=dynamic-memoize-container.js.map