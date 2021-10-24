import Callable from "../callable";
import Value from "@dikac/t-value/value";
/**
 * return {@param value} if type is function or
 * throw error from {@param error}
 */
export declare function FunctionParameter<Assumption extends Callable>(value: unknown, error?: (value: unknown) => Error): Assumption;
/**
 * object destructure version
 *
 * @param value
 * @param error
 */
export declare function FunctionObject({ value, error }: Value<unknown> & {
    error?: (value: unknown) => Error;
}): Callable;
declare namespace Function {
    const Parameter: typeof FunctionParameter;
    const Object: typeof FunctionObject;
}
export default Function;
