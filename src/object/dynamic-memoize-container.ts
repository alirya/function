import ArgumentContainer from "../argument/argument";
import Return from "../return/return";
import Callable from "../callable";
import Find from "@dikac/t-iterable/value/find";
import Callback from "../callback/callback";
import Validation from "@dikac/t-boolean/validation/validation";

type Memoized<CallbackType extends Callable> = ArgumentContainer<Parameters<CallbackType>> & Return<ReturnType<CallbackType>>;

export type Argument<CallbackType extends Callable> =
    Callback<CallbackType> &
    Validation<[Parameters<CallbackType>, Parameters<CallbackType>]>;

export class DynamicMemoizeContainerParameter<
    CallbackType extends Callable,
> {

    readonly memoized : Memoized<CallbackType>[] = [];

    constructor(
        public callback : CallbackType,
        public validation : Argument<CallbackType>['validation']
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

        return Find(
            this.memoized,
            (memoized)=> this.validation(argument, memoized.argument),
            null
        );
    }
}

export class DynamicMemoizeContainerObject<C extends Callable> extends DynamicMemoizeContainerParameter<C> {

    constructor({callback, validation} : Argument<C>) {
        super(callback, validation);
    }
}

namespace DynamicMemoizeContainer {

    export const Parameter : typeof DynamicMemoizeContainerParameter = DynamicMemoizeContainerParameter;
    export const Object : typeof DynamicMemoizeContainerObject = DynamicMemoizeContainerObject;
}

export default DynamicMemoizeContainer;
