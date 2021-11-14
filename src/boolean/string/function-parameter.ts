import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import FunctionParameters from "./function-parameters";


export default function FunctionParameter (
    {valid, value} : Validatable & Value
) : string {

    return FunctionParameters(valid, value)
}

