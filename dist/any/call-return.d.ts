import Argument from "../argument/argument";
import Returns from "../returns/returns";
import Functions from "../function";
import Value from "@dikac/t-value/value";
export default function CallReturn<Return = any, Arg extends any[] = any[]>(object: Argument<Arg> & Value<Functions<Arg, Return>> & Partial<Returns<Return>>): Return;
