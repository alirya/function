import Io from "./io/io";
import Equal from "@dikac/t-array/boolean/equal";
import Mixin from "@dikac/t-object/mixin";

export default function DynamicMemoize<
    Fn extends (...argument : Arg) => Return,
    Arg extends any[],
    Return
>(
    callable : Fn,
    compareArguments : (cached : Arg, argument : Arg) => boolean = Equal
) : Fn & Container<Fn, Arg, Return> {

    let container = new Container<Fn, Arg, Return>(compareArguments);

    let fn = function (... argument : Arg) : Return {

        return container.call(callable, argument).return;
    };


    return <Fn & Container<Fn, Arg, Return>> Object.assign(fn, container, {call : container.call, get : container.get});
}



export class Container<Fn extends (...argument : Arg) => Return, Arg extends any[], Return> {

    readonly ios : Io<Arg, Return>[] = [];

    constructor(
        private compare : (cached : Arg, argument : Arg) => boolean
    ) {

    }

    call(fn : Fn , argument : Arg) : Io<Arg, Return> {

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

    get(argument : Arg) : Io<Arg, Return>|null {

        for(let io of this.ios) {

            if(this.compare(io.argument, argument)) {

                return io;
            }
        }

        return null;
    }



}

