import Equal from "@dikac/t-array/boolean/equal";
import { DynamicMemoizeContainerParameter as Container } from "./object/dynamic-memoize-container";
export function DynamicMemoizeParameter(callback, validation = Equal) {
    const memoizeContainer = new Container(callback, validation);
    const callable = function (...argument) {
        return memoizeContainer.memoize(argument).return;
    };
    callable.container = memoizeContainer;
    return callable;
}
export function DynamicMemoizeObject({ callback, validation, }) {
    return DynamicMemoizeParameter(callback, validation);
}
var DynamicMemoize;
(function (DynamicMemoize) {
    DynamicMemoize.Parameter = DynamicMemoizeParameter;
    DynamicMemoize.Object = DynamicMemoizeObject;
})(DynamicMemoize || (DynamicMemoize = {}));
export default DynamicMemoize;
//# sourceMappingURL=dynamic-memoize.js.map