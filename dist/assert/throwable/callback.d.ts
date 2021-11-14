import CallbackParameter, { CallbackParameterArgument } from "./callback-parameter";
import CallbackParameters from "./callback-parameters";
declare namespace Callback {
    const Parameter: typeof CallbackParameter;
    const Parameters: typeof CallbackParameters;
    type Argument<Arguments extends unknown[], ErrorType extends Error> = CallbackParameterArgument<Arguments, ErrorType>;
}
export default Callback;
