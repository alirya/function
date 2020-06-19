import ValueInterface from "@dikac/t-value/value";
import Argument from "./argument";
import Functions from "../functions";
export default class Value<Return, Arguments extends any[]> implements Readonly<ValueInterface<Functions<Arguments, Return>>>, Argument<Arguments> {
    argument: Arguments;
    value: (...argument: Arguments) => Return;
    constructor(argument: Arguments, value: (...argument: Arguments) => Return);
}
