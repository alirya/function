import Callable from "../../callable";

/**
 * Use {@link Argument} as argument to call function form {@link Callback}
 */
export default function CallParameters<
    FunctionType extends Callable
>(
    callback : FunctionType,
    argument : Parameters<FunctionType>,
) : ReturnType<FunctionType> {

    return <ReturnType<FunctionType>> callback(...argument);
}
