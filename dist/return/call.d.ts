import ArgumentInterface from "../argument/argument";
import ReturnInterface from "./return";
import Value from "@dikac/t-value/value";
import Function from "../function";
/**
 * Use {@link ArgumentInterface} as argument to call function form {@link Value}
 * and set return value to {@link Return}
 */
export default function Call<Return = unknown, Argument extends unknown[] = unknown[]>(object: ArgumentInterface<Argument> & Value<Function<Argument, Return>> & Partial<ReturnInterface<Return>>): ArgumentInterface<Argument> & Value<Function<Argument, Return>> & ReturnInterface<Return>;
