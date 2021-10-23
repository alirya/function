import Argument from "../argument";
import Callback from "../../callback/callback";
import Callable from "../../callable";
/**
 * Use {@link Argument} as argument to call function form {@link Callback}
 */
declare function Call<FunctionType extends Callable>(callback: FunctionType, argument: Parameters<FunctionType>): ReturnType<FunctionType>;
declare namespace Call {
    var object: <FunctionType extends Callable>({ callback, argument }: Argument<Parameters<FunctionType>> & Callback<FunctionType>) => ReturnType<FunctionType>;
}
export default Call;
