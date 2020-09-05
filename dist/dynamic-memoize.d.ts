import DynamicMemoizeContainer from "./object/dynamic-memoize-container";
import Callable from "./callable";
export default function DynamicMemoize<FunctionType extends Callable>(callable: FunctionType, compareArguments?: (argument: Parameters<FunctionType>, list: Parameters<FunctionType>) => boolean): FunctionType & {
    container: DynamicMemoizeContainer<FunctionType>;
};
