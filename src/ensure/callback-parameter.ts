import Validation from '@dikac/t-boolean/validation/validation';
import ArgumentContainer from '../argument/argument';
import Value from '@dikac/t-value/value';
import CallbackParameters from './callback-parameters';

export type CallbackParameterArgument<
    Return extends ValueType,
    ValueType,
    ExtraArgument extends unknown[] = unknown[]
> =
    Validation<[ValueType, ...ExtraArgument], boolean> &
    {error:(value : ValueType, ...args : ExtraArgument) => Error} &
    ArgumentContainer<ExtraArgument> &
    Value<ValueType>
/**
 * object destructure version
 *
 * @param value
 * @param validation
 * @param error
 * @param argument
 */
export default function CallbackParameter<
    Return extends Value,
    Value,
    ExtraArgument extends unknown[] = unknown[]
> ({value, validation, error, argument} : CallbackParameterArgument<Return, Value, ExtraArgument>) {

    return CallbackParameters(value, validation, error, ...argument);
}

