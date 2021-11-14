import Callable from "./callable";
import DynamicMemoizeParameters from "./dynamic-memoize-parameters";
import DynamicMemoizeParameter, { DynamicMemoizeParameterArgument } from "./dynamic-memoize-parameter";
declare namespace DynamicMemoize {
    const Parameters: typeof DynamicMemoizeParameters;
    const Parameter: typeof DynamicMemoizeParameter;
    type Argument<FunctionType extends Callable> = DynamicMemoizeParameterArgument<FunctionType>;
}
export default DynamicMemoize;
