import Value from '@alirya/value/value';
import FunctionParameters from './function-parameters';


/**
 * object destructure version
 *
 * @param value
 * @param error
 */
export default function FunctionParameter ({value, error} : Value<unknown> & {error ?: (value:unknown)=>Error}) {
    return FunctionParameters(value, error);
}


