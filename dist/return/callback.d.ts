import Argument from "../argument/argument";
import Return from "./return";
import CallbackInterface from "../callback/callback";
import Callable from "../callable";
export declare class CallbackParameter<FunctionType extends Callable> implements Argument<Parameters<FunctionType>>, Return<ReturnType<FunctionType>> {
    callback: FunctionType;
    argument: Parameters<FunctionType>;
    constructor(callback: FunctionType, argument: Parameters<FunctionType>);
    get return(): ReturnType<FunctionType>;
}
export declare class CallbackObject<FunctionType extends Callable> extends CallbackParameter<FunctionType> {
    constructor({ argument, callback }: Argument<Parameters<FunctionType>> & CallbackInterface<FunctionType>);
}
declare namespace Callback {
    const Parameter: typeof CallbackParameter;
    const Object: typeof CallbackObject;
}
export default Callback;
