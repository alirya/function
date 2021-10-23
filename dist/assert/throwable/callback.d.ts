import ArgumentType from "../../argument/argument";
import Message from "@dikac/t-message/message";
import Validatable from "@dikac/t-validatable/validatable";
declare function Callback<Arguments extends unknown[], ErrorType extends Error>(argument: Arguments, message: (valid: boolean, ...argument: Arguments) => string, error: (message: string) => ErrorType): ErrorType;
declare namespace Callback {
    var object: typeof CallbackObject;
}
export default Callback;
declare function Callback<Arguments extends unknown[]>(argument: Arguments, message: (valid: boolean, ...argument: Arguments) => string): Error;
declare namespace Callback {
    var object: typeof CallbackObject;
}
export default Callback;
declare type Argument<Arguments extends unknown[], ErrorType extends Error> = ArgumentType<Arguments> & Message<(a: Validatable & ArgumentType<Arguments>) => string> & {
    error?: (message: string) => ErrorType;
};
declare function CallbackObject<Arguments extends unknown[], ErrorType extends Error>({ argument, message, error }: Argument<Arguments, Error>): ErrorType;
declare function CallbackObject<Arguments extends unknown[]>({ argument, message, }: Argument<Arguments, Error>): Error;
