import Argument from "../argument/argument";
import Return from "./return";
import Call from "../argument/any/call";
import Function from "../function";
import CallbackInterface from "../callback/callback";

export default class Callback<
    Fn extends Function
> implements
    Readonly<Argument<Parameters<Fn>>>,
    Readonly<Return<ReturnType<Fn>>>
{

    constructor(
        public subject : Argument<Parameters<Fn>> & CallbackInterface<Fn>
    ) {
    }

    get return () : ReturnType<Fn> {

        return <ReturnType<Fn>>Call(this);
    }

    get argument() : Parameters<Fn> {

        return this.subject.argument;

    }

    get callback() : Fn  {

        return this.subject.callback;

    }
}
