import Callable from "./callable";

export default function ConditionalCallParameters<Callback extends Callable>(
    valid : boolean,
    trueCallback : Callback,
    falseCallback: Callback,
    ...argument : Parameters<Callback>
) : ReturnType<Callback> {

    return (valid
        ? trueCallback(...argument)
        : falseCallback(...argument)
    ) as ReturnType<Callback>;
}
