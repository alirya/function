import Argument from "../argument/argument";
import Return from "./return";
import CallbackInterface from "../callback/callback";
import Callable from "../callable";
export default class Callback<FunctionType extends Callable> implements Readonly<Argument<Parameters<FunctionType>>>, Readonly<Return<ReturnType<FunctionType>>> {
    subject: Argument<Parameters<FunctionType>> & CallbackInterface<FunctionType>;
    constructor(subject: Argument<Parameters<FunctionType>> & CallbackInterface<FunctionType>);
    get return(): ReturnType<FunctionType>;
    get argument(): Parameters<FunctionType>;
    get callback(): FunctionType;
}
