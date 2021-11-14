import Argument from "../argument/argument";
import Return from "./return";
import Callable from "../callable";
export declare type CallbackParametersType<FunctionType extends Callable> = Argument<Parameters<FunctionType>> & Return<ReturnType<FunctionType>>;
export default class CallbackParameters<FunctionType extends Callable> implements Argument<Parameters<FunctionType>>, Return<ReturnType<FunctionType>> {
    callback: FunctionType;
    argument: Parameters<FunctionType>;
    constructor(callback: FunctionType, argument: Parameters<FunctionType>);
    get return(): ReturnType<FunctionType>;
}
