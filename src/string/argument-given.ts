
import Argument from "./argument";
import Parameter from "../parameter/parameter";
import Type from "@dikac/t-type/type";
import Value from "@dikac/t-value/value";

/**
 * create string message suitable for function argument, including given value
 */
export default function ArgumentGiven(info : Parameter & Type<string> & Value<string>) : string {

    return Argument(info) + `given '${info.value}'`;
}
