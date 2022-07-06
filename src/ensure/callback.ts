import Assert from '../assert/callback.js';
import Validation from '@alirya/boolean/validation/validation.js';
import ArgumentContainer from '../argument/argument.js';
import Value from '@alirya/value/value.js';

/**
 * Throw exception from {@param error} if given {@param value} is not valid according
 * to {@param validation}
 *
 * This can be use to create type assertion
 *
 * @param value
 * @param validation
 * @param error
 * @param argument
 * extra argument for both {@param argument} & {@param error}
 */
export function CallbackParameters<
    Return extends ValueType,
    ValueType,
    ExtraArgument extends unknown[] = unknown[]
>(
    value : ValueType,
    validation : (value : ValueType, ...args : ExtraArgument) => boolean,
    error : (value : ValueType, ...args : ExtraArgument) => Error,
    ...argument : ExtraArgument
) : Return {

    Assert.Parameters(value, validation, error, ...argument);

    return <Return> value;
}


export type CallbackArgument<
    Return extends ValueType,
    ValueType,
    ExtraArgument extends unknown[] = unknown[]
> =
    Validation<[ValueType, ...ExtraArgument], boolean> &
    {error:(value : ValueType, ...args : ExtraArgument) => Error} &
    ArgumentContainer<ExtraArgument> &
    Value<ValueType>;
/**
 * object destructure version
 *
 * @param value
 * @param validation
 * @param error
 * @param argument
 */
export function CallbackParameter<
    Return extends Value,
    Value,
    ExtraArgument extends unknown[] = unknown[]
> ({value, validation, error, argument} : CallbackArgument<Return, Value, ExtraArgument>) {

    return CallbackParameters(value, validation, error, ...argument);
}



namespace Callback {
    export const Parameters = CallbackParameters;
    export const Parameter = CallbackParameter;
    export type Argument<
        Return extends ValueType,
        ValueType,
        ExtraArgument extends unknown[] = unknown[]
    > = CallbackArgument<
        Return,
        ValueType,
        ExtraArgument
    >;
}
export default Callback;
