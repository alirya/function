import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
export declare function FunctionParameter(valid: boolean, value: unknown): string;
export declare function FunctionObject({ valid, value }: Validatable & Value): string;
declare namespace Function {
    const Parameter: typeof FunctionParameter;
    const Object: typeof FunctionObject;
}
export default Function;
