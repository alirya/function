import CallbackParameter, {CallbackParameterArgument} from "./callback-parameter";
import CallbackParameters from "./callback-parameters";
namespace Callback {

    export const Parameter = CallbackParameter;
    export const Parameters = CallbackParameters;
    export type Argument<Arguments extends unknown[], ErrorType extends Error> =
        CallbackParameterArgument<Arguments, ErrorType>;
}

export default Callback;
