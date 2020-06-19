
import Equal from "@dikac/t-array/boolean/equal";
import Functions from "./function";
import MemoizeCallable from "./value/memoize";
import Merge from "@dikac/t-object/merge";


export default function Memoize<
    Fn extends Functions,
>(
    callable : Fn,
    ...argument : Parameters<Fn>
) : Functions<[], ReturnType<Fn>> & MemoizeCallable<Fn> {

    let merged : Functions<[], ReturnType<Fn>> & MemoizeCallable<Fn>;

    let memoize = new MemoizeCallable(callable, argument)

    let fn = function () : ReturnType<Fn> {

        return merged.value;
    }

    merged = Merge(fn, memoize);

    return merged;

}


