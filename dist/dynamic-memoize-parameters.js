import Equal from "@dikac/t-array/boolean/equal";
import Container from "./object/dynamic-memoize-container-parameters";
export default function DynamicMemoizeParameters(callback, 
// validation : Callable<[Parameters<FunctionType>, Parameters<FunctionType>], boolean> = Equal,
//validation : Callable<[Parameters<FunctionType>, Parameters<FunctionType>], boolean> = Equal,
validation = Equal) {
    const memoizeContainer = new Container(callback, validation);
    const callable = function (...argument) {
        return memoizeContainer.memoize(argument).return;
    };
    callable.container = memoizeContainer;
    return callable;
}
//# sourceMappingURL=dynamic-memoize-parameters.js.map