import ValueInterface from "@dikac/t-value/value";
import Argument from "./argument";
import Function from "../function";

/**
 * container for function argument & function
 */
export default class Value<
    Return, Arguments extends any[]
> implements
    Readonly<ValueInterface<Function<Arguments, Return>>>,
    Argument<Arguments>
{
    constructor(
        public argument : Arguments,
        public value : (...argument : Arguments) => Return
    ) {
    }
}
