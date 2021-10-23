import ArgumentContainer from "../argument/argument";
import Return from "../return/return";
import Callable from "../callable";
import Find from "@dikac/t-iterable/value/find";
import Callback from "../callback/callback";
import Validation from "@dikac/t-boolean/validation/validation";

type Memoized<CallbackType extends Callable> = ArgumentContainer<Parameters<CallbackType>> & Return<ReturnType<CallbackType>>;

type Argument<CallbackType extends Callable> =
    Callback<CallbackType> &
    Validation<[Parameters<CallbackType>, Parameters<CallbackType>]>;

export default class DynamicMemoizeContainer<
    CallbackType extends Callable,
> {

    readonly memoized : Memoized<CallbackType>[] = [];

    static object : typeof DynamicMemoizeContainerObject;

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


class DynamicMemoizeContainerObject<C extends Callable> extends DynamicMemoizeContainer<C> {

    constructor({callback, validation} : Argument<C>) {
        super(callback, validation);
    }
}


DynamicMemoizeContainer.object = DynamicMemoizeContainerObject;
