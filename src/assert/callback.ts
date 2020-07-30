import FunctionSingle from "../function-single";
import Guard from "../boolean/guard";


/**
 * Assert if {@param value} and {@param extras} valid according to
 *
 * Throw exception from {@param error} if given {@param value} is not valid according
 * to {@param validation}
 *
 * This can be use to create type assertion
 */

export default function Callback<Asserted extends Value, Value, Extras extends unknown[] = unknown[]>(
    value : Value,
    validation : Guard<Value, Asserted, Extras>,
    error : FunctionSingle<Value, Error>,
    ...extras : Extras
) : asserts value is Asserted;

export default function Callback<Value, Extras extends unknown[] = unknown[]>(
    value : Value,
    validation : FunctionSingle<Value, boolean, Extras>,
    error : FunctionSingle<Value, Error>,
    ...extras : Extras
) : void;

export default function Callback<Asserted extends Value, Value, Extras extends unknown[] = unknown[]>(
    value : Value,
    validation : FunctionSingle<Value, boolean, Extras>,
    error : FunctionSingle<Value, Error>,
    ...extras : Extras
) : asserts value is Asserted {

    if(!validation(value, ...extras)) {

        throw error(value, ...extras);
    }

}

