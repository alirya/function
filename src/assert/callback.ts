/**
 *
 * Throw exception from {@param error} if given {@param value} is not valid according
 * to {@param validation}
 *
 * This can be use to create type assertion
 * @param argument
 */

export function CallbackParameters<ValueType, Match extends ValueType, Arguments extends unknown[] = unknown[]>(
    value : ValueType,
    validation : (value:ValueType, ...args:Arguments) => value is Match,
    error : (value : ValueType, ...args:Arguments)=>Error,
    ...argument : Arguments
) : asserts value is Match;

export function CallbackParameters<ValueType, Arguments extends unknown[] = unknown[]>(
    value : ValueType,
    validation : (value : ValueType, ...args:Arguments) => boolean,
    error : (value : ValueType, ...args:Arguments)=>Error,
    ...argument : Arguments
) : void;

export function CallbackParameters<Asserted extends ValueType, ValueType, Arguments extends unknown[] = unknown[]>(
    value : ValueType,
    validation : (value : ValueType, ...args:Arguments) => boolean,
    error : (value : ValueType, ...args:Arguments)=>Error,
    ...argument : Arguments
) : asserts value is Asserted {

    if(!validation(value, ...(argument as Arguments))) {

        throw error(value, ...argument);
    }
}



import ExtraArgument from '../argument/argument.js';
import Guard from '@alirya/boolean/validation/guard.js';
import Validation from '@alirya/boolean/validation/validation.js';

export type CallbackArgument<ValueType, Arguments extends unknown[] = unknown[]> =
    & {error:(value : ValueType, ...args:Arguments)=>Error}
    & Partial<ExtraArgument>;

export function CallbackParameter<ValueType, Arguments extends unknown[] = unknown[]>(
    value : ValueType,
    {argument, error, validation} : CallbackArgument<ValueType> & Validation<[ValueType, ...Arguments]>,
) : void;

export function CallbackParameter<ValueType, Match extends ValueType, Arguments extends unknown[] = unknown[]>(
    value : ValueType,
    {argument, error, validation} : CallbackArgument<ValueType> & Guard<ValueType, Match, Arguments>,
) : asserts value is Match;

export function CallbackParameter<ValueType, Match extends ValueType, Arguments extends unknown[] = unknown[]>(
    value : ValueType,
    {argument = [], error, validation} : CallbackArgument<ValueType> & Guard<ValueType, Match, Arguments>,
) : asserts value is Match {

    return CallbackParameters(value, validation, error, ...argument);
}



namespace Callback {
    export const Parameters = CallbackParameters;
    export const Parameter = CallbackParameter;
    export type Argument<ValueType, Arguments extends unknown[] = unknown[]> = CallbackArgument<ValueType, Arguments>;
}
export default Callback;
