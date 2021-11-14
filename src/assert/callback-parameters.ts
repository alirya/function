/**
 *
 * Throw exception from {@param error} if given {@param value} is not valid according
 * to {@param validation}
 *
 * This can be use to create type assertion
 * @param argument
 */

export default function CallbackParameters<ValueType, Match extends ValueType, Arguments extends unknown[] = unknown[]>(
    value : ValueType,
    validation : (value:ValueType, ...args:Arguments) => value is Match,
    error : (value : ValueType, ...args:Arguments)=>Error,
    ...argument : Arguments
) : asserts value is Match;

export default function CallbackParameters<ValueType, Arguments extends unknown[] = unknown[]>(
    value : ValueType,
    validation : (value : ValueType, ...args:Arguments) => boolean,
    error : (value : ValueType, ...args:Arguments)=>Error,
    ...argument : Arguments
) : void;

export default function CallbackParameters<Asserted extends ValueType, ValueType, Arguments extends unknown[] = unknown[]>(
    value : ValueType,
    validation : (value : ValueType, ...args:Arguments) => boolean,
    error : (value : ValueType, ...args:Arguments)=>Error,
    ...argument : Arguments
) : asserts value is Asserted {

    if(!validation(value, ...(argument as Arguments))) {

        throw error(value, ...argument);
    }
}


