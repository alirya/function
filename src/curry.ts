import Callable from './callable.js';
import Heads from '@axiona/array/heads.js';
import Tails from '@axiona/array/tails.js';
import { InsertParameters } from '@axiona/array/function/insert.js';
import Callback from './callback/callback.js';

export function CurryParameters<
    Callback extends Callable,
    Arguments extends Parameters<Callback> = Parameters<Callback>,
    Position extends number = number
>(
    callback : Callback,
    argument : Arguments[Position],
    position : Position
) : CurryType<Callback, Arguments, Position>   {

    return function (...args) {

        return callback(...InsertParameters(args, position)(argument as any[]));

    } as CurryType<Callback, Arguments, Position> ;
}


export interface CurryArgument<
    CallbackType extends Callable,
    Position extends number,
    Arguments extends Parameters<CallbackType> = Parameters<CallbackType>,
> extends Callback<CallbackType> {
    argument : Arguments[Position];
    position : Position;
}

export function CurryParameter<
    Callback extends Callable,
    Arguments extends Parameters<Callback> = Parameters<Callback>,
    Position extends number = number
>(  {
        callback,
        argument,
        position,
    } : CurryArgument<Callback, Position, Arguments>
) : CurryType<Callback, Arguments, Position>   {

    return CurryParameters(callback, argument, position);
}

export type CurryType<
    Callback extends Callable,
    Arguments extends Parameters<Callback>,
    Position extends number
    > = Callable<CurryTypeArgument<Arguments, Position>, ReturnType<Callback>>;

export type CurryTypeArgument<
    Array extends unknown[],
    Position extends number
> = [...Heads<Array, Position>, ...Tails<Array, Position>];

namespace Curry {
    export const Parameters = CurryParameters;
    export const Parameter = CurryParameter;

    export type Argument<
        CallbackType extends Callable,
        Position extends number,
        Arguments extends Parameters<CallbackType>
    > = CurryArgument<
        CallbackType,
        Position,
        Arguments
    >;
    export type Type<
        Callback extends Callable,
        Arguments extends Parameters<Callback>,
        Position extends number
    > = CurryType<
        Callback,
        Arguments,
        Position
    >;
    export type TypeArgument<
        Array extends unknown[],
        Position extends number
    > = CurryTypeArgument<
        Array,
        Position
    >;
}
export default Curry;
