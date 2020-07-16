import Argument from "../argument/argument";
import Return from "./return";
import Function from "../function";
import CallbackInterface from "../callback/callback";
export default class Callback<Fn extends Function> implements Readonly<Argument<Parameters<Fn>>>, Readonly<Return<ReturnType<Fn>>> {
    subject: Argument<Parameters<Fn>> & CallbackInterface<Fn>;
    constructor(subject: Argument<Parameters<Fn>> & CallbackInterface<Fn>);
    get return(): ReturnType<Fn>;
    get argument(): Parameters<Fn>;
    get callback(): Fn;
}
