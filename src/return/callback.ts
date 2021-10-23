import Argument from "../argument/argument";
import Return from "./return";
import Call from "../argument/value/call";
import CallbackInterface from "../callback/callback";
import Callable from "../callable";

export default class Callback<
    FunctionType extends Callable
> implements
    Argument<Parameters<FunctionType>>,
    Return<ReturnType<FunctionType>>
{

    static object = class<FunctionType extends Callable> extends Callback<FunctionType> {

        constructor({argument, callback} : Argument<Parameters<FunctionType>> & CallbackInterface<FunctionType>) {
            super(callback, argument);
        }
    }

    constructor(
        public callback  : FunctionType,
        public argument : Parameters<FunctionType>,
    ) {
    }

    get return () : ReturnType<FunctionType> {

        return <ReturnType<FunctionType>>Call(this.callback, this.argument);
    }

}
