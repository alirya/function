import Functions from "../functions";
import Argument from "../argument/argument";
import Returns from "./returns";
import Value from "@dikac/t-value/value";
export default class Callback<Fn extends Functions> implements Readonly<Argument<Parameters<Fn>>>, Readonly<Returns<ReturnType<Fn>>> {
    subject: Argument<Parameters<Fn>> & Value<Fn>;
    constructor(subject: Argument<Parameters<Fn>> & Value<Fn>);
    get return(): ReturnType<Fn>;
    get argument(): Parameters<Fn>;
    get value(): Fn;
}
