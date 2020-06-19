import ValueInterface from "@dikac/t-value/value";
import Argument from "./argument";
import Functions from "../functions";

export default class Value<
    Return, Arguments extends any[]
> implements
    Readonly<ValueInterface<Functions<Arguments, Return>>>,
    Argument<Arguments>
{
    constructor(
        public argument : Arguments,
        public value : (...argument : Arguments) => Return
    ) {
    }
}
