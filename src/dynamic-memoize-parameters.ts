import Equal from "@dikac/t-array/boolean/equal";
import Container from "./object/dynamic-memoize-container-parameters";
import Callable from "./callable";

export default function DynamicMemoizeParameters<
    FunctionType extends Callable,
>(
    callback : FunctionType,
    // validation : Callable<[Parameters<FunctionType>, Parameters<FunctionType>], boolean> = Equal,
    //validation : Callable<[Parameters<FunctionType>, Parameters<FunctionType>], boolean> = Equal,
    validation : Callable<[Parameters<FunctionType>, Parameters<FunctionType>], boolean> = Equal,
) : FunctionType & { container : Container<FunctionType> } {

    const memoizeContainer = new Container<FunctionType>(callback, validation);

    const callable : FunctionType & { container ?: Container<FunctionType> } = <FunctionType> function (... argument : Parameters<FunctionType>) : ReturnType<FunctionType> {

        return memoizeContainer.memoize(argument).return;
    };

    callable.container = memoizeContainer;

    return callable as FunctionType & { container : Container<FunctionType> };
}

