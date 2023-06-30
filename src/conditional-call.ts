import Callable from './callable.js';

export function ConditionalCallParameters<Arguments extends unknown[], Return> (
    condition : Callable<Arguments, boolean>,
    valid : Callable<Arguments, Return>,
    invalid: Callable<Arguments, Return>,
) : Callable<Arguments, Return> {

    return function (...argument : Arguments) : Return {

            return condition(...argument)
                ? valid(...argument)
                : invalid(...argument);
    };
}

export type ConditionalCallArgument<Arguments extends unknown[], Return> = {
    condition : Callable<Arguments, boolean>,
    valid : Callable<Arguments, Return>,
    invalid: Callable<Arguments, Return>,
}


export function ConditionalCallParameter<Arguments extends unknown[], Return>(
    {
        condition,
        valid,
        invalid,
    } : ConditionalCallArgument<Arguments, Return>
) : Callable<Arguments, Return> {

    return ConditionalCallParameters(condition, valid, invalid);
}


namespace ConditionalCall {
    export const Parameters = ConditionalCallParameters;
    export const Parameter = ConditionalCallParameter;
}
export default ConditionalCall;
