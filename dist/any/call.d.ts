import Argument from "../argument/argument";
import Value from "@dikac/t-value/value";
import Function from "../function";
/**
 * Use {@link Argument} as argument to call function form {@link Value}
 */
export default function Call<Return = any, Arg extends any[] = any[]>(object: Argument<Arg> & Value<Function<Arg, Return>>): Return;
