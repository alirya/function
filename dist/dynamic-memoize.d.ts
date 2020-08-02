import Function from "./function";
import DynamicMemoizeContainer from "./object/dynamic-memoize-container";
export default function DynamicMemoize<FunctionT extends Function>(callable: FunctionT, compareArguments?: Function<[Parameters<FunctionT>, Parameters<FunctionT>], boolean>): FunctionT & {
    container: DynamicMemoizeContainer<FunctionT>;
};
