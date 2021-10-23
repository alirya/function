import ArgumentContainer from "../argument/argument";
import Return from "../return/return";
import Callable from "../callable";
import Callback from "../callback/callback";
import Validation from "@dikac/t-boolean/validation/validation";
declare type Memoized<CallbackType extends Callable> = ArgumentContainer<Parameters<CallbackType>> & Return<ReturnType<CallbackType>>;
declare type Argument<CallbackType extends Callable> = Callback<CallbackType> & Validation<[Parameters<CallbackType>, Parameters<CallbackType>]>;
export default class DynamicMemoizeContainer<CallbackType extends Callable> {
    callback: CallbackType;
    validation: Argument<CallbackType>['validation'];
    readonly memoized: Memoized<CallbackType>[];
    static object: typeof DynamicMemoizeContainerObject;
    constructor(callback: CallbackType, validation: Argument<CallbackType>['validation']);
    call(argument: Parameters<CallbackType>): ArgumentContainer<Parameters<CallbackType>> & Return<ReturnType<CallbackType>>;
    memoize(argument: Parameters<CallbackType>): ArgumentContainer<Parameters<CallbackType>> & Return<ReturnType<CallbackType>>;
    get(argument: Parameters<CallbackType>): Memoized<CallbackType> | null;
}
declare class DynamicMemoizeContainerObject<C extends Callable> extends DynamicMemoizeContainer<C> {
    constructor({ callback, validation }: Argument<C>);
}
export {};
