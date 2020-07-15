import Argument from "../argument/argument";
import Return from "./return";
import Call from "../argument/any/call";
import Value from "@dikac/t-value/value";
import Function from "../function";

export default class Callback<
    Fn extends Function
> implements
    Readonly<Argument<Parameters<Fn>>>,
    Readonly<Return<ReturnType<Fn>>>
{

    constructor(
        public subject : Argument<Parameters<Fn>> & Value<Fn>
    ) {
    }

    get return () : ReturnType<Fn> {

        return Call(this);
    }

    get argument() : Parameters<Fn> {

        return this.subject.argument;

    }

    get value() : Fn  {

        return this.subject.value;

    }
}
