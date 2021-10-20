import Argument from "../argument/argument";
import Return from "./return";
import Call from "../argument/value/call";
import CallbackInterface from "../callback/callback";
import Callable from "../callable";

export default class Callback<
    FunctionType extends Callable
> implements
    Readonly<Argument<Parameters<FunctionType>>>,
    Readonly<Return<ReturnType<FunctionType>>>
{
    constructor(
        public subject : Argument<Parameters<FunctionType>> & CallbackInterface<FunctionType>
    ) {
    }

    get return () : ReturnType<FunctionType> {

        return <ReturnType<FunctionType>>Call(this.subject);
    }

    get argument() : Parameters<FunctionType> {

        return this.subject.argument;
    }

    get callback() : FunctionType  {

        return this.subject.callback;
    }
}
