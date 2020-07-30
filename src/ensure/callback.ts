import AssertCallback from "../assert/callback";
import FunctionSingle from "../function-single";

/**
 * Throw exception from {@param error} if given {@param value} is not valid according
 * to {@param validation}
 *
 * This can be use to create type assertion
 */

export default function Callback<Return  extends Value, Value, Extras extends unknown[] = unknown[]>(
    value : Value,
    validation : FunctionSingle<Value, boolean, Extras>,
    error : FunctionSingle<Value, Error, Extras>,
    ...extras : Extras
) : Return
{
    AssertCallback(value, validation, error, ...extras);

    return <Return> value;
}
