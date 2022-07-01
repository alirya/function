import Callable from '../../callable';
import Argument from '../argument';
import Callback from '../../callback/callback';

/**
 * Use {@link Argument} as argument to call function form {@link Callback}
 */
export function CallParameters<
    FunctionType extends Callable
>(
    callback : FunctionType,
    argument : Parameters<FunctionType>,
) : ReturnType<FunctionType> {

    return <ReturnType<FunctionType>> callback(...argument);
}



export function CallParameter <FunctionType extends Callable> (
    {callback, argument} : Argument<Parameters<FunctionType>> & Callback<FunctionType>
) {
    return CallParameters(callback, argument);
}




namespace Call {
    export const Parameters = CallParameters;
    export const Parameter = CallParameter;
}
export default Call;
