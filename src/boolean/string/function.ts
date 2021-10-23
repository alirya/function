import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";

export default function Function(
    valid : boolean,
    value : unknown,
) : string {

    if(valid) {

        return `value is function`;

    } else {

        return `value is not function`;
    }
}

Function.object = function (
    {valid, value} : Validatable & Value
) : string {

    return Function(valid, value)
}
