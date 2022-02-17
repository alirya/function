import Callable from "./callable";
import Validatable from "@alirya/validatable/validatable";
import Argument from "./argument/argument";
import ConditionalCallParameters from "./conditional-call-parameters";

export default function ConditionalCallParameter<Callback extends Callable>(
    {
        valid,
        trueCallback,
        falseCallback,
        argument
    } : Validatable & Argument<Parameters<Callback>> & {
        trueCallback : Callback,
        falseCallback: Callback,
    }
) : ReturnType<Callback> {

    return ConditionalCallParameters(valid, trueCallback, falseCallback, ...argument);
}
