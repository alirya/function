export default function CallbackParameters<Arguments extends unknown[], ErrorType extends Error>(
    argument : Arguments,
    message : (...argument:Arguments) => string,
    error : (message:string)=>ErrorType,
) : ErrorType;

export default function CallbackParameters<Arguments extends unknown[]>(
    argument : Arguments,
    message : (...argument:Arguments) => string,
) : Error;

export default function CallbackParameters<Arguments extends unknown[]>(
    argument : Arguments,
    message : (...argument:Arguments) => string,
    error : (message:string)=>Error = (string : string) => new Error(string),
) : Error {

    return error(message(...argument));
}

