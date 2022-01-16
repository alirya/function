import Value from '@dikac/t-value/value';
import FunctionParameters from './function-parameters';


/**
 * object destructure version
 *
 * @param value
 * @param error
 */
export default function FunctionParameter ({value, error} : Value<unknown> & {error ?: (value:unknown)=>Error}) {
    return FunctionParameters(value, error)
}


