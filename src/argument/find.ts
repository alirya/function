import Argument from "./argument";
import InferArgument from "./value/value";

import Function from "../function";

/**
 * Find match {@param argument} in {@param list} value according
 * to {@param validation}
 *
 * return {@param defaults} if no match found
 */
export default function Find<Object extends Argument, Default>(
    list : Iterable<Object>,
    argument : InferArgument<Object>,
    validation : Function<[InferArgument<Object>, InferArgument<Object>], boolean>,
    defaults : Default
) : Object|Default {

    for(let object of list) {

        if(validation(<InferArgument<Object>>object.argument, argument)) {

            return object;
        }
    }

    return defaults;
}
