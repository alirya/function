/**
 * create string message suitable for function argument
 */
import Parameter from "../parameter/parameter";
import Type from "@dikac/t-type/type";
export default function Argument(info: Parameter & Type<string>): string;
