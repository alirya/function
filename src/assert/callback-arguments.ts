import Guard from "../guard/guard";
import Function from "../function";
import {List} from "ts-toolbelt";

/**
 * Throw exception from {@param error} if given {@param value} is not valid according
 * to {@param validation}
 *
 * This can be use to create type assertion
 */

export default function CallbackArguments<Asserted extends Value, Value, Extras extends List = List>(
    value : Value,
    validation : Function<List.Prepend<Extras, Value>, Asserted>,
    error : Function<List.Prepend<Extras, Value>, Error>,
    extras : Extras
) : asserts value is Asserted
{
    let argument : List.Prepend<Extras, Value> = [value, ...extras];

    if(!validation(value, ...extras)) {

        throw error(value, ...extras);
    }
}

