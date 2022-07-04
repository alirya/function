import TypeGuard from '../boolean/function';
import ThrowableType from '../assert/throwable/function';
import Guard from './callback';
import Callable from '../callable';
import Value from '@alirya/value/value';

/**
 * return {@param value} if type is function or
 * throw error from {@param error}
 */
export function FunctionParameters<
    Assumption extends Callable
>(
    value : unknown,
    error : (value:unknown)=>Error = ThrowableType
) : Assumption {

    Guard.Parameters(value, TypeGuard, error);
    return <Assumption>value;
}



/**
 * object destructure version
 *
 * @param value
 * @param error
 */
export function FunctionParameter ({value, error} : Value<unknown> & {error ?: (value:unknown)=>Error}) {
    return FunctionParameters(value, error);
}


namespace Function {
    export const Parameters = FunctionParameters;
    export const Parameter = FunctionParameter;
}
export default Function;
