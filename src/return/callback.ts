import Functions from "../functions";
import Argument from "../argument/argument";
import Returns from "./returns";
import Call from "../any/call";
import Value from "@dikac/t-value/value";

export default class Callback<
    Fn extends Functions
> implements
    Readonly<Argument<Parameters<Fn>>>,
    Readonly<Returns<ReturnType<Fn>>>
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
