import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";


export default function Function(
    {valid, value} : Validatable & Value
) : string {

    if(valid) {

        return `value is function`;

    } else {

        return `value is not function`;
    }
}
