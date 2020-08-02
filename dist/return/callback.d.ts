import Argument from "../argument/argument";
import Return from "./return";
import Function from "../function";
import CallbackInterface from "../callback/callback";
export default class Callback<FunctionT extends Function> implements Readonly<Argument<Parameters<FunctionT>>>, Readonly<Return<ReturnType<FunctionT>>> {
    subject: Argument<Parameters<FunctionT>> & CallbackInterface<FunctionT>;
    constructor(subject: Argument<Parameters<FunctionT>> & CallbackInterface<FunctionT>);
    get return(): ReturnType<FunctionT>;
    get argument(): Parameters<FunctionT>;
    get callback(): FunctionT;
}
