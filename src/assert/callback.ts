import CallbackParameters from "./callback-parameters";
import CallbackParameter, {CallbackParameterArgument} from "./callback-parameter";

namespace Callback {

    export const Parameters = CallbackParameters;
    export const Parameter = CallbackParameter;
    export type Argument<ValueType, Arguments extends unknown[] = unknown[]> = CallbackParameterArgument<ValueType, Arguments>;
}

export default Callback;
