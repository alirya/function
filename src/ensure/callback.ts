import AssertCallback from "../assert/callback";
import Validation from "@dikac/t-boolean/validation/validation";
import Parameter from "../parameter/parameter";
import ArgumentContainer from "../argument/argument";
import ValueOf from "@dikac/t-value/value-of/value-of";
import Value from "@dikac/t-value/value";

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
export default function Callback<
    Return extends ValueType,
    ValueType,
    ExtraArgument extends unknown[] = unknown[]
>(
    value : ValueType,
    validation : (value : ValueType, ...args : ExtraArgument) => boolean,
    error : (value : ValueType, ...args : ExtraArgument) => Error,
    ...argument : ExtraArgument
) : Return {

    AssertCallback(value, validation, error, ...argument);

    return <Return> value;
}

export type ObjectArgument<
    Return extends ValueType,
    ValueType,
    ExtraArgument extends unknown[] = unknown[]
> =
    Validation<[ValueType, ...ExtraArgument], boolean> &
    {error:(value : ValueType, ...args : ExtraArgument) => Error} &
    ArgumentContainer<ExtraArgument> &
    Value<ValueType>
/**
 * object destructure version
 *
 * @param value
 * @param validation
 * @param error
 * @param argument
 */
Callback.object = function<
    Return extends Value,
    Value,
    ExtraArgument extends unknown[] = unknown[]
> ({value, validation, error, argument} : ObjectArgument<Return, Value, ExtraArgument>) {

    return Callback(value, validation, error, ...argument);
}
