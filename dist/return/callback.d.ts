import Argument from "../argument/argument";
import Return from "./return";
import CallbackInterface from "../callback/callback";
import Callable from "../callable";
export default class Callback<FunctionType extends Callable> implements Argument<Parameters<FunctionType>>, Return<ReturnType<FunctionType>> {
    callback: FunctionType;
    argument: Parameters<FunctionType>;
    static object: {
        new <FunctionType_1 extends Callable>({ argument, callback }: Argument<Parameters<FunctionType_1>> & CallbackInterface<FunctionType_1>): {
            callback: FunctionType_1;
            argument: Parameters<FunctionType_1>;
            readonly return: ReturnType<FunctionType_1>;
        };
        object: any;
    };
    constructor(callback: FunctionType, argument: Parameters<FunctionType>);
    get return(): ReturnType<FunctionType>;
}
