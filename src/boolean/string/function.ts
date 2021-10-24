import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";

export function FunctionParameter (
    valid : boolean,
    value : unknown,
) : string {

    if(valid) {

        return `value is function`;

    } else {

        return `value is not function`;
    }
}

export function FunctionObject (
    {valid, value} : Validatable & Value
) : string {

    return FunctionParameter(valid, value)
}

namespace Function {

    export const Parameter = FunctionParameter;
    export const Object = FunctionObject;
}

export default Function;
