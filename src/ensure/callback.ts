import AssertCallback from "../assert/callback";
import Validation from "@dikac/t-boolean/validation/validation";
import Parameter from "../parameter/parameter";
import Argument from "../argument/argument";

/**
 * Throw exception from {@param error} if given {@param value} is not valid according
 * to {@param validation}
 *
 * This can be use to create type assertion
 *
 * @param value
 * @param validation
 * @param error
 * @param extras
 * extra argument for both {@param extras} & @param error
 */
export default function Callback<
    Return extends Value,
    Value,
    ExtraArgument extends unknown[] = unknown[]
>(
    value : Value,
    {validation, error} :
        Validation<[Value], boolean>
        & {error:(value : Value) => Error}
) : Return;

export default function Callback<
    Return extends Value,
    Value,
    ExtraArgument extends unknown[] = unknown[]
>(
    value : Value,
    {validation, error, argument} :
        Validation<[Value, ...ExtraArgument], boolean>
        & {error:(value : Value, ...args : ExtraArgument) => Error}
        & Argument<ExtraArgument>
) : Return

export default function Callback<
    Return extends Value,
    Value,
    ExtraArgument extends unknown[] = unknown[]
>(
    value : Value,
    {validation, error, argument = []} :
        Validation<[Value, ...ExtraArgument], boolean>
        & {error:(value : Value, ...args : ExtraArgument) => Error}
        & Argument<ExtraArgument|[]>
) : Return {
    AssertCallback(value, {validation, error, argument});

    return <Return> value;
}
