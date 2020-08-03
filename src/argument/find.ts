import Argument from "./argument";
import InferArgument from "./value/value";

import Function from "../function";

/**
 * Find match {@param argument} in {@param list} value according
 * to {@param validation}
 *
 * return {@param defaults} if no match found
 */
export default function Find<ArgumentT extends Argument, Default>(
    list : Iterable<ArgumentT>,
    argument : InferArgument<ArgumentT>,
    validation : Function<[InferArgument<ArgumentT>, InferArgument<ArgumentT>], boolean>,
    defaults : Default
) : ArgumentT|Default {

    for(const object of list) {

        if(validation(<InferArgument<ArgumentT>>object.argument, argument)) {

            return object;
        }
    }

    return defaults;
}
