import Type from "@dikac/t-validatable/type/type";
import Parameter from "@dikac/t-function/parameter/parameter";
import Argument from "./argument";

/**
 * Construct {@link Argument} with compatible object
 * @param data
 */
export default function ArgumentObject(data : Type & Parameter) : string {

    return Argument(data.parameter, data.type)
}
