import ArgumentContainer from '../argument/argument';
import Return from '../return/return';
import Callable from '../callable';
import Find from '@alirya/iterable/value/find';
import Callback from '../callback/callback';
import Validation from '@alirya/boolean/validation/validation';
import DynamicMemoizeContainerParametersC from './dynamic-memoize-container';

type Memoized<CallbackType extends Callable> = ArgumentContainer<Parameters<CallbackType>> & Return<ReturnType<CallbackType>>;

export class DynamicMemoizeContainerParameters<
    CallbackType extends Callable,
> {

    readonly memoized : Memoized<CallbackType>[] = [];

    constructor(
        public callback : CallbackType,
        public validation : Callable<[Parameters<CallbackType>, Parameters<CallbackType>], boolean>
    ){}

    call(argument : Parameters<CallbackType>) : ArgumentContainer<Parameters<CallbackType>> & Return<ReturnType<CallbackType>> {

        return {
            argument : argument,
            return : <ReturnType<CallbackType>> this.callback(...argument)
        };
    }

    memoize(argument : Parameters<CallbackType>) : ArgumentContainer<Parameters<CallbackType>> & Return<ReturnType<CallbackType>> {

        let memoized = this.get(argument);

        if(!memoized) {

            memoized = this.call(argument);
            this.memoized.push(memoized);
        }

        return memoized;
    }

    get(argument : Parameters<CallbackType>) : Memoized<CallbackType>|null {

        return Find.Parameters(
            this.memoized,
            (memoized)=> this.validation(argument, memoized.argument),
            null
        );
    }
}



export type DynamicMemoizeContainerArgument<CallbackType extends Callable> =
    Callback<CallbackType> &
    Validation<[Parameters<CallbackType>, Parameters<CallbackType>]>;

export class DynamicMemoizeContainerParameter<C extends Callable> extends DynamicMemoizeContainerParametersC.Parameters<C> {

    constructor({callback, validation} : DynamicMemoizeContainerArgument<C>) {
        super(callback, validation);
    }
}


namespace DynamicMemoizeContainer {
    export const Parameters = DynamicMemoizeContainerParameters;
    export const Parameter = DynamicMemoizeContainerParameter;
    export type Argument<CallbackType extends Callable> = DynamicMemoizeContainerArgument<CallbackType>;
}
export default DynamicMemoizeContainer;
