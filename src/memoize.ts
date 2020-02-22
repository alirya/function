import Io from "./io/io";
import Equal from "@dikac/t-array/boolean/equal";
import Mixin from "@dikac/t-object/mixin";

export default function Memoize<
    Fn extends (...argument : Arg) => Return,
    Arg extends any[],
    Return
>(
    callable : Fn,
    ...argument : Arg
) : () => Return {

    let data : undefined|{return: Return};

    return function () {

        if(data === undefined) {

            data = {return:callable(...argument)}
        }

        return data.return;

    }

}


