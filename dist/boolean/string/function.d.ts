import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
declare function Function(valid: boolean, value: unknown): string;
declare namespace Function {
    var object: ({ valid, value }: Validatable<boolean> & Value<unknown>) => string;
}
export default Function;
