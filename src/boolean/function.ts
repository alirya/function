import IsFunction from 'is-function.js';
import Callable from '../callable.js';

/**
 * check if {@param value} type is function
 */
export default function Function<
    Assumption extends Callable
>(
    value : unknown
) : value is Assumption {

    return IsFunction(value);
}
