import Validatable from '@alirya/validatable/validatable';
import Value from '@alirya/value/value';
import FunctionParameters from './function-parameters';


export default function FunctionParameter (
    {valid, value} : Validatable & Value
) : string {

    return FunctionParameters(valid, value);
}

