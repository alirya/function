import Argument from "./argument";
import Function from "../function";
import Callback from "../callback/callback";
/**
 * container for function argument & function
 */
export default class Value<Return, Arguments extends unknown[]> implements Readonly<Callback<Function<Arguments, Return>>>, Argument<Arguments> {
    argument: Arguments;
    callback: (...argument: Arguments) => Return;
    constructor(argument: Arguments, callback: (...argument: Arguments) => Return);
}
