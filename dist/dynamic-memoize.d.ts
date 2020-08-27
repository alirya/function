import DynamicMemoizeContainer from "./object/dynamic-memoize-container";
import Callable from "./callable";
export default function DynamicMemoize<FunctionT extends Callable>(callable: FunctionT, compareArguments?: (argument: Parameters<FunctionT>, list: Parameters<FunctionT>) => boolean): FunctionT & {
    container: DynamicMemoizeContainer<FunctionT>;
};
