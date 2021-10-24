import { DynamicMemoizeContainerParameter as Container } from "./object/dynamic-memoize-container";
import Callable from "./callable";
import Callback from "./callback/callback";
import Validation from "@dikac/t-boolean/validation/validation";
export declare type Argument<FunctionType extends Callable> = Callback<FunctionType> & Partial<Validation<[Parameters<FunctionType>, Parameters<FunctionType>]>>;
export declare function DynamicMemoizeParameter<FunctionType extends Callable>(callback: FunctionType, validation?: Argument<FunctionType>['validation']): FunctionType & {
    container: Container<FunctionType>;
};
export declare function DynamicMemoizeObject<FunctionType extends Callable>({ callback, validation, }: Argument<FunctionType>): FunctionType & {
    container: Container<FunctionType>;
};
declare namespace DynamicMemoize {
    const Parameter: typeof DynamicMemoizeParameter;
    const Object: typeof DynamicMemoizeObject;
}
export default DynamicMemoize;
