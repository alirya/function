import Callable from './callable';
import Callback from './callback/callback';
import CurryParameters, {CurryTypeArgument} from './curry-parameters';

export {CurryTypeArgument};

export interface CurryParameterArgument<
    CallbackType extends Callable,
    Position extends number = number,
    Arguments extends Parameters<CallbackType> = Parameters<CallbackType>,
> extends Callback<CallbackType> {
    argument : Arguments[Position];
    position : Position;
}

export default function CurryParameter<
    Callback extends Callable,
    Arguments extends Parameters<Callback> = Parameters<Callback>,
    Position extends number = number
>(
    {
        callback,
        argument,
        position,
    } : CurryParameterArgument<Callback, Position, Arguments>
) : Callable<CurryTypeArgument<Arguments, Position>, ReturnType<Callback>>   {

    return CurryParameters(callback, argument, position);
}

