import Argument from "./argument";
import Callback from "../callback/callback";
/**
 * container for function argument & function
 */
export default class Value<Return, Arguments extends unknown[]> implements Readonly<Callback<(...args: Arguments) => Return>>, Argument<Arguments> {
    argument: Arguments;
    callback: (...argument: Arguments) => Return;
    constructor(argument: Arguments, callback: (...argument: Arguments) => Return);
}
