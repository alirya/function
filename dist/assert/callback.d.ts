import ExtraArgument from "../argument/argument";
import Guard from "@dikac/t-boolean/validation/guard";
import Validation from "@dikac/t-boolean/validation/validation";
/**
 * Assert if {@param value} and {@param extras} valid according to
 *
 * Throw exception from {@param error} if given {@param value} is not valid according
 * to {@param validation}
 *
 * This can be use to create type assertion
 */
export declare type Argument<ValueType, Arguments extends unknown[] = unknown[]> = {
    error: (value: ValueType, ...args: Arguments) => Error;
} & Partial<ExtraArgument>;
export default function Callback<ValueType, Match extends ValueType, Arguments extends unknown[] = unknown[]>(value: ValueType, { argument, error, validation }: Argument<ValueType> & Guard<ValueType, Match, Arguments>): asserts value is Match;
export default function Callback<ValueType, Arguments extends unknown[] = unknown[]>(value: ValueType, { argument, error, validation }: Argument<ValueType> & Validation<[ValueType, ...Arguments]>): void;
