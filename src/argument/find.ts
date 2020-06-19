import Argument from "./argument";
import InferArgument from "./infer/argument";
import InferReturn from "../returns/infer/returns";

import Functions from "../function";

/**
 * Find match {@param argument} in {@param list} value according
 * to {@param validation}
 *
 * return {@param defaults} if no match found
 */
export default function Find<Object extends Argument, Default>(
    list : Iterable<Object>,
    argument : InferArgument<Object>,
    validation : Functions<[InferArgument<Object>, InferArgument<Object>], boolean>,
    defaults : Default
) : Object|Default {

    for(let object of list) {

        if(validation(<InferArgument<Object>>object.argument, argument)) {

            return object;
        }
    }

    return defaults;
}
