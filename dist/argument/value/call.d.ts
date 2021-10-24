import Argument from "../argument";
import Callback from "../../callback/callback";
import Callable from "../../callable";
/**
 * Use {@link Argument} as argument to call function form {@link Callback}
 */
export declare function CallParameter<FunctionType extends Callable>(callback: FunctionType, argument: Parameters<FunctionType>): ReturnType<FunctionType>;
export declare function CallObject<FunctionType extends Callable>({ callback, argument }: Argument<Parameters<FunctionType>> & Callback<FunctionType>): ReturnType<FunctionType>;
declare namespace Call {
    const Parameter: typeof CallParameter;
    const Object: typeof CallObject;
}
export default Call;
