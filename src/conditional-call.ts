import Callable from './callable.js';
import Validatable from '@alirya/validatable/validatable.js';
import Argument from './argument/argument.js';

export function ConditionalCallParameters<Callback extends Callable>(
    valid : boolean,
    trueCallback : Callback,
    falseCallback: Callback,
    ...argument : Parameters<Callback>
) : ReturnType<Callback> {

    return (valid
        ? trueCallback(...argument)
        : falseCallback(...argument)
    ) as ReturnType<Callback>;
}


export function ConditionalCallParameter<Callback extends Callable>(
    {
        valid,
        trueCallback,
        falseCallback,
        argument
    } : Validatable & Argument<Parameters<Callback>> & {
        trueCallback : Callback,
        falseCallback: Callback,
    }
) : ReturnType<Callback> {

    return ConditionalCallParameters(valid, trueCallback, falseCallback, ...argument);
}


namespace ConditionalCall {
    export const Parameters = ConditionalCallParameters;
    export const Parameter = ConditionalCallParameter;
}
export default ConditionalCall;
