import ArgumentContainer from "../argument/argument";
import Return from "../return/return";
import Callable from "../callable";
declare type Memoized<CallbackType extends Callable> = ArgumentContainer<Parameters<CallbackType>> & Return<ReturnType<CallbackType>>;
export default class DynamicMemoizeContainerParameters<CallbackType extends Callable> {
    callback: CallbackType;
    validation: Callable<[Parameters<CallbackType>, Parameters<CallbackType>], boolean>;
    readonly memoized: Memoized<CallbackType>[];
    constructor(callback: CallbackType, validation: Callable<[Parameters<CallbackType>, Parameters<CallbackType>], boolean>);
    call(argument: Parameters<CallbackType>): ArgumentContainer<Parameters<CallbackType>> & Return<ReturnType<CallbackType>>;
    memoize(argument: Parameters<CallbackType>): ArgumentContainer<Parameters<CallbackType>> & Return<ReturnType<CallbackType>>;
    get(argument: Parameters<CallbackType>): Memoized<CallbackType> | null;
}
export {};
