import Functions from "../functions";
import Argument from "../argument/argument";
import Returns from "./returns";
export default class Callback<Fn extends Functions> implements Argument<Parameters<Fn>>, Readonly<Returns<ReturnType<Fn>>> {
    value: Fn;
    argument: Parameters<Fn>;
    constructor(value: Fn, argument: Parameters<Fn>);
    get return(): ReturnType<Fn>;
}
