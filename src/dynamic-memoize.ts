import Equal from "@dikac/t-array/boolean/equal";

import Argument from "./argument/argument";
import Returns from "./returns/returns";
import Functions from "./functions";
import Find from "./argument/find";
import {DynamicMemoizeContainer} from "./object/dynamic-memoize-container";
import Merge from "@dikac/t-object/merge";

export default function DynamicMemoize<
    Fn extends Functions,
>(
    callable : Fn,
    compareArguments : Functions<[Parameters<Fn>, Parameters<Fn>], boolean> = Equal
) : Fn & DynamicMemoizeContainer<Fn> {

    let container = new DynamicMemoizeContainer<Fn>(callable, compareArguments);

    let merged : DynamicMemoizeContainer<Fn> & Fn ;

    let fn : Fn = <Fn> function (... argument : Parameters<Fn>) : ReturnType<Fn> {

        let object = merged.get(argument);

        if(!object) {

            object = merged.call(argument);

            merged.memoized.push(object);

        }


        return object.return;
    };

    merged = <DynamicMemoizeContainer<Fn> & Fn> Merge(fn, container);

    return merged;
}


export class Container<Fn extends (...argument : Arg) => Return, Arg extends any[], Return> {

    readonly ios : (Argument<Arg> & Returns<Return>)[] = [];

    constructor(
        private compare : (cached : Arg, argument : Arg) => boolean
    ) {

    }

    call(fn : Fn , argument : Arg) : Argument<Arg> & Returns<Return> {

        let io = this.get(argument);

        if(io === null) {

            io = {
                argument : argument,
                return : fn(...argument)
            };

            this.ios.push(io);

        }

        return io;
    }

    get(argument : Arg) : (Argument<Arg> & Returns<Return>)|null {


        return Find(this.ios, argument, this.compare, null);
        //
        // for(let io of this.ios) {
        //
        //     if(this.compare(io.argument, argument)) {
        //
        //         return io;
        //     }
        // }
        //
        // return null;
    }
}

