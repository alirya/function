import Equal from "@dikac/t-array/boolean/equal";
import Argument from "../argument/argument";
import InferArgument from "../argument/infer/argument";
import Returns from "../returns/returns";
import Functions from "../function";
import Find from "../argument/find";


export class DynamicMemoizeContainer<
    Fn extends Functions,
> {

    readonly memoized : (Argument<Parameters<Fn>> & Returns<ReturnType<Fn>>)[] = [];

    constructor(
        public functions : Fn,
        public compare : Functions<[Parameters<Fn>, Parameters<Fn>], boolean>,
    ) {

    }

    call(argument : Parameters<Fn>) : Argument<Parameters<Fn>> & Returns<ReturnType<Fn>> {

        return {
            argument : argument,
            return : this.functions(...argument)
        };
    }

    get(argument : Parameters<Fn>) : (Argument<Parameters<Fn>> & Returns<ReturnType<Fn>>)|null {

        return Find(this.memoized, argument, this.compare, null);
    }
}

