import Function from "../function";
import {List} from "ts-toolbelt";
import Callback from "./callback";

/**
 * Assert if {@param value} and {@param extras} valid according to
 *
 * Throw exception from {@param error} if given {@param value} is not valid according
 * to {@param validation}
 *
 * This can be use to create type assertion
 */

export default function ParameterArguments<Asserted extends Value, Value, Extras extends unknown[] = unknown[]>(
    value : Value,
    validation : Function<List.Prepend<Extras, Value>, boolean>,
    error : Function<List.Prepend<Extras, Value>, Error>,
    extras : Extras
) : asserts value is Asserted
{
    Callback([value, ...extras], validation, error);

}

