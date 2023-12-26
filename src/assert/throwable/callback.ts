import ArgumentType from '../../argument/argument.js';
import Message from '@axiona/message/message.js';
export function CallbackParameters<Arguments extends unknown[], ErrorType extends Error>(
    argument : Arguments,
    message : (...argument:Arguments) => string,
    error : (message:string)=>ErrorType,
) : ErrorType;

export function CallbackParameters<Arguments extends unknown[]>(
    argument : Arguments,
    message : (...argument:Arguments) => string,
) : Error;

export function CallbackParameters<Arguments extends unknown[]>(
    argument : Arguments,
    message : (...argument:Arguments) => string,
    error : (message:string)=>Error = (string : string) => new Error(string),
) : Error {

    return error(message(...argument));
}



export type CallbackArgument<Arguments extends unknown[], ErrorType extends Error> =
    ArgumentType<Arguments> &
    Message<(a : ArgumentType<Arguments>) => string> &
    {error ?: (message:string)=>ErrorType}
    ;

export function CallbackParameter<Arguments extends unknown[], ErrorType extends Error>(
    {
        argument,
        message,
        error
    } : CallbackArgument<Arguments, Error>
) : ErrorType;

export function CallbackParameter<Arguments extends unknown[]>(
    {
        argument,
        message,
    } : CallbackArgument<Arguments, Error>
) : Error;

export function CallbackParameter<Arguments extends unknown[], ErrorType extends Error>(
    {
        argument,
        message,
        error = (string : string) => new Error(string)
    } : CallbackArgument<Arguments, Error|ErrorType>
) : Error {

    return CallbackParameters(argument, (...argument)=>message({argument}), error);
}



namespace Callback {
    export const Parameters = CallbackParameters;
    export const Parameter = CallbackParameter;
    export type Argument<Arguments extends unknown[], ErrorType extends Error> = CallbackArgument<Arguments, ErrorType>;
}
export default Callback;
