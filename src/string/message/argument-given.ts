
import Argument from "./argument";

/**
 * create string message suitable for function argument, including given value
 */
export default function ArgumentGiven(parameter : string, type : string, value : string) : string {

    return Argument(parameter, type) + `given '${value}'`;
}
