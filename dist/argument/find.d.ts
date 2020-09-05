import Argument from "./argument";
import InferArgument from "./value/value";
/**
 * Find match {@param argument} in {@param list} value according
 * to {@param validation}
 *
 * return {@param defaults} if no match found
 */
export default function Find<Arguments extends Argument, Default>(list: Iterable<Arguments>, argument: InferArgument<Arguments>, validation: (argument: InferArgument<Arguments>, list: InferArgument<Arguments>) => boolean, defaults: Default): Arguments | Default;
