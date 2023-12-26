import Validatable from '@axiona/validatable/validatable.js';
import Value from '@axiona/value/value.js';
export function FunctionParameters (
    valid : boolean,
    value : unknown,
) : string {

    if(valid) {

        return `value is function`;

    } else {

        return `value is not function`;
    }
}

export function FunctionParameter (
    {valid, value} : Validatable & Value
) : string {

    return FunctionParameters(valid, value);
}



namespace Function {
    export const Parameters = FunctionParameters;
    export const Parameter = FunctionParameter;
}
export default Function;
