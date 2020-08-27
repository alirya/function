/**
 * Assert if {@param value} and {@param extras} valid according to
 *
 * Throw exception from {@param error} if given {@param value} is not valid according
 * to {@param validation}
 *
 * This can be use to create type assertion
 */

export default function Callback<Type extends Value, Value, Arguments extends unknown[] = unknown[]>(
    value : Value,
    validation : (value:Value, ...args:Arguments) => value is Type,
    error : (value : Value, ...args:Arguments)=>Error,
    ...extras : Arguments
) : asserts value is Type;

export default function Callback<Value, Arguments extends unknown[] = unknown[]>(
    value : Value,
    validation : (value : Value, ...args:Arguments) => boolean,
    error : (value : Value, ...args:Arguments)=>Error,
    ...extras : Arguments
) : void;

export default function Callback<Asserted extends Value, Value, Arguments extends unknown[] = unknown[]>(
    value : Value,
    validation : (value : Value, ...args:Arguments) => boolean,
    error : (value : Value, ...args:Arguments)=>Error,
    ...extras : Arguments
) : asserts value is Asserted {

    if(!validation(value, ...extras)) {

        throw error(value, ...extras);
    }

}

