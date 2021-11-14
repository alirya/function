import Argument from "../argument";
import Callback from "../../callback/callback";
import Callable from "../../callable";
import CallParameters from "./call-parameters";


export default function CallParameter <FunctionType extends Callable> (
    {callback, argument} : Argument<Parameters<FunctionType>> & Callback<FunctionType>
) {
    return CallParameters(callback, argument);
}


