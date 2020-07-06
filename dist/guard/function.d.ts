import FunctionType from "../function";
/**
 * check if {@param value} type is function
 */
export default function Function<Assumption extends FunctionType>(value: any): value is Assumption;
