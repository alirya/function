import CallbackParameters from "./callback-parameters";
import CallbackParameter, { CallbackParameterArgument } from "./callback-parameter";
declare namespace Callback {
    const Parameters: typeof CallbackParameters;
    const Parameter: typeof CallbackParameter;
    type Argument<ValueType, Arguments extends unknown[] = unknown[]> = CallbackParameterArgument<ValueType, Arguments>;
}
export default Callback;
