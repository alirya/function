import CallbackParameter, {CallbackParameterArgument} from "./callback-parameter";
import CallbackParameters from "./callback-parameters";

namespace Callback {

    export const Parameter = CallbackParameter;
    export const Parameters = CallbackParameters;
    export type Argument<Return extends ValueType, ValueType, ExtraArgument extends unknown[] = unknown[]> =
        CallbackParameterArgument<Return, ValueType, ExtraArgument>;
}

export default Callback;
