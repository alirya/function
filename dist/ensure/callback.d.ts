import CallbackParameter, { CallbackParameterArgument } from "./callback-parameter";
import CallbackParameters from "./callback-parameters";
declare namespace Callback {
    const Parameter: typeof CallbackParameter;
    const Parameters: typeof CallbackParameters;
    type Argument<Return extends ValueType, ValueType, ExtraArgument extends unknown[] = unknown[]> = CallbackParameterArgument<Return, ValueType, ExtraArgument>;
}
export default Callback;
