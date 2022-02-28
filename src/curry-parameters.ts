import Callable from './callable';
import Heads from '@alirya/array/heads';
import Tails from '@alirya/array/tails';
import InsertArray from '@alirya/array/insert-parameters';

export type CurryTypeArgument<Array extends unknown[], Position extends number> = [...Heads<Array, Position>, ...Tails<Array, Position>];

export default function CurryParameters<
    Callback extends Callable,
    Arguments extends Parameters<Callback> = Parameters<Callback>,
    Position extends number = number
>(
    callback : Callback,
    argument : Arguments[Position],
    position : Position
) : Callable<CurryTypeArgument<Arguments, Position>, ReturnType<Callback>>   {

    return function (...args) {

        return callback(...InsertArray(args, argument as any, position));

    } as Callable<CurryTypeArgument<Arguments, Position>, ReturnType<Callback>>;
}

