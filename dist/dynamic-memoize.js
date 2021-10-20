import Equal from "@dikac/t-array/boolean/equal";
import DynamicMemoizeContainer from "./object/dynamic-memoize-container";
export default function DynamicMemoize({ callback, validation = Equal, container = false }) {
    const memoizeContainer = new DynamicMemoizeContainer(callback, validation);
    const callable = function (...argument) {
        return memoizeContainer.memoize(argument).return;
    };
    return container ? [callable, memoizeContainer] : callable;
}
//# sourceMappingURL=dynamic-memoize.js.map