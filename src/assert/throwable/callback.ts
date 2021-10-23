import ArgumentType from "../../argument/argument";
import Message from "@dikac/t-message/message";
import Validatable from "@dikac/t-validatable/validatable";


export default function Callback<Arguments extends unknown[], ErrorType extends Error>(
    argument : Arguments,
    message : (valid:boolean, ...argument:Arguments) => string,
    error : (message:string)=>ErrorType,
) : ErrorType;

export default function Callback<Arguments extends unknown[]>(
    argument : Arguments,
    message : (valid:boolean, ...argument:Arguments) => string,
) : Error;

export default function Callback<Arguments extends unknown[]>(
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

function CallbackObject<Arguments extends unknown[], ErrorType extends Error>(
    {
        argument,
        message,
        error
    } : Argument<Arguments, Error>
) : ErrorType;

function CallbackObject<Arguments extends unknown[]>(
    {
        argument,
        message,
    } : Argument<Arguments, Error>
) : Error;

function CallbackObject<Arguments extends unknown[], ErrorType extends Error>(
    {
        argument,
        message,
        error = (string : string) => new Error(string)
    } : Argument<Arguments, Error|ErrorType>
) : Error {

    return error(message({valid:false, argument}));
}

Callback.object = CallbackObject;
