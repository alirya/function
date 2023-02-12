import Argument from '../argument/argument.js';
import Return from './return.js';
import CallParameter from '../argument/value/call.js';
import Callable from '../callable.js';
import CallbackInterface from '../callback/callback.js';

export type CallbackType<FunctionType extends Callable> =
    Argument<Parameters<FunctionType>> & Return<ReturnType<FunctionType>>;

export class CallbackParameters<
    FunctionType extends Callable
> implements CallbackType<FunctionType>
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


export class CallbackParameter<FunctionType extends Callable> extends CallbackParameters<FunctionType> {

    constructor({argument, callback} : Argument<Parameters<FunctionType>> & CallbackInterface<FunctionType>) {
        super(callback, argument);
    }
}


namespace Callback {
    export const Parameters = CallbackParameters;
    export const Parameter = CallbackParameter;
}
export default Callback;
