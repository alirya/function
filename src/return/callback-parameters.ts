import Argument from "../argument/argument";
import Return from "./return";
import CallParameter from "../argument/value/call";
import Callable from "../callable";

export type CallbackParametersType<FunctionType extends Callable> =
    Argument<Parameters<FunctionType>> & Return<ReturnType<FunctionType>>

export default class CallbackParameters<
    FunctionType extends Callable
> implements
    Argument<Parameters<FunctionType>>,
    Return<ReturnType<FunctionType>>
{
    constructor(
        public callback  : FunctionType,
        public argument : Parameters<FunctionType>,
    ) {
    }

    get return () : ReturnType<FunctionType> {

        return <ReturnType<FunctionType>>CallParameter.Parameters(this.callback, this.argument);
    }
}


