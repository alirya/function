import Argument from "../argument/argument";
import Return from "./return";
import {CallParameter} from "../argument/value/call";
import CallbackInterface from "../callback/callback";
import Callable from "../callable";

export class CallbackParameter<
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

        return <ReturnType<FunctionType>>CallParameter(this.callback, this.argument);
    }
}

export class CallbackObject<FunctionType extends Callable> extends CallbackParameter<FunctionType> {

    constructor({argument, callback} : Argument<Parameters<FunctionType>> & CallbackInterface<FunctionType>) {
        super(callback, argument);
    }
}

namespace Callback {

    export const Parameter = CallbackParameter;
    export const Object = CallbackObject;
}

export default Callback;


