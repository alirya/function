import ArgumentType from "../../argument/argument";
import Message from "@dikac/t-message/message";
import Validatable from "@dikac/t-validatable/validatable";
export declare function CallbackParameter<Arguments extends unknown[], ErrorType extends Error>(argument: Arguments, message: (valid: boolean, ...argument: Arguments) => string, error: (message: string) => ErrorType): ErrorType;
export declare function CallbackParameter<Arguments extends unknown[]>(argument: Arguments, message: (valid: boolean, ...argument: Arguments) => string): Error;
declare type Argument<Arguments extends unknown[], ErrorType extends Error> = ArgumentType<Arguments> & Message<(a: Validatable & ArgumentType<Arguments>) => string> & {
    error?: (message: string) => ErrorType;
};
export declare function CallbackObject<Arguments extends unknown[], ErrorType extends Error>({ argument, message, error }: Argument<Arguments, Error>): ErrorType;
export declare function CallbackObject<Arguments extends unknown[]>({ argument, message, }: Argument<Arguments, Error>): Error;
declare namespace Callback {
    const Parameter: typeof CallbackParameter;
    const Object: typeof CallbackObject;
}
export default Callback;
