import Value from "@dikac/t-value/value";
import Argument from "../argument/argument";
import Callback from "./callback";
import Functions from "../function";

export default class Memoize<
    Fn extends Functions,
> implements Readonly<Value<ReturnType<Fn>>>, Argument<Parameters<Fn>>
{
    protected memoized : Value<ReturnType<Fn>>|undefined;

    constructor(
        public functions : Fn,
        public argument : Parameters<Fn>
    ) {
        this.clear();
    }

    clear () {

        this.memoized = undefined;
    }


    get valid () : boolean {

        return this.memoized !== undefined;
    }


    get value () : ReturnType<Fn> {

        if(!this.valid) {

            this.memoized = {
                value : this.functions(...this.argument)
            };

        }

        return  (<Value<ReturnType<Fn>>>this.memoized).value;

    }

}
