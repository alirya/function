import Functions from "../functions";
import Argument from "../argument/argument";
import Returns from "./returns";
import Call from "../any/call";

export default class Callback<
    Fn extends Functions
> implements
    Argument<Parameters<Fn>>,
    Readonly<Returns<ReturnType<Fn>>>
{

    constructor(
        public value : Fn,
        public argument : Parameters<Fn>
    ) {
    }

    get return () : ReturnType<Fn> {

        return Call(this);
    }
}
