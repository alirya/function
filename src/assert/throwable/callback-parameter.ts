import ArgumentType from '../../argument/argument';
import Message from '@alirya/message/message';
import CallbackParameters from './callback-parameters';


export type CallbackParameterArgument<Arguments extends unknown[], ErrorType extends Error> =
    ArgumentType<Arguments> &
    Message<(a : ArgumentType<Arguments>) => string> &
    {error ?: (message:string)=>ErrorType}
    ;

export default function CallbackParameter<Arguments extends unknown[], ErrorType extends Error>(
    {
        argument,
        message,
        error
    } : CallbackParameterArgument<Arguments, Error>
) : ErrorType;

export default function CallbackParameter<Arguments extends unknown[]>(
    {
        argument,
        message,
    } : CallbackParameterArgument<Arguments, Error>
) : Error;

export default function CallbackParameter<Arguments extends unknown[], ErrorType extends Error>(
    {
        argument,
        message,
        error = (string : string) => new Error(string)
    } : CallbackParameterArgument<Arguments, Error|ErrorType>
) : Error {

    return CallbackParameters(argument, (...argument)=>message({argument}), error);
}

