import GuardType from '../boolean/function.js';
import ThrowableType from '../assert/throwable/function.js';
import {CallbackParameters} from './callback.js';
import Callable from '../callable.js';

/**
 * Throw exception from {@param error} if given {@param value} is no callable type
 */

export default function Function<
    Assumption extends Callable
>(
    value : unknown,
    error : (value:unknown)=>Error = ThrowableType
) : asserts value is Assumption {

    CallbackParameters(value, GuardType, error);
}
