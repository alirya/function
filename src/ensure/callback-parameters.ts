import Assert from '../assert/callback-parameters';

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
export default function CallbackParameters<
    Return extends ValueType,
    ValueType,
    ExtraArgument extends unknown[] = unknown[]
>(
    value : ValueType,
    validation : (value : ValueType, ...args : ExtraArgument) => boolean,
    error : (value : ValueType, ...args : ExtraArgument) => Error,
    ...argument : ExtraArgument
) : Return {

    Assert(value, validation, error, ...argument);

    return <Return> value;
}
