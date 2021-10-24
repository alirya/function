import ExtraArgument from "../argument/argument";
import Guard from "@dikac/t-boolean/validation/guard";
import Validation from "@dikac/t-boolean/validation/validation";

/**
 * Assert if {@param value} and {@param extras} valid according to
 *
 * Throw exception from {@param error} if given {@param value} is not valid according
 * to {@param validation}
 *
 * This can be use to create type assertion
 */

export function CallbackParameter<ValueType, Match extends ValueType, Arguments extends unknown[] = unknown[]>(
    value : ValueType,
    validation : (value:ValueType, ...args:Arguments) => value is Match,
    error : (value : ValueType, ...args:Arguments)=>Error,
    ...argument : Arguments
) : asserts value is Match;

export function CallbackParameter<ValueType, Arguments extends unknown[] = unknown[]>(
    value : ValueType,
    validation : (value : ValueType, ...args:Arguments) => boolean,
    error : (value : ValueType, ...args:Arguments)=>Error,
    ...argument : Arguments
) : void;

export function CallbackParameter<Asserted extends ValueType, ValueType, Arguments extends unknown[] = unknown[]>(
    value : ValueType,
    validation : (value : ValueType, ...args:Arguments) => boolean,
    error : (value : ValueType, ...args:Arguments)=>Error,
    ...argument : Arguments
) : asserts value is Asserted {

    if(!validation(value, ...(argument as Arguments))) {

        throw error(value, ...argument);
    }
}


export type Argument<ValueType, Arguments extends unknown[] = unknown[]> =
    & {error:(value : ValueType, ...args:Arguments)=>Error}
    & Partial<ExtraArgument>;

export function CallbackObject<ValueType, Arguments extends unknown[] = unknown[]>(
    value : ValueType,
    {argument, error, validation} : Argument<ValueType> & Validation<[ValueType, ...Arguments]>,
) : void

export function CallbackObject<ValueType, Match extends ValueType, Arguments extends unknown[] = unknown[]>(
    value : ValueType,
    {argument, error, validation} : Argument<ValueType> & Guard<ValueType, Match, Arguments>,
) : asserts value is Match

export function CallbackObject<ValueType, Match extends ValueType, Arguments extends unknown[] = unknown[]>(
    value : ValueType,
    {argument = [], error, validation} : Argument<ValueType> & Guard<ValueType, Match, Arguments>,
) : asserts value is Match {

    return CallbackParameter(value, validation, error, ...argument);
}

namespace Callback {

    export const Parameter : typeof CallbackParameter = CallbackParameter;
    export const Object : typeof CallbackObject = CallbackObject;
}

export default Callback;
