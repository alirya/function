import IsFunction from 'is-function';
import Callable from '../callable.js';

/**
 * check if {@param value} type is function
 */
export default function Function<
    Assumption extends Callable
>(
    value : unknown
) : value is Assumption {

    if(!value) {

        return false;
    }

    if(value instanceof globalThis.Function) {

        return true;
    }
    if(typeof value === 'function') {

        return true;
    }

    return !!(
        value.constructor &&
        (value as globalThis.Function).call &&
        (value as globalThis.Function).apply
    );
}

export {Function as IsFunction};
