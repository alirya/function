import CallbackParameter from "./callback-parameter";
import CallbackParameters, {CallbackParametersType} from "./callback-parameters";
import Callable from "../callable";

namespace Callback {

    export const Parameter = CallbackParameter;
    export const Parameters = CallbackParameters;
    export type Type<FunctionType extends Callable> = CallbackParametersType<FunctionType>;
}

export default Callback;


