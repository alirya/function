import ExtraArgument from '../argument/argument';
import Guard from '@alirya/boolean/validation/guard';
import Validation from '@alirya/boolean/validation/validation';
import CallbackParameters from './callback-parameters';

export type CallbackParameterArgument<ValueType, Arguments extends unknown[] = unknown[]> =
    & {error:(value : ValueType, ...args:Arguments)=>Error}
    & Partial<ExtraArgument>;

export default function CallbackParameter<ValueType, Arguments extends unknown[] = unknown[]>(
    value : ValueType,
    {argument, error, validation} : CallbackParameterArgument<ValueType> & Validation<[ValueType, ...Arguments]>,
) : void;

export default function CallbackParameter<ValueType, Match extends ValueType, Arguments extends unknown[] = unknown[]>(
    value : ValueType,
    {argument, error, validation} : CallbackParameterArgument<ValueType> & Guard<ValueType, Match, Arguments>,
) : asserts value is Match;

export default function CallbackParameter<ValueType, Match extends ValueType, Arguments extends unknown[] = unknown[]>(
    value : ValueType,
    {argument = [], error, validation} : CallbackParameterArgument<ValueType> & Guard<ValueType, Match, Arguments>,
) : asserts value is Match {

    return CallbackParameters(value, validation, error, ...argument);
}

