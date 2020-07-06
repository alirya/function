import Function from "../function";
/**
 * check if {@param value} type is function
 */
export default function Type<Assumption extends Function>(value: any): value is Assumption;
