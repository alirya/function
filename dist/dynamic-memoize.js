import Equal from "@dikac/t-array/boolean/equal";
import DynamicMemoizeContainer from "./object/dynamic-memoize-container";
export default function DynamicMemoize(callback, validation = Equal) {
    const memoizeContainer = new DynamicMemoizeContainer(callback, validation);
    const callable = function (...argument) {
        return memoizeContainer.memoize(argument).return;
    };
    callable.container = memoizeContainer;
    return callable;
}
DynamicMemoize.object = function ({ callback, validation, }) {
    return DynamicMemoize(callback, validation);
};
//# sourceMappingURL=dynamic-memoize.js.map