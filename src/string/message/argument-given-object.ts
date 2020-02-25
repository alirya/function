import ArgumentObject from "./argument-object";
import Type from "@dikac/t-validatable/type/type";
import Parameter from "../../parameter/parameter";
import Value from "@dikac/t-value/value";
import Argument from "./argument";
import ArgumentGiven from "./argument-given";

/**
 * Construct {@link ArgumentGiven} with compatible object
 * @param data
 */
export default function ArgumentGivenObject(data : Type & Parameter & Value<string>) : string {

    return ArgumentGiven(data.parameter, data.type, data.value)
}
