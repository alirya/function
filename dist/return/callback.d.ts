import Argument from "../argument/argument";
import Return from "./return";
import CallbackInterface from "../callback/callback";
import Callable from "../callable";
export default class Callback<FunctionT extends Callable> implements Readonly<Argument<Parameters<FunctionT>>>, Readonly<Return<ReturnType<FunctionT>>> {
    subject: Argument<Parameters<FunctionT>> & CallbackInterface<FunctionT>;
    constructor(subject: Argument<Parameters<FunctionT>> & CallbackInterface<FunctionT>);
    get return(): ReturnType<FunctionT>;
    get argument(): Parameters<FunctionT>;
    get callback(): FunctionT;
}
