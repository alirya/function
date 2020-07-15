import Function from "../function";
/**
 * Assert if {@param argument} valid according to {@param validation}
 *
 * Throw exception from {@param error} if not valid
 */
export default function Callback<Argument extends unknown[]>(argument: Argument, validation: Function<Argument, boolean>, error: Function<Argument, Error>): void;
