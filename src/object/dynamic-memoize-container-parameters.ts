import ArgumentContainer from "../argument/argument";
import Return from "../return/return";
import Callable from "../callable";
import Find from "@dikac/t-iterable/value/find-parameters";

type Memoized<CallbackType extends Callable> = ArgumentContainer<Parameters<CallbackType>> & Return<ReturnType<CallbackType>>;

export default class DynamicMemoizeContainerParameters<
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

        return Find(
            this.memoized,
            (memoized)=> this.validation(argument, memoized.argument),
            null
        );
    }
}
