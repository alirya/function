import CallbackParameter from "./callback-parameter";
import CallbackParameters, { CallbackParametersType } from "./callback-parameters";
import Callable from "../callable";
declare namespace Callback {
    const Parameter: typeof CallbackParameter;
    const Parameters: typeof CallbackParameters;
    type Type<FunctionType extends Callable> = CallbackParametersType<FunctionType>;
}
export default Callback;
