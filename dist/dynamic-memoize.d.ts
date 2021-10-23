import DynamicMemoizeContainer from "./object/dynamic-memoize-container";
import Callable from "./callable";
import Callback from "./callback/callback";
import Validation from "@dikac/t-boolean/validation/validation";
export declare type Argument<FunctionType extends Callable> = Callback<FunctionType> & Partial<Validation<[Parameters<FunctionType>, Parameters<FunctionType>]>>;
declare function DynamicMemoize<FunctionType extends Callable>(callback: FunctionType, validation?: Argument<FunctionType>['validation']): FunctionType & {
    container: DynamicMemoizeContainer<FunctionType>;
};
declare namespace DynamicMemoize {
    var object: <FunctionType extends Callable>({ callback, validation, }: Argument<FunctionType>) => FunctionType & {
        container: DynamicMemoizeContainer<FunctionType>;
    };
}
export default DynamicMemoize;
