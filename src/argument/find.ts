import Argument from "./argument";
import InferArgument from "./value/value";
/**
 * Find match {@param argument} in {@param list} value according
 * to {@param validation}
 *
 * return {@param defaults} if no match found
 */
export default function Find<ArgumentT extends Argument, Default>(
    list : Iterable<ArgumentT>,
    argument : InferArgument<ArgumentT>,
    validation : (argument : InferArgument<ArgumentT>, list : InferArgument<ArgumentT>) => boolean,
    defaults : Default
) : ArgumentT|Default {

    for(const object of list) {

        if(validation(argument, <InferArgument<ArgumentT>>object.argument)) {

            return object;
        }
    }

    return defaults;
}
