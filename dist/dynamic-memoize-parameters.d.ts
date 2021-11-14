import Container from "./object/dynamic-memoize-container-parameters";
import Callable from "./callable";
export default function DynamicMemoizeParameters<FunctionType extends Callable>(callback: FunctionType, validation?: Callable<[Parameters<FunctionType>, Parameters<FunctionType>], boolean>): FunctionType & {
    container: Container<FunctionType>;
};
