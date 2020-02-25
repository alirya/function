import Type from "@dikac/t-validatable/type/type";
import Parameter from "../../parameter/parameter";
import Value from "@dikac/t-value/value";
/**
 * Construct {@link ArgumentGiven} with compatible object
 * @param data
 */
export default function ArgumentGivenObject(data: Type & Parameter & Value<string>): string;
