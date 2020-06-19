import Argument from "../argument/argument";
import Functions from "../functions";
import Value from "@dikac/t-value/value";
export default function Call<Return = any, Arg extends any[] = any[]>(object: Argument<Arg> & Value<Functions<Arg, Return>>): Return;
