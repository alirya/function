import Validation from "@dikac/t-boolean/validation/validation";
import ArgumentContainer from "../argument/argument";
import Value from "@dikac/t-value/value";
/**
 * Throw exception from {@param error} if given {@param value} is not valid according
 * to {@param validation}
 *
 * This can be use to create type assertion
 *
 * @param value
 * @param validation
 * @param error
 * @param argument
 * extra argument for both {@param argument} & {@param error}
 */
declare function Callback<Return extends ValueType, ValueType, ExtraArgument extends unknown[] = unknown[]>(value: ValueType, validation: (value: ValueType, ...args: ExtraArgument) => boolean, error: (value: ValueType, ...args: ExtraArgument) => Error, ...argument: ExtraArgument): Return;
declare namespace Callback {
    var object: <Return extends Value_1, Value_1, ExtraArgument extends unknown[] = unknown[]>({ value, validation, error, argument }: ObjectArgument<Return, Value_1, ExtraArgument>) => Value_1;
}
export default Callback;
export declare type ObjectArgument<Return extends ValueType, ValueType, ExtraArgument extends unknown[] = unknown[]> = Validation<[ValueType, ...ExtraArgument], boolean> & {
    error: (value: ValueType, ...args: ExtraArgument) => Error;
} & ArgumentContainer<ExtraArgument> & Value<ValueType>;
