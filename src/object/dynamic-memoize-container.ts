import Callable from "../callable";
import DynamicMemoizeContainerParameters from "./dynamic-memoize-container-parameters";
import DynamicMemoizeContainerParameter, {DynamicMemoizeContainerParameterArgument} from "./dynamic-memoize-container-parameter";

namespace DynamicMemoizeContainer {

    export type Argument<CallbackType extends Callable>  = DynamicMemoizeContainerParameterArgument<CallbackType>;
    export const Parameter  = DynamicMemoizeContainerParameter;
    export const Parameters  = DynamicMemoizeContainerParameters;
}

export default DynamicMemoizeContainer;
