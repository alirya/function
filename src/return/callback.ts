import Argument from "../argument/argument";
import Return from "./return";
import Call from "../argument/value/call";
import Function from "../function";
import CallbackInterface from "../callback/callback";

export default class Callback<
    FunctionT extends Function
> implements
    Readonly<Argument<Parameters<FunctionT>>>,
    Readonly<Return<ReturnType<FunctionT>>>
{

    constructor(
        public subject : Argument<Parameters<FunctionT>> & CallbackInterface<FunctionT>
    ) {
    }

    get return () : ReturnType<FunctionT> {

        return <ReturnType<FunctionT>>Call(this);
    }

    get argument() : Parameters<FunctionT> {

        return this.subject.argument;

    }

    get callback() : FunctionT  {

        return this.subject.callback;

    }
}
