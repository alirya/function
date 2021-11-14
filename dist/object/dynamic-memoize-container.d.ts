import Callable from "../callable";
import DynamicMemoizeContainerParameters from "./dynamic-memoize-container-parameters";
import DynamicMemoizeContainerParameter, { DynamicMemoizeContainerParameterArgument } from "./dynamic-memoize-container-parameter";
declare namespace DynamicMemoizeContainer {
    type Argument<CallbackType extends Callable> = DynamicMemoizeContainerParameterArgument<CallbackType>;
    const Parameter: typeof DynamicMemoizeContainerParameter;
    const Parameters: typeof DynamicMemoizeContainerParameters;
}
export default DynamicMemoizeContainer;
