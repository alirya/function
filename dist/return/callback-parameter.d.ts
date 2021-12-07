import Argument from "../argument/argument";
import CallbackInterface from "../callback/callback";
import Callable from "../callable";
import CallbackParameters from "./callback-parameters";
export default class CallbackParameter<FunctionType extends Callable> extends CallbackParameters<FunctionType> {
    constructor({ argument, callback }: Argument<Parameters<FunctionType>> & CallbackInterface<FunctionType>);
}