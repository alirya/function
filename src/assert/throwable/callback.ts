import ArgumentType from "../../argument/argument";
import Message from "@dikac/t-message/message";
import Validatable from "@dikac/t-validatable/validatable";


export function CallbackParameter<Arguments extends unknown[], ErrorType extends Error>(
    argument : Arguments,
    message : (valid:boolean, ...argument:Arguments) => string,
    error : (message:string)=>ErrorType,
) : ErrorType;

export function CallbackParameter<Arguments extends unknown[]>(
    argument : Arguments,
    message : (valid:boolean, ...argument:Arguments) => string,
) : Error;

export function CallbackParameter<Arguments extends unknown[]>(
    argument : Arguments,
    message : (valid:boolean, ...argument:Arguments) => string,
    error : (message:string)=>Error = (string : string) => new Error(string),
) : Error {

    return error(message(false, ...argument));
}



type Argument<Arguments extends unknown[], ErrorType extends Error> =
    ArgumentType<Arguments> &
    Message<(a : Validatable & ArgumentType<Arguments>) => string> &
    {error ?: (message:string)=>ErrorType}
    ;

export function CallbackObject<Arguments extends unknown[], ErrorType extends Error>(
    {
        argument,
        message,
        error
    } : Argument<Arguments, Error>
) : ErrorType;

export function CallbackObject<Arguments extends unknown[]>(
    {
        argument,
        message,
    } : Argument<Arguments, Error>
) : Error;

export function CallbackObject<Arguments extends unknown[], ErrorType extends Error>(
    {
        argument,
        message,
        error = (string : string) => new Error(string)
    } : Argument<Arguments, Error|ErrorType>
) : Error {

    return error(message({valid:false, argument}));
}


namespace Callback {

    export const Parameter = CallbackParameter;
    export const Object = CallbackObject;
}

export default Callback;
