import FunctionType from "../function";
/**
 * return {@param value} if type is function or
 * throw error from {@param error}
 */
export default function Function<Assumption extends FunctionType>(value: unknown, error?: FunctionType<[unknown], Error>): Assumption;
