import Equal from "@dikac/t-array/boolean/equal";
import DynamicMemoizeContainer from "./object/dynamic-memoize-container";
export default function DynamicMemoize(callable, compareArguments = Equal) {
    let container = new DynamicMemoizeContainer(callable, compareArguments);
    let merged;
    let fn = function (...argument) {
        let object = container.get(argument);
        if (!object) {
            object = container.call(argument);
            container.memoized.push(object);
        }
        return object.return;
    };
    merged = fn;
    merged.container = container;
    return merged;
}
//# sourceMappingURL=dynamic-memoize.js.map