import DynamicMemoizeContainer from "./object/dynamic-memoize-container";
import Callable from "./callable";
import Callback from "./callback/callback";
import Validation from "@dikac/t-boolean/validation/validation";
export default function DynamicMemoize<FunctionType extends Callable>({ callback, validation, container }: Callback<FunctionType> & Partial<Validation<[Parameters<FunctionType>, Parameters<FunctionType>]>> & {
    container?: false;
}): FunctionType;
export default function DynamicMemoize<FunctionType extends Callable>({ callback, validation, container }: Callback<FunctionType> & Partial<Validation<[Parameters<FunctionType>, Parameters<FunctionType>]>> & {
    container: true;
}): [FunctionType, DynamicMemoizeContainer<FunctionType>];
